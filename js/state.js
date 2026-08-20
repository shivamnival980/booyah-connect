import { initialCurrentUser, initialPlayers, initialClips, initialChallenges, initialNews, initialMessages } from './data/initialData.js';

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
    this.authModalTab = 'signin';
    this.activeChatPlayerId = 'player_1';
    this.isLoggedIn = false;
    this.isUploading = false;
    this.uploadStatusText = '';

    // Feed Loading States
    this.isClipsLoading = false;
    this.clipsError = null;
    this.hasFetchedRemoteClips = false;
    this.postLimit = 20;

    this.roleFilter = 'all';
    this.stateFilter = 'all';
    this.clipTagFilter = 'All Highlights';
    this.newsCategoryFilter = 'All Articles';
    this.challengeFilter = 'All';

    this.currentUser = initialCurrentUser;
    this.players = this.loadFromStorage('booyah_players', initialPlayers);
    this.clips = initialClips;
    this.challenges = this.loadFromStorage('booyah_challenges', initialChallenges);
    this.news = this.loadFromStorage('booyah_news', initialNews);
    this.messages = this.loadFromStorage('booyah_messages', initialMessages);

    this.initSupabaseAuth();
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

  initSupabaseAuth() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    
    this.fetchFeedClipsFromSupabase();

    if (!client) return;

    client.auth.getSession().then(({ data: { session }, error }) => {
      if (session && session.user) {
        this.handleAuthUserSession(session.user);
      }
    });

    client.auth.onAuthStateChange((event, session) => {
      if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session && session.user) {
        this.handleAuthUserSession(session.user);
        this.fetchFeedClipsFromSupabase();
      } else if (event === 'SIGNED_OUT') {
        this.handleAuthUserSignOut();
      }
    });
  }

  handleAuthUserSession(user) {
    const meta = user.user_metadata || {};
    this.currentUser = {
      id: user.id,
      email: user.email,
      ign: meta.ign || user.email.split('@')[0] || "Pro Gamer",
      uid: meta.uid || "849201948",
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(meta.ign || user.email)}`,
      rank: meta.rank || "Grandmaster",
      rankStars: meta.rankStars || 62,
      level: meta.level || 76,
      state: meta.state || "Maharashtra",
      city: meta.city || "Mumbai",
      role: meta.role || "IGL / Rusher",
      guild: meta.guild || "Team Vipers",
      kdRatio: meta.kdRatio || 4.85,
      headshotRate: meta.headshotRate || "68.4%",
      winRate: meta.winRate || "74.2%",
      matchesPlayed: meta.matchesPlayed || 1420,
      booyahs: meta.booyahs || 1054,
      bio: meta.bio || "Verified Supabase Auth Player 🔥",
      rating: 4.9,
      ratingsCount: 142,
      coins: 4500,
      connectionsCount: 384,
      skills: meta.skills || ["AWM Sniper", "M1887 One-Shot"]
    };
    this.isLoggedIn = true;
    this.notify();
  }

  handleAuthUserSignOut() {
    this.currentUser = initialCurrentUser;
    this.isLoggedIn = false;
    this.notify();
  }

  async fetchFeedClipsFromSupabase() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) return;

    this.isClipsLoading = true;
    this.clipsError = null;
    this.notify();

    try {
      const { data, error } = await client
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(this.postLimit);

      if (error) {
        this.clipsError = error.message;
        this.isClipsLoading = false;
        this.notify();
        return;
      }

      if (data && data.length > 0) {
        const remoteClips = data.map(post => ({
          id: post.id,
          authorId: post.user_id,
          authorIgn: post.user_ign || 'Pro Gamer',
          authorAvatar: post.user_avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${post.user_id}`,
          authorRank: post.user_rank || 'Grandmaster',
          title: post.title,
          description: post.description,
          mediaType: post.media_type || 'video',
          mediaUrl: post.media_url,
          tags: ["Gameplay", "Supabase", "FreeFire"],
          likes: post.likes_count || 0,
          isLiked: false,
          views: post.views_count || 1,
          createdAt: new Date(post.created_at).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }),
          comments: []
        }));

        this.clips = [...remoteClips, ...initialClips];
        this.hasFetchedRemoteClips = true;
      }

      this.isClipsLoading = false;
      this.notify();
    } catch (e) {
      this.clipsError = "Network error fetching posts";
      this.isClipsLoading = false;
      this.notify();
    }
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
  setClipTagFilter(tag) { this.clipTagFilter = tag; this.notify(); }
  setNewsCategoryFilter(category) { this.newsCategoryFilter = category; this.notify(); }
  setChallengeFilter(filter) { this.challengeFilter = filter; this.notify(); }

  openPlayerModal(player) { this.selectedPlayerModal = player; this.notify(); }
  closePlayerModal() { this.selectedPlayerModal = null; this.notify(); }
  toggleUploadModal(show) { this.selectedUploadModal = show; this.notify(); }
  toggleLoginModal(show, tab = 'signin') {
    this.selectedLoginModal = show;
    this.authModalTab = tab;
    this.notify();
  }
}

export const state = new StateManager();
