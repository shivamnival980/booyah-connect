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

    this.roleFilter = 'all';
    this.stateFilter = 'all';
    this.clipTagFilter = 'All Highlights';
    this.newsCategoryFilter = 'All Articles';
    this.challengeFilter = 'All';

    this.currentUser = initialCurrentUser;
    this.players = this.loadFromStorage('booyah_players', initialPlayers);
    this.clips = this.loadFromStorage('booyah_clips', initialClips);
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
    if (!client) return;

    client.auth.getSession().then(({ data: { session }, error }) => {
      if (session && session.user) {
        this.handleAuthUserSession(session.user);
      }
    });

    client.auth.onAuthStateChange((event, session) => {
      if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session && session.user) {
        this.handleAuthUserSession(session.user);
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

  async signUpWithSupabase({ email, password, ign, uid, userState, role }) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) {
      alert("⚠️ Supabase Client Not Initialized.");
      return;
    }

    if (!email || !email.includes('@')) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      alert("⚠️ Password must be at least 6 characters long.");
      return;
    }
    if (!ign || !uid) {
      alert("⚠️ Please enter IGN and UID.");
      return;
    }

    try {
      const { data, error } = await client.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
          data: {
            ign: ign.trim(),
            uid: uid.trim(),
            state: userState ? userState.trim() : "Maharashtra",
            role: role ? role.trim() : "Rusher"
          }
        }
      });

      if (error) {
        if (error.message.includes("already registered") || error.message.includes("User already exists")) {
          alert("⚠️ An account with this email already exists. Please Sign In.");
        } else {
          alert("❌ Signup Error: " + error.message);
        }
        return;
      }

      if (data.session) {
        alert(`🎉 Account Created!\nWelcome, ${ign}!`);
        this.handleAuthUserSession(data.user);
        this.toggleLoginModal(false);
      } else if (data.user) {
        alert(`📧 Verification Email Sent!\nPlease check your inbox (${email}) to confirm your account.`);
        this.toggleLoginModal(false);
      }
    } catch (err) {
      alert("❌ Network Error connecting to Supabase.");
    }
  }

  async signInWithSupabase(email, password) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) {
      alert("⚠️ Supabase Client Not Initialized.");
      return;
    }

    if (!email || !password) {
      alert("⚠️ Please enter Email and Password.");
      return;
    }

    try {
      const { data, error } = await client.auth.signInWithPassword({
        email: email.trim(),
        password: password
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          alert("❌ Invalid Credentials: Incorrect email or password.");
        } else if (error.message.includes("Email not confirmed")) {
          alert("⚠️ Email not confirmed yet! Please check your email inbox to confirm.");
        } else {
          alert("❌ Sign In Error: " + error.message);
        }
        return;
      }

      if (data.session && data.user) {
        alert(`🎉 Welcome back, ${data.user.user_metadata?.ign || 'Pro Gamer'}!`);
        this.handleAuthUserSession(data.user);
        this.toggleLoginModal(false);
      }
    } catch (err) {
      alert("❌ Network Error during sign in.");
    }
  }

  async signOutFromSupabase() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      await client.auth.signOut();
    }
    this.handleAuthUserSignOut();
    alert("👋 Logged out successfully!");
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
  openChallengeModal(player) { this.selectedChallengeModalPlayer = player; this.notify(); }
  closeChallengeModal() { this.selectedChallengeModalPlayer = null; this.notify(); }
  toggleUploadModal(show) { this.selectedUploadModal = show; this.notify(); }
  toggleLoginModal(show, tab = 'signin') {
    this.selectedLoginModal = show;
    this.authModalTab = tab;
    this.notify();
  }
}

export const state = new StateManager();
