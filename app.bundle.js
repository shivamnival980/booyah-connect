// ==========================================================================
// BOOYAHCONNECT STANDALONE BUNDLE (WITH CRAZY MINI GAMES & 15-SEGMENT WHEEL & HISTORY LOG)
// ==========================================================================

const initialCurrentUser = {
  id: "user_me",
  ign: "⚡ BOOYAH_KRISH ⚡",
  uid: "849201948",
  avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=KrishPro",
  rank: "Grandmaster",
  rankStars: 62,
  level: 76,
  state: "Maharashtra",
  city: "Mumbai",
  role: "IGL / Rusher",
  guild: "Team Vipers (Lvl 4)",
  kdRatio: 4.85,
  headshotRate: "68.4%",
  winRate: "74.2%",
  matchesPlayed: 1420,
  booyahs: 1054,
  bio: "Official FFWS Qualifier Semi-Finalist | Grandmaster 62 Stars | Looking for competitive 4v4 CS squad members & 1v1 Room challenges! 💥",
  rating: 4.9,
  ratingsCount: 142,
  ratingsBreakdown: { aim: 4.9, teamwork: 4.8, iq: 5.0, sportsmanship: 4.7 },
  coins: 4500,
  connectionsCount: 384,
  skills: ["AWM Sniper", "M1887 One-Shot", "Gloo Wall Reflex", "IGL Shotcaller"],
  endorsements: [
    { skill: "Gloo Wall Fast Reflex", count: 88 },
    { skill: "Clutch 1v4 IQ", count: 112 },
    { skill: "AWM Long Range", count: 64 },
    { skill: "Squad IGL Shotcalling", count: 95 }
  ]
};

const initialPlayers = [
  {
    id: "player_1",
    ign: "🔥 Pahadi_Sniper_FF 🔥",
    uid: "104928101",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PahadiGamer",
    rank: "Grandmaster",
    rankStars: 99,
    level: 82,
    state: "Himachal Pradesh",
    city: "Shimla",
    role: "Sniper",
    guild: "Pahadi Army",
    kdRatio: 6.20,
    headshotRate: "84.5%",
    winRate: "81.0%",
    matchesPlayed: 3200,
    booyahs: 2592,
    bio: "Double AWM God | 2x FFIC Champion | Top 1 Sniper India 🎯",
    rating: 5.0,
    ratingsCount: 890,
    ratingsBreakdown: { aim: 5.0, teamwork: 4.9, iq: 5.0, sportsmanship: 4.9 },
    connectionState: "connected",
    skills: ["AWM Sniper", "Double AWM", "Predictive Sniping", "M82B Main"],
    endorsements: [
      { skill: "Double AWM Master", count: 420 },
      { skill: "Predictive Sniping", count: 380 }
    ]
  },
  {
    id: "player_2",
    ign: "⚡ Total_Desi_Rusher ⚡",
    uid: "394018274",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=TotalDesi",
    rank: "Grandmaster",
    rankStars: 45,
    level: 74,
    state: "Delhi NCR",
    city: "New Delhi",
    role: "Rusher",
    guild: "Desi Gamers Squad",
    kdRatio: 5.10,
    headshotRate: "71.2%",
    winRate: "76.5%",
    matchesPlayed: 2100,
    booyahs: 1606,
    bio: "Aggressive M1887 Entry Rusher | 1v4 Room Challenge Accepted Any Time 💥",
    rating: 4.8,
    ratingsCount: 430,
    ratingsBreakdown: { aim: 4.8, teamwork: 4.7, iq: 4.9, sportsmanship: 4.6 },
    connectionState: "pending",
    skills: ["MP40 Cobra", "M1887 One-Shot", "Aggressive Rusher"],
    endorsements: [
      { skill: "One-Shot Shotgun", count: 210 },
      { skill: "Aggressive Flank", count: 185 }
    ]
  }
];

const initialClips = [
  {
    id: "clip_1",
    authorId: "user_me",
    authorIgn: "⚡ BOOYAH_KRISH ⚡",
    authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=KrishPro",
    authorRank: "Grandmaster",
    title: "INSANE 1v4 Clutch in CS Ranked Grandmaster Lobby! 💥 AWM + M1887",
    description: "Remaining alone against 4 enemy rushers with only 12 HP left! Clean Gloo wall trap + AWM quick scope headshots.",
    mediaType: "image",
    mediaUrl: "assets/gameplay_thumb1.jpg",
    tags: ["1v4 Clutch", "CS-Ranked", "Grandmaster", "AWM"],
    likes: 342,
    isLiked: false,
    views: 2450,
    createdAt: "2 hours ago",
    comments: [
      { id: "c1", authorIgn: "🔥 Pahadi_Sniper_FF 🔥", authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PahadiGamer", text: "That 2nd headshot quick scope was insane brother!! 🔥", time: "1 hour ago" }
    ]
  }
];

const initialEsportsListings = [
  {
    id: "esp_1",
    teamName: "Team Vipers Esports",
    tournament: "FFWS India 2026 Qualifiers",
    prizePool: "₹1.5 Crore",
    roleNeeded: "Sniper / Long Range Specialist",
    minKd: "4.5+",
    guildLevel: "Level 4 Guild",
    locationReq: "All India",
    postedBy: "BOOYAH_KRISH",
    applicantsCount: 14
  }
];

const initialChallenges = [
  {
    id: "chal_1",
    challengerId: "user_me",
    challengerIgn: "⚡ BOOYAH_KRISH ⚡",
    challengerAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=KrishPro",
    opponentId: "player_4",
    opponentIgn: "💥 Action_Bolte_FF 💥",
    opponentAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ActionBolte",
    mode: "1v1 Headshot Only Room",
    map: "Bermuda (Ironworks)",
    stake: "500 Booyah Coins",
    roomId: "8841029",
    roomPass: "7711",
    scheduledTime: "Today at 8:00 PM IST",
    status: "Pending"
  }
];

const initialNews = [
  {
    id: "news_opp_1",
    title: "Garena Official Creator Partner Program 2026: V-Badge, 15k Monthly Diamonds & Sponsorship Open!",
    category: "Gaming Opportunities",
    date: "Aug 19, 2026",
    summary: "Garena has officially opened the 2026 Partner Program for creators. Earn in-game V-Badge, monthly diamond stipends & tournament co-casting rights!",
    image: "assets/ff_banner.jpg",
    author: "Garena Partner Team",
    tags: ["PartnerProgram", "V-Badge"],
    linkText: "Apply on Official Garena Partner Site ↗",
    officialUrl: "https://ff.garena.com/",
    badge: "🔥 TOP OPPORTUNITY"
  }
];

const initialMessages = [
  {
    id: "msg_1",
    withPlayerId: "player_1",
    withPlayerName: "🔥 Pahadi_Sniper_FF 🔥",
    withPlayerAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PahadiGamer",
    messages: [
      { sender: "player_1", text: "Bro, ready for 4v4 CS tournament tomorrow?", time: "10:30 AM" }
    ]
  }
];

const initialGameHistory = [
  {
    id: "gh_1",
    gameName: "🎯 AWM Headshot Target Range",
    result: "BOOYAH Victory",
    coinsWon: 3,
    detail: "5/5 Quickscope Headshots",
    time: "1:45 PM",
    date: "Today"
  },
  {
    id: "gh_2",
    gameName: "🛡️ 360° Gloo Wall Defender",
    result: "BOOYAH Victory",
    coinsWon: 2,
    detail: "5/5 Directional Attacks Blocked",
    time: "1:40 PM",
    date: "Today"
  }
];

// STATE MANAGER
class StateManager {
  constructor() {
    this.listeners = [];
    this.activeTab = 'feed';
    this.searchQuery = '';
    this.selectedPlayerModal = null;
    this.selectedChallengeModalPlayer = null;
    this.selectedRatingModalPlayer = null;
    this.selectedUploadModal = false;
    this.selectedLoginModal = false;
    this.selectedEsportsApplyModal = null;
    this.activeGameArenaModal = null; // 'awm', 'gloo360', 'spin15'
    this.viewedPlayer = null;
    this.activeChatPlayerId = 'player_1';

    this.roleFilter = 'all';
    this.stateFilter = 'all';
    this.skillFilter = 'all';
    this.clipTagFilter = 'All Highlights';
    this.newsCategoryFilter = 'All Articles';
    this.challengeFilter = 'All';

    this.currentUser = this.loadFromStorage('booyah_user', initialCurrentUser);
    this.players = this.loadFromStorage('booyah_players', initialPlayers);
    this.clips = this.loadFromStorage('booyah_clips', initialClips);
    this.challenges = this.loadFromStorage('booyah_challenges', initialChallenges);
    this.news = this.loadFromStorage('booyah_news', initialNews);
    this.messages = this.loadFromStorage('booyah_messages', initialMessages);
    this.esportsListings = this.loadFromStorage('booyah_esports', initialEsportsListings);
    this.esportsApplications = this.loadFromStorage('booyah_apps', []);
    this.gameHistory = this.loadFromStorage('booyah_game_history', initialGameHistory);
  }

  loadFromStorage(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  getTodayEarnedCoins() {
    const todayKey = 'booyah_daily_coins_' + new Date().toISOString().slice(0, 10);
    return parseInt(localStorage.getItem(todayKey) || '0', 10);
  }

  addGameHistoryRecord(gameName, result, coinsWon, detail) {
    const record = {
      id: "gh_" + Date.now(),
      gameName,
      result,
      coinsWon,
      detail,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: "Today"
    };

    this.gameHistory = [record, ...this.gameHistory];
    this.saveToStorage('booyah_game_history', this.gameHistory);
  }

  awardMiniGameCoins(amount, gameName, detail = "Round Win") {
    const todayKey = 'booyah_daily_coins_' + new Date().toISOString().slice(0, 10);
    let currentEarned = this.getTodayEarnedCoins();

    if (currentEarned >= 10) {
      this.addGameHistoryRecord(gameName, "Limit Reached", 0, "Daily 10 Coins Limit Maxed");
      alert(`⚠️ Daily Coin Limit Reached!\nYou have already earned the maximum 10 Booyah Coins for today. Come back tomorrow!`);
      return false;
    }

    let actualAwarded = Math.min(amount, 10 - currentEarned);
    currentEarned += actualAwarded;
    localStorage.setItem(todayKey, currentEarned.toString());

    this.currentUser.coins += actualAwarded;
    this.saveToStorage('booyah_user', this.currentUser);
    this.addGameHistoryRecord(gameName, "BOOYAH Victory", actualAwarded, detail);
    this.notify();

    alert(`🎉 VICTORY! BOOYAH!\nYou won +${actualAwarded} Booyah Coins in ${gameName}!\nDaily Limit Progress: ${currentEarned}/10 Coins`);
    return true;
  }

  openGameArena(gameType) {
    this.activeGameArenaModal = gameType;
    this.notify();
  }

  closeGameArena() {
    this.activeGameArenaModal = null;
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => { this.listeners = this.listeners.filter(l => l !== listener); };
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  setActiveTab(tab) { this.activeTab = tab; this.notify(); }
  setSearchQuery(query) { this.searchQuery = query; this.notify(); }
  setRoleFilter(role) { this.roleFilter = role; this.notify(); }
  setStateFilter(stateName) { this.stateFilter = stateName; this.notify(); }
  setSkillFilter(skill) { this.skillFilter = skill; this.notify(); }
  setClipTagFilter(tag) { this.clipTagFilter = tag; this.notify(); }
  setNewsCategoryFilter(category) { this.newsCategoryFilter = category; this.notify(); }
  setChallengeFilter(filter) { this.challengeFilter = filter; this.notify(); }

  openPlayerProfile(player) {
    this.viewedPlayer = player;
    this.activeTab = 'view-player-profile';
    this.notify();
  }

  openPlayerModal(player) { this.selectedPlayerModal = player; this.notify(); }
  closePlayerModal() { this.selectedPlayerModal = null; this.notify(); }
  openChallengeModal(player) { this.selectedChallengeModalPlayer = player; this.notify(); }
  closeChallengeModal() { this.selectedChallengeModalPlayer = null; this.notify(); }
  openRatingModal(player) { this.selectedRatingModalPlayer = player; this.notify(); }
  closeRatingModal() { this.selectedRatingModalPlayer = null; this.notify(); }
  toggleUploadModal(show) { this.selectedUploadModal = show; this.notify(); }
  toggleLoginModal(show) { this.selectedLoginModal = show; this.notify(); }
  openEsportsApplyModal(listing) { this.selectedEsportsApplyModal = listing; this.notify(); }
  closeEsportsApplyModal() { this.selectedEsportsApplyModal = null; this.notify(); }

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

  setActiveChatPlayer(playerId) { this.activeChatPlayerId = playerId; this.notify(); }

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
    this.saveToStorage('booyah_players', this.players);
    this.notify();
  }

  submitEsportsApplication(appData) {
    const newApp = {
      id: "app_" + Date.now(),
      teamName: appData.teamName,
      tournament: appData.tournament,
      role: appData.role,
      uid: appData.uid,
      kd: appData.kd,
      contact: appData.contact,
      status: "Submitted (Under Review)",
      submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.esportsApplications = [newApp, ...this.esportsApplications];
    this.saveToStorage('booyah_apps', this.esportsApplications);
    this.closeEsportsApplyModal();
    this.notify();
  }

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
      status: "Pending"
    };

    this.challenges = [newChallenge, ...this.challenges];
    this.saveToStorage('booyah_challenges', this.challenges);
    this.closeChallengeModal();
    this.setActiveTab('challenges');
    this.notify();
  }

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
        return { ...c, isLiked, likes: isLiked ? c.likes + 1 : c.likes - 1 };
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
        return { ...c, comments: [...c.comments, newComment] };
      }
      return c;
    });
    this.saveToStorage('booyah_clips', this.clips);
    this.notify();
  }

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

const state = new StateManager();

// NAVBAR RENDERER
function renderNavbar() {
  const { activeTab, searchQuery, currentUser, challenges } = state;
  const pendingChallengesCount = challenges.filter(c => c.opponentId === currentUser.id && c.status === 'Pending').length;

  return `
    <header class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand" id="nav-brand">
          <div class="logo-icon">🔥</div>
          <div class="brand-text">
            <span class="brand-title">BOOYAH<span class="brand-highlight">CONNECT</span></span>
          </div>
        </div>

        <div class="navbar-search">
          <input type="text" id="global-search-input" placeholder="Search UIDs, IGNs..." value="${searchQuery}" />
          <button class="btn btn-primary btn-sm" id="btn-trigger-search">🔍</button>
        </div>

        <nav class="navbar-tabs">
          <button class="nav-tab ${activeTab === 'feed' ? 'active' : ''}" data-tab="feed" id="nav-home-btn">
            🏠 Home
          </button>
          <button class="nav-tab ${activeTab === 'connect' ? 'active' : ''}" data-tab="connect">Network</button>
          <button class="nav-tab ${activeTab === 'minigames' ? 'active' : ''}" data-tab="minigames">🎮 Mini Games</button>
          <button class="nav-tab ${activeTab === 'challenges' ? 'active' : ''}" data-tab="challenges">
            1v1 Rooms ${pendingChallengesCount > 0 ? `<span class="nav-badge">${pendingChallengesCount}</span>` : ''}
          </button>
          <button class="nav-tab ${activeTab === 'esports' ? 'active' : ''}" data-tab="esports">🏆 Tryouts</button>
          <button class="nav-tab ${activeTab === 'news' ? 'active' : ''}" data-tab="news">🌐 News</button>
          <button class="nav-tab ${activeTab === 'leaderboard' ? 'active' : ''}" data-tab="leaderboard">Leaderboard</button>
          <button class="nav-tab ${activeTab === 'chat' ? 'active' : ''}" data-tab="chat">Chat</button>
        </nav>

        <div class="navbar-user-actions">
          <div class="coin-badge">
            <span>🪙 ${currentUser.coins.toLocaleString()}</span>
          </div>

          <button class="btn btn-secondary btn-sm" id="btn-login-modal" title="Sign In / Switch Profile">🔑</button>

          <button class="nav-profile-btn ${activeTab === 'profile' ? 'active' : ''}" data-tab="profile">
            <img src="${currentUser.avatar}" alt="Avatar" class="user-avatar-tiny" />
            <span class="user-ign-mini">${currentUser.ign.split(' ')[1] || currentUser.ign}</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

// FEED RENDERER
function renderFeed() {
  const { clips, searchQuery, clipTagFilter } = state;

  const filteredClips = clips.filter(c => {
    let matchesSearch = true;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      matchesSearch = c.title.toLowerCase().includes(q) ||
                      c.authorIgn.toLowerCase().includes(q) ||
                      c.tags.some(t => t.toLowerCase().includes(q));
    }

    let matchesTag = true;
    if (clipTagFilter && clipTagFilter !== 'All Highlights') {
      matchesTag = c.tags.some(t => t.toLowerCase().replace('-', '').includes(clipTagFilter.toLowerCase().replace('-', '').replace(' ', '')));
    }

    return matchesSearch && matchesTag;
  });

  const availableTags = ['All Highlights', '1v4 Clutch', 'CS Ranked', 'AWM Sniping', 'Grandmaster'];

  return `
    <div class="feed-container">
      <div class="feed-hero">
        <div class="hero-content">
          <span class="hero-tag">🔥 INDIA COMMUNITY FEED</span>
          <h1 class="hero-title">SHOWCASE YOUR BOOYAH MOMENTS</h1>
          <p class="hero-sub">Upload 1v4 clutches, AWM headshots, and squad wipes to build your player reputation!</p>
          <button class="btn btn-primary" id="btn-upload-clip">+ Upload Gameplay Clip</button>
        </div>
      </div>

      <div class="feed-header-bar">
        <h2>Latest Community Gameplay (${filteredClips.length})</h2>
        <div class="feed-tags-quick">
          ${availableTags.map(tag => `
            <span class="tag-pill ${clipTagFilter === tag ? 'active' : ''}" data-action="filter-clip-tag" data-tag="${tag}">${tag}</span>
          `).join('')}
        </div>
      </div>

      <div class="clips-grid">
        ${filteredClips.map(clip => `
          <div class="clip-card">
            <div class="clip-card-header">
              <img src="${clip.authorAvatar}" alt="Avatar" class="author-avatar" />
              <div class="author-meta">
                <div class="author-ign">${clip.authorIgn}</div>
                <div class="author-sub">${clip.authorRank} • ${clip.createdAt}</div>
              </div>
            </div>

            <div class="clip-media-box">
              ${clip.mediaType === 'video' ? `
                <video src="${clip.mediaUrl}" controls preload="metadata" class="clip-media-video" poster="${clip.poster || 'assets/gameplay_thumb1.jpg'}"></video>
              ` : `
                <img src="${clip.mediaUrl}" alt="${clip.title}" class="clip-media-img" />
              `}
              <div class="views-badge">👁️ ${clip.views.toLocaleString()} views</div>
            </div>

            <div class="clip-card-body">
              <h3 class="clip-title">${clip.title}</h3>
              <p class="clip-desc">${clip.description}</p>

              <div class="clip-actions">
                <button class="action-btn ${clip.isLiked ? 'liked' : ''}" data-action="like" data-id="${clip.id}">
                  ❤️ ${clip.likes} Likes
                </button>
                <button class="action-btn" data-action="toggle-comments" data-id="${clip.id}">
                  💬 ${clip.comments.length} Comments
                </button>
              </div>

              <div class="comment-section" id="comments-${clip.id}">
                <div class="comments-list">
                  ${clip.comments.map(c => `
                    <div class="comment-item">
                      <img src="${c.authorAvatar}" alt="Commenter" class="comment-avatar" />
                      <div>
                        <strong>${c.authorIgn}</strong>: ${c.text}
                      </div>
                    </div>
                  `).join('')}
                </div>
                <div class="add-comment-form">
                  <input type="text" placeholder="Write a comment..." class="comment-input" id="input-comment-${clip.id}" />
                  <button class="btn btn-secondary btn-sm send-comment-btn" data-clip-id="${clip.id}">Post</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// CONNECTIONS RENDERER
function renderConnections() {
  const { players, searchQuery, roleFilter, stateFilter, skillFilter } = state;

  const filteredPlayers = players.filter(p => {
    let matchesSearch = true;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      matchesSearch = p.ign.toLowerCase().includes(q) ||
                      p.uid.includes(q) ||
                      p.state.toLowerCase().includes(q) ||
                      (p.city && p.city.toLowerCase().includes(q)) ||
                      p.role.toLowerCase().includes(q) ||
                      (p.skills && p.skills.some(s => s.toLowerCase().includes(q)));
    }
    let matchesRole = roleFilter === 'all' || p.role.toLowerCase().includes(roleFilter.toLowerCase());
    let matchesState = stateFilter === 'all' || p.state.toLowerCase().includes(stateFilter.toLowerCase());
    let matchesSkill = skillFilter === 'all' || (p.skills && p.skills.some(s => s.toLowerCase().includes(skillFilter.toLowerCase())));

    return matchesSearch && matchesRole && matchesState && matchesSkill;
  });

  const allIndiaStates = ["Maharashtra", "Himachal Pradesh", "Delhi NCR", "West Bengal", "Punjab", "Tamil Nadu", "Uttar Pradesh", "Gujarat"];
  const skillOptions = [
    { val: "all", label: "🎯 All Weapons & Skills" },
    { val: "AWM Sniper", label: "🎯 AWM / Double AWM Sniper" },
    { val: "MP40 Cobra", label: "⚡ MP40 Cobra Rusher" },
    { val: "M1887 One-Shot", label: "💥 M1887 One-Shot" },
    { val: "Gloo Wall Reflex", label: "🛡️ Gloo Wall Reflex" }
  ];

  return `
    <div class="connections-container">
      <div class="network-header">
        <div>
          <h2>LinkedIn Player Network</h2>
          <p>Find & connect with verified Free Fire pros across India by Weapon Skills, Roles & Regional Locations!</p>
        </div>
        <span class="network-stats-pill">👥 ${players.length} Pro Gamers Listed</span>
      </div>

      <div class="filter-bar">
        <div class="filter-group">
          <label>Search by Weapon / Skill:</label>
          <select id="skill-filter" class="filter-select">
            ${skillOptions.map(s => `
              <option value="${s.val}" ${skillFilter === s.val ? 'selected' : ''}>${s.label}</option>
            `).join('')}
          </select>
        </div>

        <div class="filter-group">
          <label>Filter by Role:</label>
          <select id="role-filter" class="filter-select">
            <option value="all" ${roleFilter === 'all' ? 'selected' : ''}>All Roles</option>
            <option value="Rusher" ${roleFilter === 'Rusher' ? 'selected' : ''}>Rusher</option>
            <option value="Sniper" ${roleFilter === 'Sniper' ? 'selected' : ''}>Sniper</option>
            <option value="IGL" ${roleFilter === 'IGL' ? 'selected' : ''}>IGL / Shotcaller</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Filter by Location:</label>
          <select id="state-filter" class="filter-select">
            <option value="all" ${stateFilter === 'all' ? 'selected' : ''}>🇮🇳 All India</option>
            ${allIndiaStates.map(st => `
              <option value="${st}" ${stateFilter === st ? 'selected' : ''}>📍 ${st}</option>
            `).join('')}
          </select>
        </div>
      </div>

      <div class="players-grid">
        ${filteredPlayers.map(player => `
          <div class="player-card">
            <div class="player-card-banner">
              <span class="state-badge">📍 ${player.city || ''}, ${player.state}</span>
              <span class="rank-badge-pill grandmaster">${player.rank} ⭐${player.rankStars}</span>
            </div>
            <div class="player-card-body">
              <div class="player-avatar-wrapper" data-action="view-full-profile" data-id="${player.id}">
                <img src="${player.avatar}" alt="${player.ign}" class="player-avatar" />
              </div>
              <h3 class="player-ign" data-action="view-full-profile" data-id="${player.id}">${player.ign}</h3>
              <div class="player-uid">UID: ${player.uid}</div>
              <div class="player-role">Role: <strong>${player.role}</strong></div>

              <div class="player-skills-container" style="margin: 8px 0; display: flex; flex-wrap: wrap; gap: 4px; justify-content: center;">
                ${(player.skills || ["AWM Sniper", "M1887 One-Shot"]).map(sk => `
                  <span class="skill-chip ${skillFilter === sk ? 'active' : ''}" data-action="filter-skill-chip" data-skill="${sk}" style="font-size: 0.72rem; background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); padding: 2px 8px; border-radius: 12px; cursor: pointer;">
                    ⚡ ${sk}
                  </span>
                `).join('')}
              </div>

              <div class="player-metrics">
                <div class="metric-box"><span class="metric-val">⭐ ${player.rating}</span><span class="metric-lbl">Rating</span></div>
                <div class="metric-box"><span class="metric-val">${player.kdRatio}</span><span class="metric-lbl">K/D</span></div>
                <div class="metric-box"><span class="metric-val">${player.headshotRate}</span><span class="metric-lbl">HS %</span></div>
              </div>

              <div class="player-card-actions">
                <button class="btn btn-connect ${player.connectionState}" data-action="toggle-connect" data-id="${player.id}">
                  ${player.connectionState === 'connected' ? '✓ Connected' : player.connectionState === 'pending' ? '⏳ Pending' : '+ Connect'}
                </button>
                <button class="btn btn-primary" data-action="view-full-profile" data-id="${player.id}">
                  🔍 View Profile
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// CRAZY MINI GAMES ARENA & HISTORY LOG RENDERER
function renderMiniGames() {
  const earnedToday = state.getTodayEarnedCoins();
  const limitRemaining = Math.max(0, 10 - earnedToday);
  const history = state.gameHistory;

  return `
    <div class="minigames-container">
      <div class="minigames-hero" style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.3) 0%, rgba(13, 15, 18, 0.95) 100%); padding: 32px; border-radius: 16px; margin-bottom: 24px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="background: var(--amber-gold); color: #000; font-weight: 800; font-size: 0.75rem; padding: 4px 12px; border-radius: 12px;">🎮 CRAZY ARCADE ARENA</span>
          <h1 style="font-size: 2.4rem; margin: 8px 0; font-family: var(--font-heading);">FREE FIRE MINI GAMES & LUCKY WHEEL</h1>
          <p style="color: var(--text-light); max-width: 600px;">Click <strong>"PLAY GAME"</strong> to launch full-screen 3D Sniper Range, 360° Gloo Defender & 15-Segment Lucky Wheel!</p>
        </div>

        <div style="background: var(--dark-surface); border: 2px solid var(--amber-gold); padding: 16px 24px; border-radius: 16px; text-align: center; shrink: 0;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Daily Coin Earnings</div>
          <div style="font-size: 2.2rem; font-weight: 800; color: var(--amber-gold); margin: 4px 0;">🪙 ${earnedToday} / 10</div>
          <div style="font-size: 0.75rem; color: ${limitRemaining > 0 ? '#00E676' : '#FF5252'}; font-weight: 700;">
            ${limitRemaining > 0 ? `Remaining Today: +${limitRemaining} Coins` : '⚠️ Daily Capped (Resets Midnight)'}
          </div>
        </div>
      </div>

      <!-- 3 MINI GAME CARDS -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; margin-bottom: 36px;">
        
        <!-- GAME 1 CARD -->
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="margin: 0; font-size: 1.25rem;">🎯 3D AWM Quickscope Range</h3>
              <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem;">
                +3 🪙
              </span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">Aim with scope crosshair and fire quickscopes at 3D moving headshot targets to score 5 hits!</p>
          </div>
          <button class="btn btn-primary" data-action="launch-game" data-game="awm" style="width: 100%; justify-content: center;">
            🎯 PLAY AWM SNIPER ARENA
          </button>
        </div>

        <!-- GAME 2 CARD -->
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="margin: 0; font-size: 1.25rem;">🛡️ 360° Gloo Wall Defender</h3>
              <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem;">
                +2 🪙
              </span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">Scan 360-degree radar for incoming enemy attacks (N, S, E, W) & drop Gloo Walls to block 5 shots!</p>
          </div>
          <button class="btn btn-primary" data-action="launch-game" data-game="gloo360" style="width: 100%; justify-content: center;">
            🛡️ PLAY 360° GLOO DEFENDER
          </button>
        </div>

        <!-- GAME 3 CARD -->
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="margin: 0; font-size: 1.25rem;">🎰 15-Segment Lucky Wheel</h3>
              <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem;">
                +1 ~ +5 🪙
              </span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">Spin the 15-segment wheel featuring 10 empty & 5 reward slots (1 to 5 Booyah Coins)!</p>
          </div>
          <button class="btn btn-primary" data-action="launch-game" data-game="spin15" style="width: 100%; justify-content: center;">
            🎰 SPIN 15-SEGMENT WHEEL
          </button>
        </div>

      </div>

      <!-- GAMEPLAY & WIN HISTORY REVIEW LOG -->
      <div style="background: var(--bg-card); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h3 style="margin: 0;">📜 Gameplay & Win History Log (${history.length})</h3>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Real-Time Log</span>
        </div>

        ${history.length === 0 ? `
          <p style="color: var(--text-muted); text-align: center; padding: 20px;">No games played yet. Click "PLAY GAME" above to start earning!</p>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${history.map(item => `
              <div style="background: var(--dark-surface); padding: 12px 16px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid ${item.coinsWon > 0 ? '#00E676' : 'var(--text-muted)'};">
                <div>
                  <strong style="color: #FFF;">${item.gameName}</strong> — <span style="font-size: 0.85rem; color: var(--text-light);">${item.detail}</span>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${item.date} at ${item.time}</div>
                </div>
                <div style="text-align: right;">
                  <span style="background: ${item.coinsWon > 0 ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 255, 255, 0.05)'}; color: ${item.coinsWon > 0 ? '#00E676' : 'var(--text-muted)'}; font-weight: 800; padding: 4px 10px; border-radius: 10px; font-size: 0.85rem;">
                    ${item.coinsWon > 0 ? `+${item.coinsWon} 🪙 ${item.result}` : item.result}
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// FULL PLAYER PROFILE PAGE RENDERER
function renderFullPlayerProfile() {
  const player = state.viewedPlayer || state.players[0];

  return `
    <div class="profile-page-container">
      <button class="btn btn-secondary" id="btn-back-to-network" style="margin-bottom: 16px;">
        ← Back to Network
      </button>

      <div class="profile-banner-card">
        <div class="profile-header-main" style="padding: 24px; display: flex; gap: 24px; align-items: center; background: var(--bg-card); border-radius: 16px;">
          <img src="${player.avatar}" class="profile-large-avatar" style="width: 110px; height: 110px; border-radius: 50%; border: 4px solid var(--primary-fire);" />
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <h1 style="margin: 0; font-size: 2rem;">${player.ign}</h1>
              <span class="rank-badge-pill grandmaster">${player.rank} ⭐${player.rankStars}</span>
            </div>
            <p style="margin: 4px 0; color: var(--amber-gold);">UID: <strong>${player.uid}</strong> | 📍 ${player.city || ''}, ${player.state} | Guild: ${player.guild || 'N/A'}</p>
            <p style="margin: 8px 0; color: var(--text-light); font-size: 0.95rem;">${player.bio}</p>

            <div style="display: flex; gap: 10px; margin-top: 16px;">
              <button class="btn btn-challenge" data-action="challenge" data-id="${player.id}">⚔️ Challenge 1v1 Room</button>
              <button class="btn btn-primary" data-action="message" data-id="${player.id}">💬 Direct Message</button>
              <button class="btn btn-secondary" data-action="rate" data-id="${player.id}">⭐ Rate Player</button>
              <button class="btn btn-connect ${player.connectionState}" data-action="toggle-connect" data-id="${player.id}">
                ${player.connectionState === 'connected' ? '✓ Connected' : player.connectionState === 'pending' ? '⏳ Pending' : '+ Connect'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ESPORTS TRYOUTS PORTAL
function renderEsports() {
  const { esportsListings } = state;

  return `
    <div class="esports-container">
      <div class="esports-hero" style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.3) 0%, rgba(13, 15, 18, 0.95) 100%); padding: 30px; border-radius: 16px; margin-bottom: 24px; border: 1px solid var(--border-color);">
        <h1>🏆 ESPORTS RECRUITMENT & SQUAD TRYOUTS</h1>
        <p>Apply for official Free Fire tournament teams, competitive guilds, and cash cup tryouts across India!</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 20px;">
        ${esportsListings.map(item => `
          <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 20px;">
            <h3 style="margin: 0; font-size: 1.2rem; color: #FFF;">${item.teamName}</h3>
            <span style="font-size: 0.8rem; color: var(--amber-gold); font-weight: 700;">${item.tournament}</span>
            <div style="margin-top: 12px;">
              <button class="btn btn-primary btn-sm" data-action="open-esports-apply" data-id="${item.id}">📝 Apply for Squad</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// EXPANDED NEWS & GAMING OPPORTUNITIES RENDERER
function renderNews() {
  const { news, newsCategoryFilter } = state;
  const categories = ['All Articles', 'Gaming Opportunities', 'Worldwide Esports', 'Global Patch Notes', 'Redeem Codes & Events'];

  const filteredNews = news.filter(article => {
    if (!newsCategoryFilter || newsCategoryFilter === 'All Articles') return true;
    return article.category === newsCategoryFilter;
  });

  return `
    <div class="news-container">
      <div class="news-hero" style="background: linear-gradient(135deg, rgba(255, 183, 0, 0.2) 0%, rgba(13, 15, 18, 0.95) 100%), url('assets/ff_news_thumb.jpg'); background-size: cover; padding: 36px; border-radius: 16px; margin-bottom: 24px; border: 1px solid rgba(255, 183, 0, 0.3);">
        <span style="background: var(--amber-gold); color: #000; font-weight: 800; font-size: 0.75rem; padding: 4px 12px; border-radius: 12px;">🌐 OFFICIAL GARENA FREE FIRE HUB</span>
        <h1 style="font-size: 2.4rem; margin: 10px 0 6px 0; font-family: var(--font-heading);">OFFICIAL WEBSITES & GAMING OPPORTUNITIES</h1>
        <p style="color: var(--text-light); max-width: 700px;">Direct redirect links to official Garena V-Badge Creator Grants, FFWS International Esports Portals, Advance Server & Rewards Redemption!</p>
      </div>

      <div class="news-categories" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        ${categories.map(cat => `
          <span class="cat-pill ${newsCategoryFilter === cat ? 'active' : ''}" data-action="filter-news" data-category="${cat}">${cat}</span>
        `).join('')}
      </div>

      <div class="news-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 24px;">
        ${filteredNews.map(article => `
          <div class="news-card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;">
            <div style="position: relative; height: 200px; overflow: hidden;">
              <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div class="news-content" style="padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="color: var(--primary-fire); font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">${article.category}</span>
                <h3 style="font-size: 1.15rem; margin: 8px 0; color: #FFF;">${article.title}</h3>
                <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">${article.summary}</p>
              </div>
              <a href="${article.officialUrl || 'https://ff.garena.com/'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center; text-decoration: none;">
                🌐 ${article.linkText || 'Visit Official Garena Site ↗'}
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// CHALLENGES RENDERER
function renderChallenges() {
  const { challenges } = state;
  return `
    <div class="challenges-container">
      <h2>⚔️ Custom Room Challenge Manager</h2>
      <div class="challenges-list">
        ${challenges.map(c => `
          <div class="challenge-card">
            <div><strong>${c.challengerIgn}</strong> VS <strong>${c.opponentIgn}</strong></div>
            <div>Stake: ${c.stake} | Room ID: ${c.roomId}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// LEADERBOARD RENDERER
function renderLeaderboard() {
  const { players, currentUser } = state;
  const sortedPlayers = [...players, currentUser].sort((a, b) => b.rankStars - a.rankStars);

  return `
    <div class="leaderboard-container">
      <h2>🏆 GRANDMASTER LEADERBOARD</h2>
      <table class="lb-table">
        <thead>
          <tr><th>Rank</th><th>Player</th><th>State</th><th>Role</th><th>Stars</th><th>K/D</th></tr>
        </thead>
        <tbody>
          ${sortedPlayers.map((p, index) => `
            <tr><td>#${index + 1}</td><td>${p.ign}</td><td>${p.state}</td><td>${p.role}</td><td>⭐ ${p.rankStars}</td><td>${p.kdRatio}</td></tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// CHAT RENDERER
function renderChat() {
  const { messages, activeChatPlayerId } = state;
  const activeSession = messages.find(m => m.withPlayerId === activeChatPlayerId) || messages[0];

  return `
    <div class="chat-container">
      <div class="chat-sidebar">
        <h3>💬 Squad Chat</h3>
        ${messages.map(m => `<div data-action="select-chat" data-player-id="${m.withPlayerId}"><strong>${m.withPlayerName}</strong></div>`).join('')}
      </div>
      <div class="chat-window">
        ${activeSession ? `
          <div class="chat-messages-area">
            ${activeSession.messages.map(msg => `<div class="chat-bubble">${msg.text}</div>`).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// PROFILE RENDERER
function renderProfile() {
  const { currentUser } = state;
  return `
    <div class="profile-page-container">
      <h1>${currentUser.ign}</h1>
      <p>UID: ${currentUser.uid} | ${currentUser.state}</p>
    </div>
  `;
}

// MODALS & FULL-SCREEN CRAZY GAME ARENA OVERLAYS
function renderModals() {
  const { selectedPlayerModal, selectedChallengeModalPlayer, selectedUploadModal, selectedLoginModal, selectedEsportsApplyModal, activeGameArenaModal, players } = state;

  return `
    <!-- FULL-SCREEN CRAZY MINI GAME ARENA MODALS -->
    ${activeGameArenaModal === 'awm' ? `
      <div class="game-arena-overlay">
        <div class="game-arena-card">
          <div class="game-arena-header">
            <div>
              <h2 style="margin:0; font-size: 1.4rem;">🎯 AWM Quickscope 3D Range</h2>
              <span style="font-size: 0.8rem; color: var(--amber-gold);">Aim Scope at Enemy Headshots & Press FIRE!</span>
            </div>
            <button class="modal-close-btn" id="close-game-arena">&times;</button>
          </div>
          <div class="game-arena-body">
            <div class="awm-scope-canvas" id="awm-arena-box">
              <div class="awm-scope-reticle">
                <div class="reticle-circle"></div>
                <div class="reticle-cross-h"></div>
                <div class="reticle-cross-v"></div>
              </div>

              <!-- HUD METERS -->
              <div style="position: absolute; top: 12px; left: 16px; color: var(--amber-gold); font-weight: 800; font-size: 0.9rem;">
                🎯 Headshots: <span id="awm-headshot-count" style="font-size: 1.2rem; color:#FFF;">0</span>/5
              </div>
              <div style="position: absolute; top: 12px; right: 16px; color: #FFF; font-weight: 800; font-size: 0.9rem;">
                ⏳ Ammo: <span style="color:var(--amber-gold);">5/5</span> | Time: <span id="awm-timer-sec">15</span>s
              </div>

              <!-- TARGET ENEMY -->
              <div id="awm-enemy-target" class="scope-target-enemy" style="top: 130px; left: 320px;">
                🎯
              </div>
            </div>

            <div style="margin-top: 20px; display: flex; gap: 16px; align-items: center; width: 100%; justify-content: center;">
              <button class="btn btn-primary btn-lg" id="btn-fire-awm" style="padding: 14px 40px; font-size: 1.1rem; border-radius: 12px; background: linear-gradient(135deg, var(--fire-red) 0%, var(--primary-fire) 100%);">
                🔥 FIRE AWM (Quickscope)
              </button>
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    ${activeGameArenaModal === 'gloo360' ? `
      <div class="game-arena-overlay">
        <div class="game-arena-card">
          <div class="game-arena-header">
            <div>
              <h2 style="margin:0; font-size: 1.4rem;">🛡️ 360° Gloo Wall Defender Arena</h2>
              <span style="font-size: 0.8rem; color: var(--amber-gold);">Scan 360° Directions for Enemy Laser & Drop Shield!</span>
            </div>
            <button class="modal-close-btn" id="close-game-arena">&times;</button>
          </div>
          <div class="game-arena-body">
            <div class="radar-360-container" id="gloo-arena-box">
              <div style="position: absolute; top: 12px; left: 16px; color: #00E676; font-weight: 800; font-size: 0.9rem;">
                🛡️ Attacks Blocked: <span id="gloo-blocked-count" style="font-size: 1.2rem; color:#FFF;">0</span>/5
              </div>

              <div class="radar-ring">
                <div class="radar-center-player">🛡️</div>
                <button class="radar-dir-btn radar-dir-north" id="gloo-dir-N">NORTH ⬆️</button>
                <button class="radar-dir-btn radar-dir-south" id="gloo-dir-S">SOUTH ⬇️</button>
                <button class="radar-dir-btn radar-dir-west" id="gloo-dir-W">WEST ⬅️</button>
                <button class="radar-dir-btn radar-dir-east" id="gloo-dir-E">EAST ➡️</button>
              </div>
            </div>

            <div style="margin-top: 16px; text-align: center;">
              <span id="gloo-status-text" style="font-size: 1rem; color: var(--amber-gold); font-weight: 800;">
                ⚠️ ALERT: Watch for Red Attack Warning on Radar Buttons!
              </span>
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    ${activeGameArenaModal === 'spin15' ? `
      <div class="game-arena-overlay">
        <div class="game-arena-card">
          <div class="game-arena-header">
            <div>
              <h2 style="margin:0; font-size: 1.4rem;">🎰 15-Segment Booyah Lucky Wheel</h2>
              <span style="font-size: 0.8rem; color: var(--amber-gold);">10 Empty & 5 Reward Segments (1 to 5 Coins)!</span>
            </div>
            <button class="modal-close-btn" id="close-game-arena">&times;</button>
          </div>
          <div class="game-arena-body">
            <div class="wheel-15-wrapper">
              <div class="wheel-pointer-top"></div>
              <svg viewBox="0 0 300 300" class="wheel-15-svg" id="svg-wheel-15">
                <!-- 15 SEGMENTS DRAWN WITH COLOR SCHEME -->
                <circle cx="150" cy="150" r="140" fill="#12161d" stroke="var(--primary-fire)" stroke-width="6" />
                <g id="wheel-segments-group">
                  <!-- Generated dynamically in JS -->
                </g>
              </svg>
            </div>

            <button class="btn btn-primary btn-lg" id="btn-spin-15-action" style="padding: 12px 36px; font-weight: 800; font-size: 1.1rem; border-radius: 12px;">
              🎰 SPIN THE WHEEL NOW
            </button>
          </div>
        </div>
      </div>
    ` : ''}

    ${selectedPlayerModal ? `
      <div class="modal-overlay" id="modal-player">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-player-modal">&times;</button>
          <h2>${selectedPlayerModal.ign}</h2>
          <button class="btn btn-primary" data-action="view-full-profile" data-id="${selectedPlayerModal.id}">🔍 Open Full Page Profile</button>
        </div>
      </div>
    ` : ''}

    ${selectedChallengeModalPlayer ? `
      <div class="modal-overlay" id="modal-challenge">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-challenge-modal">&times;</button>
          <h2>⚔️ Room Challenge</h2>
          <form id="form-send-challenge">
            <div class="form-group">
              <label>Opponent</label>
              <select id="chal-opponent-select" class="form-control">
                ${players.map(p => `<option value="${p.id}" ${selectedChallengeModalPlayer.id === p.id ? 'selected' : ''}>${p.ign}</option>`).join('')}
              </select>
            </div>
            <div class="form-group"><label>Mode</label><input type="text" id="chal-mode" class="form-control" value="1v1 Headshot" /></div>
            <div class="form-group"><label>Map</label><input type="text" id="chal-map" class="form-control" value="Bermuda" /></div>
            <div class="form-group"><label>Stake</label><input type="number" id="chal-stake" class="form-control" value="500" /></div>
            <div class="form-group"><label>Time</label><input type="text" id="chal-time" class="form-control" value="Today 8:30 PM" /></div>
            <button type="submit" class="btn btn-primary">Confirm & Send Challenge</button>
          </form>
        </div>
      </div>
    ` : ''}

    ${selectedEsportsApplyModal ? `
      <div class="modal-overlay" id="modal-esports-apply">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-esports-apply-modal">&times;</button>
          <h2>📝 Apply for ${selectedEsportsApplyModal.teamName}</h2>
          <form id="form-esports-apply">
            <div class="form-group"><label>Role</label><input type="text" id="app-role" class="form-control" value="Rusher" /></div>
            <div class="form-group"><label>UID</label><input type="text" id="app-uid" class="form-control" value="${state.currentUser.uid}" /></div>
            <div class="form-group"><label>K/D</label><input type="text" id="app-kd" class="form-control" value="${state.currentUser.kdRatio}" /></div>
            <div class="form-group"><label>Contact</label><input type="text" id="app-contact" class="form-control" placeholder="WhatsApp / Discord" required /></div>
            <button type="submit" class="btn btn-primary">Submit Application</button>
          </form>
        </div>
      </div>
    ` : ''}

    ${selectedUploadModal ? `
      <div class="modal-overlay" id="modal-upload">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-upload-modal">&times;</button>
          <h2>🎥 Upload Clip</h2>
          <form id="form-upload-clip">
            <div class="form-group"><label>Title</label><input type="text" id="upload-title" class="form-control" required /></div>
            <div class="form-group"><label>Desc</label><textarea id="upload-desc" class="form-control" required></textarea></div>
            <div class="form-group"><label>File</label><input type="file" id="upload-file-input" class="form-control" /></div>
            <button type="submit" class="btn btn-primary">Publish</button>
          </form>
        </div>
      </div>
    ` : ''}

    ${selectedLoginModal ? `
      <div class="modal-overlay" id="modal-login">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-login-modal">&times;</button>
          <h2>🔑 Sign In</h2>
          <form id="form-user-login">
            <div class="form-group"><label>IGN</label><input type="text" id="login-ign" class="form-control" value="${state.currentUser.ign}" required /></div>
            <div class="form-group"><label>UID</label><input type="text" id="login-uid" class="form-control" value="${state.currentUser.uid}" required /></div>
            <button type="submit" class="btn btn-primary">Save & Sign In</button>
          </form>
        </div>
      </div>
    ` : ''}
  `;
}

// MAIN RENDER & EVENT BINDINGS
let isGlobalClickAttached = false;

function renderApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  let mainContentHtml = '';
  switch (state.activeTab) {
    case 'feed': mainContentHtml = renderFeed(); break;
    case 'connect': mainContentHtml = renderConnections(); break;
    case 'minigames': mainContentHtml = renderMiniGames(); break;
    case 'challenges': mainContentHtml = renderChallenges(); break;
    case 'esports': mainContentHtml = renderEsports(); break;
    case 'leaderboard': mainContentHtml = renderLeaderboard(); break;
    case 'news': mainContentHtml = renderNews(); break;
    case 'chat': mainContentHtml = renderChat(); break;
    case 'profile': mainContentHtml = renderProfile(); break;
    case 'view-player-profile': mainContentHtml = renderFullPlayerProfile(); break;
    default: mainContentHtml = renderFeed();
  }

  appRoot.innerHTML = `
    ${renderNavbar()}
    <main class="main-body">${mainContentHtml}</main>
    ${renderModals()}
  `;

  attachEventListeners();
  initMiniGamesLogic();
}

function attachEventListeners() {
  document.querySelectorAll('[data-tab]').forEach(elem => {
    elem.addEventListener('click', () => {
      state.setActiveTab(elem.getAttribute('data-tab'));
    });
  });

  const navBrand = document.getElementById('nav-brand');
  if (navBrand) navBrand.addEventListener('click', () => state.setActiveTab('feed'));

  const navHomeBtn = document.getElementById('nav-home-btn');
  if (navHomeBtn) navHomeBtn.addEventListener('click', () => state.setActiveTab('feed'));

  const btnTriggerSearch = document.getElementById('btn-trigger-search');
  const searchInput = document.getElementById('global-search-input');
  if (btnTriggerSearch && searchInput) {
    btnTriggerSearch.addEventListener('click', () => {
      state.setSearchQuery(searchInput.value);
      state.setActiveTab('connect');
    });
  }

  const btnBackNetwork = document.getElementById('btn-back-to-network');
  if (btnBackNetwork) btnBackNetwork.addEventListener('click', () => state.setActiveTab('connect'));

  const btnUpload = document.getElementById('btn-upload-clip');
  if (btnUpload) btnUpload.addEventListener('click', () => state.toggleUploadModal(true));

  const btnLogin = document.getElementById('btn-login-modal');
  if (btnLogin) btnLogin.addEventListener('click', () => state.toggleLoginModal(true));

  const btnCloseArena = document.getElementById('close-game-arena');
  if (btnCloseArena) btnCloseArena.addEventListener('click', () => state.closeGameArena());

  if (!isGlobalClickAttached) {
    document.addEventListener('click', handleGlobalClick);
    isGlobalClickAttached = true;
  }
}

// INTERACTIVE MINI GAMES ENGINE
function initMiniGamesLogic() {
  // AWM GAME ARENA
  if (state.activeGameArenaModal === 'awm') {
    const enemyTarget = document.getElementById('awm-enemy-target');
    const fireBtn = document.getElementById('btn-fire-awm');
    const countElem = document.getElementById('awm-headshot-count');
    const timerElem = document.getElementById('awm-timer-sec');

    let hits = 0;
    let timeLeft = 15;

    const moveEnemy = () => {
      if (!enemyTarget) return;
      const top = Math.floor(Math.random() * 220) + 40;
      const left = Math.floor(Math.random() * 560) + 40;
      enemyTarget.style.top = top + 'px';
      enemyTarget.style.left = left + 'px';
    };

    moveEnemy();

    const handleHit = () => {
      hits++;
      if (countElem) countElem.textContent = hits;
      if (hits >= 5) {
        clearInterval(awmTimer);
        state.closeGameArena();
        state.awardMiniGameCoins(3, "🎯 AWM 3D Sniper Range", "5/5 Quickscope Headshots");
      } else {
        moveEnemy();
      }
    };

    if (enemyTarget) enemyTarget.onclick = handleHit;
    if (fireBtn) fireBtn.onclick = handleHit;

    const awmTimer = setInterval(() => {
      timeLeft--;
      if (timerElem) timerElem.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(awmTimer);
        state.closeGameArena();
        state.addGameHistoryRecord("🎯 AWM 3D Sniper Range", "Defeat", 0, `Hit ${hits}/5 Targets`);
        alert(`⏰ Time's up! You scored ${hits}/5 headshots.`);
      }
    }, 1000);
  }

  // 360 GLOO WALL ARENA
  if (state.activeGameArenaModal === 'gloo360') {
    const countElem = document.getElementById('gloo-blocked-count');
    const statusText = document.getElementById('gloo-status-text');
    const dirBtns = {
      N: document.getElementById('gloo-dir-N'),
      S: document.getElementById('gloo-dir-S'),
      W: document.getElementById('gloo-dir-W'),
      E: document.getElementById('gloo-dir-E')
    };

    let blocked = 0;
    let currentAttackDir = null;

    const spawnAttack = () => {
      Object.values(dirBtns).forEach(b => b && b.classList.remove('active-attack'));
      const dirs = ['N', 'S', 'W', 'E'];
      currentAttackDir = dirs[Math.floor(Math.random() * dirs.length)];
      const targetBtn = dirBtns[currentAttackDir];
      if (targetBtn) targetBtn.classList.add('active-attack');
      if (statusText) statusText.textContent = `⚠️ ENEMY ATTACKING FROM ${currentAttackDir === 'N' ? 'NORTH ⬆️' : currentAttackDir === 'S' ? 'SOUTH ⬇️' : currentAttackDir === 'W' ? 'WEST ⬅️' : 'EAST ➡️'}! TAP TO BLOCK!`;
    };

    spawnAttack();

    Object.keys(dirBtns).forEach(dir => {
      const btn = dirBtns[dir];
      if (btn) {
        btn.onclick = () => {
          if (dir === currentAttackDir) {
            blocked++;
            if (countElem) countElem.textContent = blocked;
            if (blocked >= 5) {
              state.closeGameArena();
              state.awardMiniGameCoins(3, "🛡️ 360° Gloo Defender", "5/5 Directional Attacks Blocked");
            } else {
              spawnAttack();
            }
          }
        };
      }
    });
  }

  // 15-SEGMENT LUCKY WHEEL ARENA
  if (state.activeGameArenaModal === 'spin15') {
    const wheelGroup = document.getElementById('wheel-segments-group');
    const svgWheel = document.getElementById('svg-wheel-15');
    const spinBtn = document.getElementById('btn-spin-15-action');

    // 15 SEGMENTS: 10 EMPTY, 5 REWARD SEGMENTS (+1, +2, +3, +4, +5 COINS)
    const segments = [
      { text: "🪙 +1", reward: 1, color: "#FF8F00" },
      { text: "❌ EMPTY", reward: 0, color: "#1e2633" },
      { text: "🪙 +2", reward: 2, color: "#FF6D00" },
      { text: "❌ EMPTY", reward: 0, color: "#252f40" },
      { text: "🪙 +3", reward: 3, color: "#FF5500" },
      { text: "❌ EMPTY", reward: 0, color: "#1e2633" },
      { text: "🪙 +4", reward: 4, color: "#D50000" },
      { text: "❌ EMPTY", reward: 0, color: "#252f40" },
      { text: "🪙 +5", reward: 5, color: "#00E676" },
      { text: "❌ EMPTY", reward: 0, color: "#1e2633" },
      { text: "❌ EMPTY", reward: 0, color: "#252f40" },
      { text: "❌ EMPTY", reward: 0, color: "#1e2633" },
      { text: "❌ EMPTY", reward: 0, color: "#252f40" },
      { text: "❌ EMPTY", reward: 0, color: "#1e2633" },
      { text: "❌ EMPTY", reward: 0, color: "#252f40" }
    ];

    if (wheelGroup) {
      let gHtml = '';
      const totalSegs = 15;
      const angle = 360 / totalSegs;

      for (let i = 0; i < totalSegs; i++) {
        const segAngle = i * angle;
        const startRad = (segAngle - 90) * (Math.PI / 180);
        const endRad = (segAngle + angle - 90) * (Math.PI / 180);
        const x1 = 150 + 140 * Math.cos(startRad);
        const y1 = 150 + 140 * Math.sin(startRad);
        const x2 = 150 + 140 * Math.cos(endRad);
        const y2 = 150 + 140 * Math.sin(endRad);

        const pathData = `M 150 150 L ${x1} ${y1} A 140 140 0 0 1 ${x2} ${y2} Z`;
        const textAngle = segAngle + angle / 2;
        const textRad = (textAngle - 90) * (Math.PI / 180);
        const tx = 150 + 95 * Math.cos(textRad);
        const ty = 150 + 95 * Math.sin(textRad);

        gHtml += `<path d="${pathData}" fill="${segments[i].color}" stroke="#090b0e" stroke-width="2" />`;
        gHtml += `<text x="${tx}" y="${ty}" fill="#FFF" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(${textAngle}, ${tx}, ${ty})">${segments[i].text}</text>`;
      }

      wheelGroup.innerHTML = gHtml;
    }

    if (spinBtn && svgWheel) {
      spinBtn.onclick = () => {
        spinBtn.disabled = true;
        const winningIndex = Math.floor(Math.random() * segments.length);
        const segAngle = 360 / segments.length;
        const targetDegrees = 3600 + (360 - (winningIndex * segAngle + segAngle / 2));

        svgWheel.style.transform = `rotate(${targetDegrees}deg)`;

        setTimeout(() => {
          const won = segments[winningIndex];
          state.closeGameArena();

          if (won.reward > 0) {
            state.awardMiniGameCoins(won.reward, "🎰 15-Segment Lucky Wheel", `Landed on ${won.text}`);
          } else {
            state.addGameHistoryRecord("🎰 15-Segment Lucky Wheel", "Empty Slot", 0, "Landed on Empty");
            alert("❌ Landed on Empty Slot! Better luck next time!");
          }
        }, 4000);
      };
    }
  }
}

function handleGlobalClick(e) {
  if (e.target.classList.contains('modal-overlay')) {
    state.closePlayerModal();
    state.closeChallengeModal();
    state.toggleUploadModal(false);
    state.toggleLoginModal(false);
    state.closeEsportsApplyModal();
    return;
  }

  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.getAttribute('data-action');
  const id = target.getAttribute('data-id');

  if (action === 'launch-game') {
    state.openGameArena(target.getAttribute('data-game'));
  }
  else if (action === 'like') state.toggleLikeClip(id);
  else if (action === 'toggle-comments') {
    const s = document.getElementById(`comments-${id}`);
    if (s) s.classList.toggle('open');
  }
  else if (action === 'filter-clip-tag') state.setClipTagFilter(target.getAttribute('data-tag'));
  else if (action === 'filter-challenge') state.setChallengeFilter(target.getAttribute('data-filter'));
  else if (action === 'filter-news') state.setNewsCategoryFilter(target.getAttribute('data-category'));
  else if (action === 'filter-skill-chip') state.setSkillFilter(target.getAttribute('data-skill'));
  else if (action === 'toggle-connect') state.toggleConnection(id);
  else if (action === 'view-full-profile') {
    const p = state.players.find(x => x.id === id);
    if (p) state.openPlayerProfile(p);
  }
  else if (action === 'open-esports-apply') {
    const listing = state.esportsListings.find(x => x.id === id);
    if (listing) state.openEsportsApplyModal(listing);
  }
  else if (action === 'challenge') {
    state.closePlayerModal();
    const p = state.players.find(x => x.id === id);
    if (p) state.openChallengeModal(p);
  }
  else if (action === 'message') {
    state.closePlayerModal();
    state.setActiveChatPlayer(id);
    state.setActiveTab('chat');
  }
}

state.subscribe(renderApp);

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
