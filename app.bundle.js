// ==========================================================================
// BOOYAHCONNECT STANDALONE BUNDLE (RICH PROFILE & ENHANCED SUPABASE AUTH)
// ==========================================================================

const initialCurrentUser = {
  id: "guest_user",
  email: "",
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
  bio: "Official FFWS Qualifier Semi-Finalist | Grandmaster 62 Stars | Verified Supabase Auth Player 💥",
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
    skills: ["AWM Sniper", "Double AWM", "Predictive Sniping"]
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
    skills: ["MP40 Cobra", "M1887 One-Shot"]
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
  }
];

// STATE MANAGER WITH SUPABASE AUTH & FULL PROFILE DATA
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
    this.authModalTab = 'signin'; // 'signin' or 'signup'
    this.selectedEsportsApplyModal = null;
    this.activeGameArenaModal = null;
    this.viewedPlayer = null;
    this.activeChatPlayerId = 'player_1';
    this.isLoggedIn = false;

    this.roleFilter = 'all';
    this.stateFilter = 'all';
    this.skillFilter = 'all';
    this.clipTagFilter = 'All Highlights';
    this.newsCategoryFilter = 'All Articles';
    this.challengeFilter = 'All';

    this.currentUser = initialCurrentUser;
    this.players = this.loadFromStorage('booyah_players', initialPlayers);
    this.clips = this.loadFromStorage('booyah_clips', initialClips);
    this.challenges = this.loadFromStorage('booyah_challenges', initialChallenges);
    this.news = this.loadFromStorage('booyah_news', initialNews);
    this.messages = this.loadFromStorage('booyah_messages', initialMessages);
    this.esportsListings = this.loadFromStorage('booyah_esports', initialEsportsListings);
    this.esportsApplications = this.loadFromStorage('booyah_apps', []);
    this.gameHistory = this.loadFromStorage('booyah_game_history', initialGameHistory);

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
      guild: meta.guild || "Team Vipers (Lvl 4)",
      kdRatio: meta.kdRatio || 4.85,
      headshotRate: meta.headshotRate || "68.4%",
      winRate: meta.winRate || "74.2%",
      matchesPlayed: meta.matchesPlayed || 1420,
      booyahs: meta.booyahs || 1054,
      bio: meta.bio || "Official FFWS Qualifier Semi-Finalist | Grandmaster 62 Stars | Verified Supabase Auth Player 💥",
      rating: 4.9,
      ratingsCount: 142,
      ratingsBreakdown: { aim: 4.9, teamwork: 4.8, iq: 5.0, sportsmanship: 4.7 },
      coins: 4500,
      connectionsCount: 384,
      skills: meta.skills || ["AWM Sniper", "M1887 One-Shot", "Gloo Wall Reflex", "IGL Shotcaller"],
      endorsements: [
        { skill: "Gloo Wall Fast Reflex", count: 88 },
        { skill: "Clutch 1v4 IQ", count: 112 },
        { skill: "AWM Long Range", count: 64 }
      ]
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
      alert("⚠️ Supabase Client Not Initialized. Please check your env.js file.");
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
          alert("⚠️ Account already exists with this email!\nSwitching to Sign In tab so you can log in directly.");
          this.authModalTab = 'signin';
          this.notify();
        } else {
          alert("❌ Signup Error: " + error.message);
        }
        return;
      }

      if (data.session) {
        alert(`🎉 Account Created & Signed In!\nWelcome to BooyahConnect, ${ign}!`);
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
      alert("⚠️ Supabase Client Not Initialized. Please check env.js.");
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
          alert("❌ Invalid Credentials!\nNo account found with this email/password. Click 'Create Account' tab if you are a new user!");
        } else if (error.message.includes("Email not confirmed")) {
          alert("⚠️ Email Not Confirmed Yet!\nPlease check your email inbox to verify your account or disable email verification in your Supabase Dashboard ➔ Auth settings.");
        } else {
          alert("❌ Sign In Error: " + error.message);
        }
        return;
      }

      if (data.session && data.user) {
        const userIgn = data.user.user_metadata?.ign || 'Pro Gamer';
        alert(`🎉 Welcome back, ${userIgn}!`);
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
      alert(`⚠️ Daily Coin Limit Reached!\nYou have already earned the maximum 10 Booyah Coins for today.`);
      return false;
    }

    let actualAwarded = Math.min(amount, 10 - currentEarned);
    currentEarned += actualAwarded;
    localStorage.setItem(todayKey, currentEarned.toString());

    this.currentUser.coins += actualAwarded;
    this.saveToStorage('booyah_user', this.currentUser);
    this.addGameHistoryRecord(gameName, "BOOYAH Victory", actualAwarded, detail);
    this.notify();

    alert(`🎉 VICTORY! BOOYAH!\nYou won +${actualAwarded} Booyah Coins in ${gameName}!`);
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
  toggleUploadModal(show) { this.selectedUploadModal = show; this.notify(); }
  toggleLoginModal(show, tab = 'signin') {
    this.selectedLoginModal = show;
    this.authModalTab = tab;
    this.notify();
  }
}

const state = new StateManager();

// NAVBAR RENDERER
function renderNavbar() {
  const { activeTab, searchQuery, currentUser, challenges, isLoggedIn } = state;
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

          ${isLoggedIn ? `
            <button class="btn btn-secondary btn-sm" id="btn-supabase-logout" title="Sign Out of Supabase">
              🚪 Logout
            </button>
          ` : `
            <button class="btn btn-primary btn-sm" id="btn-login-modal" title="Sign In or Create Account with Supabase">
              🔑 Login / Sign Up
            </button>
          `}

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
    return matchesSearch;
  });

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
              <img src="${clip.mediaUrl}" alt="${clip.title}" class="clip-media-img" />
              <div class="views-badge">👁️ ${clip.views.toLocaleString()} views</div>
            </div>

            <div class="clip-card-body">
              <h3 class="clip-title">${clip.title}</h3>
              <p class="clip-desc">${clip.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// CONNECTIONS RENDERER
function renderConnections() {
  const { players, searchQuery } = state;
  const filteredPlayers = players.filter(p => !searchQuery || p.ign.toLowerCase().includes(searchQuery.toLowerCase()));

  return `
    <div class="connections-container">
      <div class="network-header">
        <div>
          <h2>LinkedIn Player Network</h2>
          <p>Find & connect with verified Free Fire pros across India!</p>
        </div>
      </div>

      <div class="players-grid">
        ${filteredPlayers.map(player => `
          <div class="player-card">
            <div class="player-card-body">
              <img src="${player.avatar}" alt="${player.ign}" class="player-avatar" />
              <h3 class="player-ign">${player.ign}</h3>
              <div class="player-uid">UID: ${player.uid}</div>
              <div class="player-card-actions" style="margin-top: 12px;">
                <button class="btn btn-primary" data-action="view-full-profile" data-id="${player.id}">🔍 View Profile</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// MINI GAMES ARENA RENDERER
function renderMiniGames() {
  const earnedToday = state.getTodayEarnedCoins();
  return `
    <div class="minigames-container">
      <div class="minigames-hero">
        <h1>FREE FIRE MINI GAMES & LUCKY WHEEL</h1>
        <p>Earn up to 10 Booyah Coins daily!</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
        <button class="btn btn-primary" data-action="launch-game" data-game="awm">🎯 Play AWM Sniper</button>
        <button class="btn btn-primary" data-action="launch-game" data-game="gloo360">🛡️ Play 360° Gloo Defender</button>
        <button class="btn btn-primary" data-action="launch-game" data-game="spin15">🎰 Spin 15-Segment Wheel</button>
      </div>
    </div>
  `;
}

// FULL PAGE PLAYER PROFILE VIEW
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
            <h1 style="margin: 0;">${player.ign}</h1>
            <p style="color: var(--amber-gold);">UID: ${player.uid} | 📍 ${player.state}</p>
            <p style="color: var(--text-light); font-size: 0.95rem;">${player.bio}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// RICH FULL CURRENT USER PROFILE PAGE (`renderProfile()`)
function renderProfile() {
  const { currentUser, isLoggedIn } = state;

  return `
    <div class="profile-page-container" style="max-width: 1100px; margin: 0 auto;">
      
      <!-- PROFILE HERO BANNER -->
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 32px; margin-bottom: 24px; display: flex; gap: 28px; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <img src="${currentUser.avatar}" alt="${currentUser.ign}" style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid var(--primary-fire); box-shadow: 0 0 25px rgba(255, 85, 0, 0.4);" />
        
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
            <h1 style="margin: 0; font-size: 2.2rem; font-family: var(--font-heading); color: #FFF;">${currentUser.ign}</h1>
            <span class="rank-badge-pill grandmaster" style="padding: 6px 14px; font-size: 0.85rem;">${currentUser.rank} ⭐${currentUser.rankStars}</span>
            <span style="background: ${isLoggedIn ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 183, 0, 0.15)'}; color: ${isLoggedIn ? '#00E676' : 'var(--amber-gold)'}; font-weight: 800; padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; border: 1px solid ${isLoggedIn ? '#00E676' : 'var(--amber-gold)'};">
              ${isLoggedIn ? '✓ Authenticated Supabase User' : '⚠️ Guest Mode (Click Sign In below)'}
            </span>
          </div>

          <p style="margin: 8px 0 4px 0; color: var(--amber-gold); font-weight: 700;">
            🆔 UID: <span style="color:#FFF;">${currentUser.uid}</span> | 📍 Location: <span style="color:#FFF;">${currentUser.city || ''}, ${currentUser.state}</span> | Guild: <span style="color:#FFF;">${currentUser.guild}</span>
          </p>
          <p style="margin: 0; color: var(--text-muted); font-size: 0.85rem;">
            ✉️ Email: <span style="color:var(--text-light);">${currentUser.email || 'Not Signed In'}</span>
          </p>
          <p style="margin: 12px 0 0 0; color: var(--text-light); font-size: 0.95rem; line-height: 1.5;">${currentUser.bio}</p>

          <div style="display: flex; gap: 12px; margin-top: 20px;">
            ${isLoggedIn ? `
              <button class="btn btn-secondary" id="btn-profile-signout">🚪 Sign Out of Supabase</button>
            ` : `
              <button class="btn btn-primary" id="btn-profile-signin-trigger">🔑 Sign In / Register Account</button>
            `}
          </div>
        </div>
      </div>

      <!-- PERFORMANCE STATS GRID -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; margin-bottom: 24px;">
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">K/D Ratio</div>
          <div style="font-size: 2rem; font-weight: 800; color: var(--primary-fire); margin-top: 4px;">${currentUser.kdRatio}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Headshot Rate</div>
          <div style="font-size: 2rem; font-weight: 800; color: var(--amber-gold); margin-top: 4px;">${currentUser.headshotRate}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Win Rate</div>
          <div style="font-size: 2rem; font-weight: 800; color: #00E676; margin-top: 4px;">${currentUser.winRate}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Booyahs Count</div>
          <div style="font-size: 2rem; font-weight: 800; color: #FFF; margin-top: 4px;">${currentUser.booyahs.toLocaleString()}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Matches Played</div>
          <div style="font-size: 2rem; font-weight: 800; color: var(--text-light); margin-top: 4px;">${currentUser.matchesPlayed.toLocaleString()}</div>
        </div>
      </div>

      <!-- WEAPON SKILLS & ENDORSEMENTS -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 24px; border-radius: 16px;">
          <h3 style="margin-top: 0; font-size: 1.2rem; color: #FFF;">🎯 Verified Weapon Skills</h3>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px;">
            ${(currentUser.skills || []).map(s => `
              <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); padding: 6px 14px; border-radius: 16px; font-weight: 700; font-size: 0.85rem; border: 1px solid rgba(255, 183, 0, 0.3);">
                ⚡ ${s}
              </span>
            `).join('')}
          </div>
        </div>

        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 24px; border-radius: 16px;">
          <h3 style="margin-top: 0; font-size: 1.2rem; color: #FFF;">⭐ Player Skill Endorsements</h3>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 14px;">
            ${(currentUser.endorsements || []).map(e => `
              <div style="display: flex; justify-content: space-between; background: var(--dark-surface); padding: 10px 14px; border-radius: 12px; font-size: 0.9rem;">
                <span>${e.skill}</span>
                <strong style="color: var(--amber-gold);">${e.count} Pros Endorsed</strong>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>
  `;
}

// OTHER VIEWS
function renderEsports() { return `<div><h2>Esports</h2></div>`; }
function renderNews() { return `<div><h2>News</h2></div>`; }
function renderChallenges() { return `<div><h2>Challenges</h2></div>`; }
function renderLeaderboard() { return `<div><h2>Leaderboard</h2></div>`; }
function renderChat() { return `<div><h2>Chat</h2></div>`; }

// MODALS RENDERER
function renderModals() {
  const { selectedPlayerModal, selectedChallengeModalPlayer, selectedUploadModal, selectedLoginModal, authModalTab, activeGameArenaModal } = state;

  return `
    <!-- REAL SUPABASE AUTH MODAL -->
    ${selectedLoginModal ? `
      <div class="modal-overlay" id="modal-login">
        <div class="modal-card" style="max-width: 440px;">
          <button class="modal-close-btn" id="close-login-modal">&times;</button>
          
          <div style="display: flex; border-bottom: 2px solid rgba(255, 255, 255, 0.1); margin-bottom: 20px;">
            <button id="tab-auth-signin" class="btn" style="flex: 1; border-radius: 0; background: transparent; border-bottom: 3px solid ${authModalTab === 'signin' ? 'var(--primary-fire)' : 'transparent'}; color: ${authModalTab === 'signin' ? 'var(--primary-fire)' : 'var(--text-muted)'}; font-weight: 800;">
              🔑 Sign In
            </button>
            <button id="tab-auth-signup" class="btn" style="flex: 1; border-radius: 0; background: transparent; border-bottom: 3px solid ${authModalTab === 'signup' ? 'var(--primary-fire)' : 'transparent'}; color: ${authModalTab === 'signup' ? 'var(--primary-fire)' : 'var(--text-muted)'}; font-weight: 800;">
              📝 Create Account
            </button>
          </div>

          ${authModalTab === 'signin' ? `
            <form id="form-supabase-signin">
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" id="auth-signin-email" class="form-control" placeholder="gamer@booyahconnect.com" required />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" id="auth-signin-password" class="form-control" placeholder="••••••••" required />
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 10px;">
                🔑 Sign In with Supabase
              </button>
              <div style="text-align: center; margin-top: 12px; font-size: 0.82rem; color: var(--text-muted);">
                Don't have an account yet? <a href="#" id="link-switch-signup" style="color: var(--amber-gold); text-decoration: underline;">Click here to Create Account</a>
              </div>
            </form>
          ` : `
            <form id="form-supabase-signup">
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" id="auth-signup-email" class="form-control" placeholder="gamer@booyahconnect.com" required />
              </div>
              <div class="form-group">
                <label>Password (min 6 characters)</label>
                <input type="password" id="auth-signup-password" class="form-control" placeholder="••••••••" minlength="6" required />
              </div>
              <div class="form-group">
                <label>Free Fire In-Game Name (IGN)</label>
                <input type="text" id="auth-signup-ign" class="form-control" placeholder="e.g. ⚡ BOOYAH_KRISH ⚡" required />
              </div>
              <div class="form-group">
                <label>Free Fire Game UID</label>
                <input type="text" id="auth-signup-uid" class="form-control" placeholder="e.g. 849201948" required />
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 10px;">
                📝 Register Account with Supabase
              </button>
              <div style="text-align: center; margin-top: 12px; font-size: 0.82rem; color: var(--text-muted);">
                Already registered? <a href="#" id="link-switch-signin" style="color: var(--amber-gold); text-decoration: underline;">Click here to Sign In</a>
              </div>
            </form>
          `}
        </div>
      </div>
    ` : ''}

    ${activeGameArenaModal === 'awm' ? `
      <div class="game-arena-overlay">
        <div class="game-arena-card">
          <div class="game-arena-header">
            <h2>🎯 AWM Quickscope 3D Range</h2>
            <button class="modal-close-btn" id="close-game-arena">&times;</button>
          </div>
          <div class="game-arena-body">
            <button class="btn btn-primary" id="btn-fire-awm">🔥 FIRE AWM</button>
          </div>
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

  const btnLogin = document.getElementById('btn-login-modal');
  if (btnLogin) btnLogin.addEventListener('click', () => state.toggleLoginModal(true, 'signin'));

  const btnLogout = document.getElementById('btn-supabase-logout');
  if (btnLogout) btnLogout.addEventListener('click', () => state.signOutFromSupabase());

  const btnProfileSignout = document.getElementById('btn-profile-signout');
  if (btnProfileSignout) btnProfileSignout.addEventListener('click', () => state.signOutFromSupabase());

  const btnProfileSigninTrigger = document.getElementById('btn-profile-signin-trigger');
  if (btnProfileSigninTrigger) btnProfileSigninTrigger.addEventListener('click', () => state.toggleLoginModal(true, 'signin'));

  const btnCloseLogin = document.getElementById('close-login-modal');
  if (btnCloseLogin) btnCloseLogin.addEventListener('click', () => state.toggleLoginModal(false));

  const tabAuthSignin = document.getElementById('tab-auth-signin');
  if (tabAuthSignin) tabAuthSignin.addEventListener('click', () => state.toggleLoginModal(true, 'signin'));

  const tabAuthSignup = document.getElementById('tab-auth-signup');
  if (tabAuthSignup) tabAuthSignup.addEventListener('click', () => state.toggleLoginModal(true, 'signup'));

  const linkSwitchSignup = document.getElementById('link-switch-signup');
  if (linkSwitchSignup) linkSwitchSignup.addEventListener('click', (e) => { e.preventDefault(); state.toggleLoginModal(true, 'signup'); });

  const linkSwitchSignin = document.getElementById('link-switch-signin');
  if (linkSwitchSignin) linkSwitchSignin.addEventListener('click', (e) => { e.preventDefault(); state.toggleLoginModal(true, 'signin'); });

  // SUPABASE SIGN IN SUBMIT
  const formSignIn = document.getElementById('form-supabase-signin');
  if (formSignIn) {
    formSignIn.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-signin-email').value;
      const password = document.getElementById('auth-signin-password').value;
      state.signInWithSupabase(email, password);
    });
  }

  // SUPABASE SIGN UP SUBMIT
  const formSignUp = document.getElementById('form-supabase-signup');
  if (formSignUp) {
    formSignUp.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-signup-email').value;
      const password = document.getElementById('auth-signup-password').value;
      const ign = document.getElementById('auth-signup-ign').value;
      const uid = document.getElementById('auth-signup-uid').value;
      state.signUpWithSupabase({ email, password, ign, uid });
    });
  }

  const btnCloseArena = document.getElementById('close-game-arena');
  if (btnCloseArena) btnCloseArena.addEventListener('click', () => state.closeGameArena());

  if (!isGlobalClickAttached) {
    document.addEventListener('click', handleGlobalClick);
    isGlobalClickAttached = true;
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
  else if (action === 'view-full-profile') {
    const p = state.players.find(x => x.id === id);
    if (p) state.openPlayerProfile(p);
  }
}

state.subscribe(renderApp);

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
