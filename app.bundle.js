// ==========================================================================
// BOOYAHCONNECT STANDALONE BUNDLE (SUPABASE AUTH & SUPABASE STORAGE UPLOADS)
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

// STATE MANAGER WITH SUPABASE AUTH & STORAGE MEDIA UPLOADS
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
    this.selectedEsportsApplyModal = null;
    this.activeGameArenaModal = null;
    this.viewedPlayer = null;
    this.activeChatPlayerId = 'player_1';
    this.isLoggedIn = false;
    this.isUploading = false;
    this.uploadStatusText = '';

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
      this.fetchFeedClipsFromSupabase();
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
        { skill: "AWM Long Range", count: 64 },
        { skill: "Squad IGL Shotcalling", count: 95 }
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
          alert("⚠️ Account already exists with this email! Switching to Sign In tab.");
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
          alert("⚠️ Email Not Confirmed Yet!\nPlease check your email inbox to verify your account.");
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

  // FETCH REAL POSTS FROM SUPABASE DATABASE ('posts' TABLE)
  async fetchFeedClipsFromSupabase() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) return;

    try {
      const { data, error } = await client
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn("Supabase fetch posts info:", error.message);
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
          createdAt: new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          comments: []
        }));

        this.clips = [...remoteClips, ...initialClips];
        this.notify();
      }
    } catch (e) {
      console.error("Error fetching feed clips from Supabase:", e);
    }
  }

  // REAL GAMEPLAY MEDIA UPLOAD TO SUPABASE STORAGE ('gameplay-videos' BUCKET)
  async uploadGameplayClip({ file, title, description }) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) {
      alert("⚠️ Supabase Client Not Initialized.");
      return false;
    }

    const user = this.currentUser;
    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") {
      alert("⚠️ Authentication Required!\nPlease sign in with your Supabase account to upload gameplay videos.");
      this.toggleLoginModal(true, 'signin');
      return false;
    }

    if (!file) {
      alert("⚠️ Please select a gameplay video or image file.");
      return false;
    }

    // Validation
    const allowedTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'video/m4v', 'image/jpeg', 'image/png', 'image/webp'];
    const isVideo = file.type.startsWith('video/') || file.name.match(/\.(mp4|webm|mov|m4v)$/i);
    const isImage = file.type.startsWith('image/') || file.name.match(/\.(jpg|jpeg|png|webp)$/i);

    if (!isVideo && !isImage) {
      alert("❌ Unsupported File Format! Please select an MP4, WebM, or MOV video clip.");
      return false;
    }

    const maxBytes = 50 * 1024 * 1024; // 50 MB Max
    if (file.size > maxBytes) {
      alert(`❌ File Too Large! File size is ${(file.size / (1024 * 1024)).toFixed(1)} MB. Maximum limit is 50 MB.`);
      return false;
    }

    this.isUploading = true;
    this.uploadStatusText = "⏳ Uploading file to Supabase Storage bucket 'gameplay-videos'...";
    this.notify();

    try {
      const fileExt = file.name.split('.').pop() || (isVideo ? 'mp4' : 'jpg');
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      // 1. Upload file to Supabase Storage bucket ('gameplay-videos')
      const { data: storageData, error: storageError } = await client.storage
        .from('gameplay-videos')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (storageError) {
        console.error("Storage Upload Error:", storageError);
        alert("❌ Supabase Storage Upload Error: " + storageError.message);
        this.isUploading = false;
        this.notify();
        return false;
      }

      // 2. Retrieve Public URL for uploaded media file
      const { data: { publicUrl } } = client.storage
        .from('gameplay-videos')
        .getPublicUrl(filePath);

      this.uploadStatusText = "⏳ Saving post record in Supabase database...";
      this.notify();

      // 3. Create post record in Supabase Database ('posts' table)
      const { data: postData, error: dbError } = await client
        .from('posts')
        .insert([
          {
            user_id: user.id,
            user_ign: user.ign,
            user_avatar: user.avatar,
            user_rank: user.rank || 'Grandmaster',
            title: title.trim(),
            description: description ? description.trim() : '',
            media_path: filePath,
            media_url: publicUrl,
            media_type: isVideo ? 'video' : 'image'
          }
        ])
        .select();

      if (dbError) {
        console.warn("DB Post Insert Note:", dbError.message);
      }

      // Add to immediate local feed view as well
      const newClip = {
        id: "clip_" + Date.now(),
        authorId: user.id,
        authorIgn: user.ign,
        authorAvatar: user.avatar,
        authorRank: user.rank,
        title: title.trim(),
        description: description ? description.trim() : '',
        mediaType: isVideo ? 'video' : 'image',
        mediaUrl: publicUrl,
        tags: ["FreeFire", "SupabaseStorage", "Gameplay"],
        likes: 0,
        isLiked: false,
        views: 1,
        createdAt: "Just now",
        comments: []
      };

      this.clips = [newClip, ...this.clips];
      this.isUploading = false;
      this.uploadStatusText = '';
      this.toggleUploadModal(false);
      this.notify();

      alert("🎉 BOOYAH! Gameplay Clip Uploaded to Supabase Storage & Published to Feed!");
      return true;

    } catch (err) {
      console.error("Unexpected Upload Error:", err);
      alert("❌ Upload Error: Unable to complete upload.");
      this.isUploading = false;
      this.uploadStatusText = '';
      this.notify();
      return false;
    }
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
  openEsportsApplyModal(listing) { this.selectedEsportsApplyModal = listing; this.notify(); }
  closeEsportsApplyModal() { this.selectedEsportsApplyModal = null; this.notify(); }

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
    alert("🎉 Application Submitted Successfully!");
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
    alert(`⚔️ Challenge Sent to ${challengeData.opponentIgn}!`);
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

  setActiveChatPlayer(playerId) {
    this.activeChatPlayerId = playerId;
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
          <button class="nav-tab ${activeTab === 'feed' ? 'active' : ''}" data-tab="feed" id="nav-home-btn">🏠 Home</button>
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

// FEED RENDERER (SUPABASE CLIPS & VIDEOS)
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
          <p class="hero-sub">Upload 1v4 clutches, AWM headshots, and squad wipes to Supabase Storage & Database!</p>
          <button class="btn btn-primary" id="btn-upload-clip">+ Upload Gameplay Video</button>
        </div>
      </div>

      <div class="feed-header-bar">
        <h2>Latest Community Gameplay Videos (${filteredClips.length})</h2>
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
                <video src="${clip.mediaUrl}" controls preload="metadata" class="clip-media-video" poster="assets/gameplay_thumb1.jpg"></video>
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
                      <div><strong>${c.authorIgn}</strong>: ${c.text}</div>
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

              <div class="player-metrics" style="margin: 12px 0;">
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

// MINI GAMES ARENA RENDERER
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

        <div style="background: var(--dark-surface); border: 2px solid var(--amber-gold); padding: 16px 24px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Daily Coin Earnings</div>
          <div style="font-size: 2.2rem; font-weight: 800; color: var(--amber-gold); margin: 4px 0;">🪙 ${earnedToday} / 10</div>
          <div style="font-size: 0.75rem; color: ${limitRemaining > 0 ? '#00E676' : '#FF5252'}; font-weight: 700;">
            ${limitRemaining > 0 ? `Remaining Today: +${limitRemaining} Coins` : '⚠️ Daily Limit Reached'}
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; margin-bottom: 36px;">
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="margin: 0; font-size: 1.25rem;">🎯 3D AWM Quickscope Range</h3>
              <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem;">+3 🪙</span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">Aim with scope crosshair and fire quickscopes at 3D moving headshot targets!</p>
          </div>
          <button class="btn btn-primary" data-action="launch-game" data-game="awm" style="width: 100%; justify-content: center;">
            🎯 PLAY AWM SNIPER ARENA
          </button>
        </div>

        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="margin: 0; font-size: 1.25rem;">🛡️ 360° Gloo Wall Defender</h3>
              <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem;">+2 🪙</span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">Scan 360-degree radar for incoming enemy attacks & drop Gloo Walls!</p>
          </div>
          <button class="btn btn-primary" data-action="launch-game" data-game="gloo360" style="width: 100%; justify-content: center;">
            🛡️ PLAY 360° GLOO DEFENDER
          </button>
        </div>

        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <h3 style="margin: 0; font-size: 1.25rem;">🎰 15-Segment Lucky Wheel</h3>
              <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem;">+1 ~ +5 🪙</span>
            </div>
            <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">Spin the 15-segment wheel featuring 10 empty & 5 reward slots (1 to 5 Booyah Coins)!</p>
          </div>
          <button class="btn btn-primary" data-action="launch-game" data-game="spin15" style="width: 100%; justify-content: center;">
            🎰 SPIN 15-SEGMENT WHEEL
          </button>
        </div>
      </div>

      <div style="background: var(--bg-card); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08);">
        <h3 style="margin-top: 0; margin-bottom: 16px;">📜 Gameplay & Win History Log (${history.length})</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${history.map(item => `
            <div style="background: var(--dark-surface); padding: 12px 16px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border-left: 4px solid ${item.coinsWon > 0 ? '#00E676' : 'var(--text-muted)'};">
              <div>
                <strong style="color: #FFF;">${item.gameName}</strong> — <span style="font-size: 0.85rem; color: var(--text-light);">${item.detail}</span>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${item.date} at ${item.time}</div>
              </div>
              <div>
                <span style="background: ${item.coinsWon > 0 ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 255, 255, 0.05)'}; color: ${item.coinsWon > 0 ? '#00E676' : 'var(--text-muted)'}; font-weight: 800; padding: 4px 10px; border-radius: 10px; font-size: 0.85rem;">
                  ${item.coinsWon > 0 ? `+${item.coinsWon} 🪙 ${item.result}` : item.result}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
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
            <div style="display: flex; align-items: center; gap: 12px;">
              <h1 style="margin: 0; font-size: 2rem;">${player.ign}</h1>
              <span class="rank-badge-pill grandmaster">${player.rank} ⭐${player.rankStars}</span>
            </div>
            <p style="margin: 4px 0; color: var(--amber-gold);">UID: <strong>${player.uid}</strong> | 📍 ${player.city || ''}, ${player.state} | Guild: ${player.guild || 'N/A'}</p>
            <p style="margin: 8px 0; color: var(--text-light); font-size: 0.95rem;">${player.bio}</p>

            <div style="display: flex; gap: 10px; margin-top: 16px;">
              <button class="btn btn-challenge" data-action="challenge" data-id="${player.id}">⚔️ Challenge 1v1 Room</button>
              <button class="btn btn-primary" data-action="message" data-id="${player.id}">💬 Direct Message</button>
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

// PROFILE TAB RENDERER
function renderProfile() {
  const { currentUser, isLoggedIn } = state;

  return `
    <div class="profile-page-container" style="max-width: 1100px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 32px; margin-bottom: 24px; display: flex; gap: 28px; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <img src="${currentUser.avatar}" alt="${currentUser.ign}" style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid var(--primary-fire); box-shadow: 0 0 25px rgba(255, 85, 0, 0.4);" />
        
        <div style="flex: 1;">
          <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap;">
            <h1 style="margin: 0; font-size: 2.2rem; font-family: var(--font-heading); color: #FFF;">${currentUser.ign}</h1>
            <span class="rank-badge-pill grandmaster" style="padding: 6px 14px; font-size: 0.85rem;">${currentUser.rank} ⭐${currentUser.rankStars}</span>
            <span style="background: ${isLoggedIn ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 183, 0, 0.15)'}; color: ${isLoggedIn ? '#00E676' : 'var(--amber-gold)'}; font-weight: 800; padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; border: 1px solid ${isLoggedIn ? '#00E676' : 'var(--amber-gold)'};">
              ${isLoggedIn ? '✓ Authenticated Supabase User' : '⚠️ Guest Mode (Click Sign In)'}
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
      </div>
    </div>
  `;
}

// ESPORTS RENDERER
function renderEsports() {
  const { esportsListings, esportsApplications } = state;
  return `
    <div class="esports-container">
      <div class="esports-hero" style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.3) 0%, rgba(13, 15, 18, 0.95) 100%); padding: 30px; border-radius: 16px; margin-bottom: 24px; border: 1px solid var(--border-color);">
        <h1 style="font-size: 2.2rem; margin: 0 0 8px 0;">🏆 ESPORTS RECRUITMENT & SQUAD TRYOUTS</h1>
        <p style="color: var(--text-light); margin: 0;">Apply for official Free Fire tournament teams, competitive guilds, and cash cup tryouts across India!</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 24px; margin-bottom: 36px;">
        ${esportsListings.map(item => `
          <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px;">
            <span style="background: var(--amber-gold); color: #000; font-weight: 800; font-size: 0.75rem; padding: 2px 8px; border-radius: 8px;">${item.tournament}</span>
            <h3 style="margin: 10px 0 4px 0; font-size: 1.3rem;">${item.teamName}</h3>
            <div style="color: #00E676; font-weight: 800; margin-bottom: 12px;">Prize Pool: ${item.prizePool}</div>
            <button class="btn btn-primary" data-action="open-esports-apply" data-id="${item.id}" style="width: 100%; justify-content: center;">
              📝 Apply for Squad Tryouts
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// NEWS RENDERER
function renderNews() {
  const { news } = state;
  return `
    <div class="news-container">
      <div class="news-hero" style="background: linear-gradient(135deg, rgba(255, 183, 0, 0.2) 0%, rgba(13, 15, 18, 0.95) 100%), url('assets/ff_news_thumb.jpg'); background-size: cover; padding: 36px; border-radius: 16px; margin-bottom: 24px;">
        <span style="background: var(--amber-gold); color: #000; font-weight: 800; font-size: 0.75rem; padding: 4px 12px; border-radius: 12px;">🌐 OFFICIAL GARENA FREE FIRE HUB</span>
        <h1 style="font-size: 2.4rem; margin: 10px 0 6px 0;">OFFICIAL WEBSITES & GAMING OPPORTUNITIES</h1>
      </div>

      <div class="news-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 24px;">
        ${news.map(article => `
          <div class="news-card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden;">
            <div style="padding: 20px;">
              <h3 style="font-size: 1.15rem; margin: 0 0 10px 0; color: #FFF;">${article.title}</h3>
              <p style="font-size: 0.88rem; color: var(--text-light); margin-bottom: 16px;">${article.summary}</p>
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
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 20px;">
        ${challenges.map(c => `
          <div style="background: var(--bg-card); padding: 20px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08);">
            <strong>${c.challengerIgn}</strong> VS <strong>${c.opponentIgn}</strong> — Stake: ${c.stake} (Room ID: ${c.roomId})
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
      <table class="lb-table" style="width: 100%; background: var(--bg-card); border-radius: 16px; margin-top: 20px;">
        <thead>
          <tr style="text-align: left;">
            <th style="padding: 16px;">Rank</th>
            <th style="padding: 16px;">Player</th>
            <th style="padding: 16px;">State</th>
            <th style="padding: 16px;">Stars</th>
          </tr>
        </thead>
        <tbody>
          ${sortedPlayers.map((p, i) => `
            <tr>
              <td style="padding: 16px;">#${i + 1}</td>
              <td style="padding: 16px;">${p.ign}</td>
              <td style="padding: 16px;">📍 ${p.state}</td>
              <td style="padding: 16px; color: var(--amber-gold);">⭐ ${p.rankStars}</td>
            </tr>
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
    <div class="chat-container" style="background: var(--bg-card); padding: 20px; border-radius: 16px;">
      <h2>💬 Squad Chat</h2>
      <div style="margin-top: 16px;">
        ${activeSession ? activeSession.messages.map(m => `
          <div style="margin-bottom: 8px; background: var(--dark-surface); padding: 10px; border-radius: 12px; max-width: 60%;">
            ${m.text}
          </div>
        `).join('') : ''}
      </div>
    </div>
  `;
}

// MODALS RENDERER (INCLUDES REAL SUPABASE STORAGE UPLOAD MODAL WITH VIDEO PREVIEW)
function renderModals() {
  const { selectedPlayerModal, selectedChallengeModalPlayer, selectedUploadModal, selectedLoginModal, authModalTab, selectedEsportsApplyModal, activeGameArenaModal, isUploading, uploadStatusText, players } = state;

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

    <!-- REAL SUPABASE STORAGE GAMEPLAY VIDEO UPLOAD MODAL -->
    ${selectedUploadModal ? `
      <div class="modal-overlay" id="modal-upload">
        <div class="modal-card" style="max-width: 520px;">
          <button class="modal-close-btn" id="close-upload-modal">&times;</button>
          <h2>🎥 Upload Gameplay Video to Supabase</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">
            Upload MP4 / WebM / MOV videos (max 50 MB) directly to Supabase Storage bucket 'gameplay-videos'.
          </p>

          <form id="form-upload-clip">
            <div class="form-group">
              <label>Gameplay Clip Title</label>
              <input type="text" id="upload-title" class="form-control" placeholder="e.g. 1v4 Grandmaster Clutch with AWM" required />
            </div>

            <div class="form-group">
              <label>Description / Match Context</label>
              <textarea id="upload-desc" class="form-control" rows="3" placeholder="Describe the clutch moment, weapon combo, or rank lobby..." required></textarea>
            </div>

            <div class="form-group">
              <label>Select Video File (MP4, WebM, MOV — Max 50 MB)</label>
              <input type="file" id="upload-file-input" class="form-control" accept="video/mp4,video/webm,video/quicktime,video/*,image/*" required />
            </div>

            <!-- LIVE VIDEO PREVIEW CONTAINER -->
            <div id="video-preview-container" style="display: none; margin: 16px 0; background: #000; border-radius: 12px; overflow: hidden; border: 1px solid var(--primary-fire);">
              <video id="upload-video-preview" controls style="width: 100%; max-height: 240px; display: block;"></video>
            </div>

            ${isUploading ? `
              <div style="background: rgba(255, 85, 0, 0.15); border: 1px solid var(--primary-fire); padding: 12px; border-radius: 12px; text-align: center; margin-bottom: 16px; color: var(--amber-gold); font-weight: 700;">
                ${uploadStatusText || "⏳ Uploading to Supabase Storage..."}
              </div>
            ` : ''}

            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <button type="button" class="btn btn-secondary" id="btn-cancel-upload" style="flex: 1;">Cancel</button>
              <button type="submit" class="btn btn-primary" id="btn-submit-upload" style="flex: 2; justify-content: center;" ${isUploading ? 'disabled' : ''}>
                ${isUploading ? '⏳ Uploading...' : '🚀 Publish to Supabase Feed'}
              </button>
            </div>
          </form>
        </div>
      </div>
    ` : ''}

    <!-- MINI GAME ARENAS -->
    ${activeGameArenaModal === 'awm' ? `
      <div class="game-arena-overlay">
        <div class="game-arena-card">
          <div class="game-arena-header">
            <h2>🎯 AWM Quickscope 3D Range</h2>
            <button class="modal-close-btn" id="close-game-arena">&times;</button>
          </div>
          <div class="game-arena-body">
            <div class="awm-scope-canvas" id="awm-arena-box">
              <div class="awm-scope-reticle"><div class="reticle-circle"></div><div class="reticle-cross-h"></div><div class="reticle-cross-v"></div></div>
              <div style="position: absolute; top: 12px; left: 16px; color: var(--amber-gold); font-weight: 800;">Hits: <span id="awm-headshot-count">0</span>/5</div>
              <div style="position: absolute; top: 12px; right: 16px; color: #FFF; font-weight: 800;">Time: <span id="awm-timer-sec">15</span>s</div>
              <div id="awm-enemy-target" class="scope-target-enemy" style="top: 130px; left: 320px;">🎯</div>
            </div>
            <button class="btn btn-primary" id="btn-fire-awm" style="margin-top: 20px;">🔥 FIRE AWM</button>
          </div>
        </div>
      </div>
    ` : ''}

    ${activeGameArenaModal === 'gloo360' ? `
      <div class="game-arena-overlay">
        <div class="game-arena-card">
          <div class="game-arena-header">
            <h2>🛡️ 360° Gloo Defender</h2>
            <button class="modal-close-btn" id="close-game-arena">&times;</button>
          </div>
          <div class="game-arena-body">
            <div class="radar-360-container">
              <div class="radar-ring">
                <div class="radar-center-player">🛡️</div>
                <button class="radar-dir-btn radar-dir-north" id="gloo-dir-N">NORTH ⬆️</button>
                <button class="radar-dir-btn radar-dir-south" id="gloo-dir-S">SOUTH ⬇️</button>
                <button class="radar-dir-btn radar-dir-west" id="gloo-dir-W">WEST ⬅️</button>
                <button class="radar-dir-btn radar-dir-east" id="gloo-dir-E">EAST ➡️</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    ${activeGameArenaModal === 'spin15' ? `
      <div class="game-arena-overlay">
        <div class="game-arena-card">
          <div class="game-arena-header">
            <h2>🎰 15-Segment Lucky Wheel</h2>
            <button class="modal-close-btn" id="close-game-arena">&times;</button>
          </div>
          <div class="game-arena-body">
            <div class="wheel-15-wrapper">
              <div class="wheel-pointer-top"></div>
              <svg viewBox="0 0 300 300" class="wheel-15-svg" id="svg-wheel-15">
                <circle cx="150" cy="150" r="140" fill="#12161d" stroke="var(--primary-fire)" stroke-width="6" />
                <g id="wheel-segments-group"></g>
              </svg>
            </div>
            <button class="btn btn-primary" id="btn-spin-15-action">🎰 SPIN NOW</button>
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

  const btnCancelUpload = document.getElementById('btn-cancel-upload');
  if (btnCancelUpload) btnCancelUpload.addEventListener('click', () => state.toggleUploadModal(false));

  const btnCloseUpload = document.getElementById('close-upload-modal');
  if (btnCloseUpload) btnCloseUpload.addEventListener('click', () => state.toggleUploadModal(false));

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

  // LIVE VIDEO FILE PREVIEW LISTENER
  const fileInput = document.getElementById('upload-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const previewContainer = document.getElementById('video-preview-container');
      const videoPreview = document.getElementById('upload-video-preview');

      if (file && previewContainer && videoPreview) {
        const objectUrl = URL.createObjectURL(file);
        videoPreview.src = objectUrl;
        previewContainer.style.display = 'block';
      }
    });
  }

  // REAL SUPABASE VIDEO UPLOAD FORM SUBMIT
  const formUpload = document.getElementById('form-upload-clip');
  if (formUpload) {
    formUpload.addEventListener('submit', (e) => {
      e.preventDefault();
      const fileInputElem = document.getElementById('upload-file-input');
      const titleElem = document.getElementById('upload-title');
      const descElem = document.getElementById('upload-desc');

      const file = fileInputElem.files[0];
      const title = titleElem.value;
      const description = descElem.value;

      state.uploadGameplayClip({ file, title, description });
    });
  }

  // SUPABASE AUTH SUBMITS
  const formSignIn = document.getElementById('form-supabase-signin');
  if (formSignIn) {
    formSignIn.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-signin-email').value;
      const password = document.getElementById('auth-signin-password').value;
      state.signInWithSupabase(email, password);
    });
  }

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

// MINI GAMES INTERACTIVE ENGINE
function initMiniGamesLogic() {
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

  if (state.activeGameArenaModal === 'spin15') {
    const wheelGroup = document.getElementById('wheel-segments-group');
    const svgWheel = document.getElementById('svg-wheel-15');
    const spinBtn = document.getElementById('btn-spin-15-action');

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
}

state.subscribe(renderApp);

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
