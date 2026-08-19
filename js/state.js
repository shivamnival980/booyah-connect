import { initialCurrentUser, initialPlayers, initialClips, initialChallenges, initialNews, initialMessages } from './data/initialData.js';

class StateManager {
  constructor() {
    this.listeners = [];
    this.activeTab = 'feed'; // 'feed', 'connect', 'challenges', 'leaderboard', 'news', 'chat', 'profile'
    this.searchQuery = '';
    this.selectedPlayerModal = null;
    this.selectedChallengeModalPlayer = null;
    this.selectedRatingModalPlayer = null;
    this.selectedUploadModal = false;
    this.selectedLoginModal = false;
    this.activeChatPlayerId = 'player_1';

    // Filters
    this.roleFilter = 'all';
    this.stateFilter = 'all';
    this.clipTagFilter = 'All Highlights';
    this.newsCategoryFilter = 'All Articles';
    this.challengeFilter = 'All';

    // Load or initialize localStorage
    this.currentUser = this.loadFromStorage('booyah_user', initialCurrentUser);
    this.players = this.loadFromStorage('booyah_players', initialPlayers);
    this.clips = this.loadFromStorage('booyah_clips', initialClips);
    this.challenges = this.loadFromStorage('booyah_challenges', initialChallenges);
    this.news = this.loadFromStorage('booyah_news', initialNews);
    this.messages = this.loadFromStorage('booyah_messages', initialMessages);
  }

  loadFromStorage(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.error(`Failed to load ${key} from storage:`, e);
      return defaultValue;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Failed to save ${key} to storage:`, e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  // --- Actions ---

  setActiveTab(tab) {
    this.activeTab = tab;
    this.notify();
  }

  setSearchQuery(query) {
    this.searchQuery = query;
    this.notify();
  }

  setRoleFilter(role) {
    this.roleFilter = role;
    this.notify();
  }

  setStateFilter(stateName) {
    this.stateFilter = stateName;
    this.notify();
  }

  setClipTagFilter(tag) {
    this.clipTagFilter = tag;
    this.notify();
  }

  setNewsCategoryFilter(category) {
    this.newsCategoryFilter = category;
    this.notify();
  }

  setChallengeFilter(filter) {
    this.challengeFilter = filter;
    this.notify();
  }

  openPlayerModal(player) {
    this.selectedPlayerModal = player;
    this.notify();
  }

  closePlayerModal() {
    this.selectedPlayerModal = null;
    this.notify();
  }

  openChallengeModal(player) {
    this.selectedChallengeModalPlayer = player;
    this.notify();
  }

  closeChallengeModal() {
    this.selectedChallengeModalPlayer = null;
    this.notify();
  }

  openRatingModal(player) {
    this.selectedRatingModalPlayer = player;
    this.notify();
  }

  closeRatingModal() {
    this.selectedRatingModalPlayer = null;
    this.notify();
  }

  toggleUploadModal(show) {
    this.selectedUploadModal = show;
    this.notify();
  }

  toggleLoginModal(show) {
    this.selectedLoginModal = show;
    this.notify();
  }

  loginUser(userData) {
    this.currentUser = {
      ...this.currentUser,
      ...userData,
      avatar: userData.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(userData.ign || 'Player')}`
    };
    this.saveToStorage('booyah_user', this.currentUser);
    this.toggleLoginModal(false);
    this.notify();
  }

  setActiveChatPlayer(playerId) {
    this.activeChatPlayerId = playerId;
    this.notify();
  }

  // Player Connections
  toggleConnection(playerId) {
    this.players = this.players.map(p => {
      if (p.id === playerId) {
        let newState = 'none';
        if (p.connectionState === 'none') newState = 'pending';
        else if (p.connectionState === 'pending') newState = 'connected';
        else if (p.connectionState === 'connected') newState = 'none';
        return { ...p, connectionState: newState };
      }
      return p;
    });

    const connCount = this.players.filter(p => p.connectionState === 'connected').length;
    this.currentUser.connectionsCount = 384 + connCount;

    this.saveToStorage('booyah_players', this.players);
    this.saveToStorage('booyah_user', this.currentUser);
    this.notify();
  }

  // Endorse Skill
  endorseSkill(playerId, skillName) {
    this.players = this.players.map(p => {
      if (p.id === playerId) {
        const updatedEndorsements = p.endorsements.map(e => {
          if (e.skill === skillName) {
            return { ...e, count: e.count + 1 };
          }
          return e;
        });
        return { ...p, endorsements: updatedEndorsements };
      }
      return p;
    });
    this.saveToStorage('booyah_players', this.players);
    this.notify();
  }

  // Rating Submission
  submitRating(playerId, ratingData) {
    const { aim, teamwork, iq, sportsmanship, reviewText } = ratingData;
    const overall = parseFloat(((aim + teamwork + iq + sportsmanship) / 4).toFixed(1));

    this.players = this.players.map(p => {
      if (p.id === playerId) {
        const newCount = p.ratingsCount + 1;
        const newRating = parseFloat((((p.rating * p.ratingsCount) + overall) / newCount).toFixed(1));
        return {
          ...p,
          rating: newRating,
          ratingsCount: newCount,
          ratingsBreakdown: {
            aim: parseFloat(((p.ratingsBreakdown.aim + aim) / 2).toFixed(1)),
            teamwork: parseFloat(((p.ratingsBreakdown.teamwork + teamwork) / 2).toFixed(1)),
            iq: parseFloat(((p.ratingsBreakdown.iq + iq) / 2).toFixed(1)),
            sportsmanship: parseFloat(((p.ratingsBreakdown.sportsmanship + sportsmanship) / 2).toFixed(1))
          }
        };
      }
      return p;
    });

    this.saveToStorage('booyah_players', this.players);
    this.closeRatingModal();
    this.notify();
  }

  // Submit Challenge
  sendChallenge(challengeData) {
    const newChallenge = {
      id: "chal_" + Date.now(),
      challengerId: this.currentUser.id,
      challengerIgn: this.currentUser.ign,
      challengerAvatar: this.currentUser.avatar,
      opponentId: challengeData.opponentId,
      opponentIgn: challengeData.opponentIgn,
      opponentAvatar: challengeData.opponentAvatar,
      mode: challengeData.mode,
      map: challengeData.map,
      stake: challengeData.stake + " Booyah Coins",
      roomId: Math.floor(1000000 + Math.random() * 9000000).toString(),
      roomPass: Math.floor(1000 + Math.random() * 9000).toString(),
      scheduledTime: challengeData.scheduledTime || "Today 9:00 PM IST",
      status: "Pending",
      winnerId: null,
      proofUrl: null
    };

    this.challenges = [newChallenge, ...this.challenges];
    this.saveToStorage('booyah_challenges', this.challenges);
    this.closeChallengeModal();
    this.setActiveTab('challenges');
    this.notify();
  }

  // Update Challenge Status
  updateChallengeStatus(challengeId, newStatus, winnerId = null) {
    this.challenges = this.challenges.map(c => {
      if (c.id === challengeId) {
        return {
          ...c,
          status: newStatus,
          winnerId: winnerId || c.winnerId
        };
      }
      return c;
    });
    this.saveToStorage('booyah_challenges', this.challenges);
    this.notify();
  }

  // Clip Actions
  addClip(clipData) {
    const newClip = {
      id: "clip_" + Date.now(),
      authorId: this.currentUser.id,
      authorIgn: this.currentUser.ign,
      authorAvatar: this.currentUser.avatar,
      authorRank: this.currentUser.rank,
      title: clipData.title,
      description: clipData.description,
      mediaType: clipData.mediaType || "image",
      mediaUrl: clipData.mediaUrl || "assets/gameplay_thumb1.jpg",
      tags: clipData.tags ? clipData.tags.split(',').map(t => t.trim()) : ["FreeFire", "Clutch"],
      likes: 0,
      isLiked: false,
      views: 12,
      createdAt: "Just now",
      comments: []
    };

    this.clips = [newClip, ...this.clips];
    this.saveToStorage('booyah_clips', this.clips);
    this.toggleUploadModal(false);
    this.notify();
  }

  toggleLikeClip(clipId) {
    this.clips = this.clips.map(c => {
      if (c.id === clipId) {
        const isLiked = !c.isLiked;
        return {
          ...c,
          isLiked,
          likes: isLiked ? c.likes + 1 : c.likes - 1
        };
      }
      return c;
    });
    this.saveToStorage('booyah_clips', this.clips);
    this.notify();
  }

  addCommentToClip(clipId, text) {
    if (!text.trim()) return;
    this.clips = this.clips.map(c => {
      if (c.id === clipId) {
        const newComment = {
          id: "c_" + Date.now(),
          authorIgn: this.currentUser.ign,
          authorAvatar: this.currentUser.avatar,
          text: text.trim(),
          time: "Just now"
        };
        return {
          ...c,
          comments: [...c.comments, newComment]
        };
      }
      return c;
    });
    this.saveToStorage('booyah_clips', this.clips);
    this.notify();
  }

  // Chat Actions
  sendMessage(targetPlayerId, text) {
    if (!text.trim()) return;

    let chatSession = this.messages.find(m => m.withPlayerId === targetPlayerId);

    if (!chatSession) {
      const player = this.players.find(p => p.id === targetPlayerId);
      chatSession = {
        id: "msg_" + Date.now(),
        withPlayerId: targetPlayerId,
        withPlayerName: player ? player.ign : "Player",
        withPlayerAvatar: player ? player.avatar : "https://api.dicebear.com/7.x/bottts/svg?seed=Gamer",
        messages: []
      };
      this.messages.push(chatSession);
    }

    const newMsg = {
      sender: "user_me",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    chatSession.messages.push(newMsg);

    this.saveToStorage('booyah_messages', this.messages);
    this.notify();
  }
}

export const state = new StateManager();
