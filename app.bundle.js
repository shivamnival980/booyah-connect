// ==========================================================================
// BOOYAHCONNECT — COMPLETE UNIFIED APPLICATION BUNDLE
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
    connectionState: "none",
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
    connectionState: "none",
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
      { id: "c1", authorId: "p1", authorIgn: "🔥 Pahadi_Sniper_FF 🔥", authorAvatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PahadiGamer", text: "That 2nd headshot quick scope was insane brother!! 🔥", time: "1 hour ago" }
    ]
  }
];

const academyCourses = [
  {
    id: "headshot-masterclass",
    title: "HEADSHOT MASTERCLASS",
    icon: "🎯",
    category: "Aim",
    difficulty: "Advanced",
    description: "Master crosshair placement, drag headshots, and aim control for instant 1-tap kills.",
    lessons: [
      {
        id: "l_hs_1",
        title: "Lesson 1: Understanding Crosshair Placement",
        duration: "8 mins",
        difficulty: "Beginner",
        description: "Learn how keeping your crosshair at enemy head-height guarantees first-shot headshots.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Never keep your crosshair pointing at the ground while sprinting.", "Pre-aim corners where enemy heads will appear.", "Use white crosshair indicator to gauge head height."],
        practiceTask: "Enter Training Ground Target Range. Keep crosshair at head height and land 20 consecutive headshots without moving crosshair vertically."
      },
      {
        id: "l_hs_2",
        title: "Lesson 2: Drag Headshot Angle Techniques",
        duration: "10 mins",
        difficulty: "Intermediate",
        description: "Master straight drag, L-drag, and rotational drag headshots depending on enemy movement.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["If enemy runs straight, drag fire button UP.", "If enemy runs right, drag fire button UP-RIGHT in an L-shape.", "Pull down slightly before dragging up for tighter recoil control."],
        practiceTask: "Perform 15 L-drag headshots against moving bot targets in Training Grounds."
      },
      {
        id: "l_hs_3",
        title: "Lesson 3: Sensitivity & Custom HUD Aim Control",
        duration: "7 mins",
        difficulty: "Beginner",
        description: "Optimize your Red Dot, 2x, 4x, and General sensitivity for smooth headshot drag.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Set General Sensitivity between 95–100 for fast drag.", "Increase Red Dot sensitivity if fire button feels heavy.", "Place fire button size between 45% and 55% for optimal thumb grip."],
        practiceTask: "Adjust your sensitivity settings in a Training Match until dragging to head height feels effortless."
      },
      {
        id: "l_hs_4",
        title: "Lesson 4: One-Tap Timing with Shotguns & Pistols",
        duration: "12 mins",
        difficulty: "Advanced",
        description: "Timing your shot right as the crosshair locks onto the head with M1887 & Desert Eagle.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Wait for enemy to stop or shoot first before firing your 1-tap.", "Use quick weapon switch right after shooting.", "Crouch immediately after the 1-tap to reset recoil."],
        practiceTask: "Land 10 Desert Eagle one-taps in CS Ranked or Training Mode."
      },
      {
        id: "l_hs_5",
        title: "Lesson 5: Jump & Crouch Drag Headshots",
        duration: "11 mins",
        difficulty: "Advanced",
        description: "Executing unpredictable jump-drag and crouch-peek headshots in close quarters.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Jump, aim, and drag as you reach the peak of your jump.", "Crouch-drag catches enemy crosshairs off guard.", "Combine with Gloo Wall placement immediately."],
        practiceTask: "Execute 10 successful jump-drag headshots in Clash Squad lobby."
      }
    ]
  },
  {
    id: "movement-techniques",
    title: "MOVEMENT & MOVEMENT TECHNIQUES",
    icon: "🏃",
    category: "Movement",
    difficulty: "Intermediate",
    description: "Outmaneuver opponents with fast Gloo wall switches, 360 jump shots, and zig-zag evasion.",
    lessons: [
      {
        id: "l_mv_1",
        title: "Lesson 1: Fast Gloo Wall Switch & Sprint",
        duration: "9 mins",
        difficulty: "Beginner",
        description: "Eliminate sprint delay after placing a Gloo Wall in intense gunfights.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Tap Gloo Wall -> Crouch -> Place -> Sprint in one fluid thumb motion.", "Use Left Fire Button for faster Gloo placement.", "Keep sprint button near top thumb area."],
        practiceTask: "Practice placing 10 fast Gloo Walls while sprinting in Training Mode without stopping."
      },
      {
        id: "l_mv_2",
        title: "Lesson 2: 360-Degree Jump Shot Movement",
        duration: "10 mins",
        difficulty: "Intermediate",
        description: "Spin 180 or 360 degrees in mid-air to hit enemies behind cover.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Swipe camera fast before jumping.", "Fire at the apex of mid-air rotation.", "Reset camera forward upon landing."],
        practiceTask: "Perform 10 180-degree jump shots behind obstacles in Combat Zone."
      },
      {
        id: "l_mv_3",
        title: "Lesson 3: Zig-Zag Evasion & Cover Traversal",
        duration: "8 mins",
        difficulty: "Intermediate",
        description: "Dodge enemy sniper shots while crossing open fields between covers.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Never run in a straight line across open areas.", "Use analog joystick micro-taps combined with jump-crouch.", "Deploy Gloo Wall halfway across long open runs."],
        practiceTask: "Cross the Bermuda open field in Training Mode avoiding all bot damage using zig-zag movement."
      }
    ]
  },
  {
    id: "one-tap-training",
    title: "ONE-TAP TRAINING",
    icon: "🔫",
    category: "Aim",
    difficulty: "Intermediate",
    description: "Specialized training for Desert Eagle, M1887, and Woodpecker 1-tap headshots.",
    lessons: [
      {
        id: "l_ot_1",
        title: "Lesson 1: Desert Eagle & M1887 One-Tap Timing",
        duration: "9 mins",
        difficulty: "Intermediate",
        description: "Mastering the single-bullet headshot rhythm with high-damage weapons.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Flick fire button upward with explosive speed.", "Reset crosshair to white before firing second shot.", "Pair with Alok or Tatsuya character speed boost."],
        practiceTask: "Win 3 1v1 custom room rounds using Desert Eagle 1-taps only."
      },
      {
        id: "l_ot_2",
        title: "Lesson 2: Sit-Up Headshot Trick & Quick Switch",
        duration: "11 mins",
        difficulty: "Advanced",
        description: "Using the sit-stand-drag sequence for instant auto-aim lock.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Crouch -> Scope -> Stand -> Drag UP.", "Quick switch to melee weapon right after shot to sprint faster.", "Practice timing in slow motion first."],
        practiceTask: "Complete 10 sit-up headshot tricks in CS Ranked matches."
      }
    ]
  },
  {
    id: "gloo-wall-mastery",
    title: "GLOO WALL MASTERY",
    icon: "🧱",
    category: "Combat",
    difficulty: "Intermediate",
    description: "1-second reflex Gloo walls, crouch traps, and aggressive Gloo wall pushing.",
    lessons: [
      {
        id: "l_gw_1",
        title: "Lesson 1: Instant 1-Second Reflex Gloo Placement",
        duration: "8 mins",
        difficulty: "Beginner",
        description: "Deploying Gloo Walls the exact millisecond you take enemy fire.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Hold Gloo Wall button pre-emptively when peeking corners.", "Drag camera down towards feet when placing Gloo Wall to prevent placing it far away.", "Use Mr. Waggor pet for extra Gloo Walls in endgame."],
        practiceTask: "Place a Gloo Wall in under 0.5 seconds whenever a bot shoots you in Training Grounds."
      },
      {
        id: "l_gw_2",
        title: "Lesson 2: Crouch Gloo Wall Trick & Box Traps",
        duration: "10 mins",
        difficulty: "Intermediate",
        description: "Trap aggressive rushers inside Gloo Wall boxes for easy shotgun kills.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Crouch right as enemy rushes close.", "Place Gloo Wall directly in front of enemy's running path.", "Flank around the Gloo Wall side for a free M1887 blast."],
        practiceTask: "Successfully trap and eliminate 3 enemy rushers using Gloo Walls in CS Ranked."
      }
    ]
  },
  {
    id: "sniper-training",
    title: "AWM / SNIPER TRAINING",
    icon: "🎯",
    category: "Aim",
    difficulty: "Advanced",
    description: "Double AWM quickswitch, predictive sniping, and long-range headshots.",
    lessons: [
      {
        id: "l_sn_1",
        title: "Lesson 1: Double AWM Fast Switch & Quickscope",
        duration: "14 mins",
        difficulty: "Advanced",
        description: "Shoot two AWM rounds in under 1 second without reload animation.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Scope -> Shoot -> Switch Gun -> Scope -> Shoot.", "Enable 'Hold Fire to Scope' in Free Fire settings.", "Master rhythm: Hold -> Release -> Quick Switch."],
        practiceTask: "Eliminate 5 targets in Training Range using Double AWM quick switch without reloading."
      },
      {
        id: "l_sn_2",
        title: "Lesson 2: Predictive Sniping at Long Range",
        duration: "10 mins",
        difficulty: "Advanced",
        description: "Aiming ahead of moving targets to factor in bullet flight time.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Place crosshair 1 body-width ahead of running enemies.", "Shoot as enemy steps into crosshair path.", "Target head height when enemy is ziplining or jumping."],
        practiceTask: "Hit 5 moving long-range targets in Battle Royale mode with AWM or Kar98k."
      }
    ]
  },
  {
    id: "game-sense",
    title: "GAME SENSE & POSITIONING",
    icon: "🧠",
    category: "Strategy",
    difficulty: "Advanced",
    description: "High-ground positioning, zone rotation timing, and 1v4 clutch tactics.",
    lessons: [
      {
        id: "l_gs_1",
        title: "Lesson 1: High-Ground Positioning & Zone Rotations",
        duration: "11 mins",
        difficulty: "Intermediate",
        description: "Securing victory by controlling high ground and early safe zone edges.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Always rotate to safe zone before third circle shrinks.", "High ground gives 70% higher headshot angle probability.", "Gatekeep enemies entering zone late from behind cover."],
        practiceTask: "Secure 2 BOOYAH victories in BR Ranked by holding high-ground zone edges."
      },
      {
        id: "l_gs_2",
        title: "Lesson 2: 1v4 Clutch Isolating Duels Strategy",
        duration: "15 mins",
        difficulty: "Advanced",
        description: "Turning 1v4 squad wipes into four separate 1v1 fights.",
        videoUrl: "assets/gameplay_thumb1.jpg",
        tips: ["Never fight 4 enemies at the same time in open ground.", "Use buildings and Gloo Walls to divide squad line of sight.", "Knock the first rusher fast to create 1v3 panic."],
        practiceTask: "Pull off a 1v3 or 1v4 clutch in CS Ranked lobby."
      }
    ]
  }
];

function isUuid(str) {
  return typeof str === 'string' && /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(str);
}

// STATE MANAGER CLASS
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

    // Feed Loading States
    this.isClipsLoading = false;
    this.clipsError = null;
    this.hasFetchedRemoteClips = false;
    this.postLimit = 20;

    // Social State
    this.userConnections = [];

    // Phase 4 Academy State
    this.academyProgress = [];
    this.activeAcademyCategory = null;
    this.activeAcademyLesson = null;
    this.academyCategoryFilter = 'all';
    this.academyDifficultyFilter = 'all';

    this.roleFilter = 'all';
    this.stateFilter = 'all';
    this.skillFilter = 'all';
    this.clipTagFilter = 'All Highlights';
    this.newsCategoryFilter = 'All Articles';
    this.challengeFilter = 'All';

    this.currentUser = initialCurrentUser;
    this.players = this.loadFromStorage('booyah_players', initialPlayers);
    this.clips = initialClips;
    this.challenges = this.loadFromStorage('booyah_challenges', []);
    this.news = this.loadFromStorage('booyah_news', []);
    this.messages = this.loadFromStorage('booyah_messages', []);
    this.esportsListings = this.loadFromStorage('booyah_esports', []);
    this.esportsApplications = this.loadFromStorage('booyah_apps', []);
    this.gameHistory = this.loadFromStorage('booyah_game_history', []);

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

  async initSupabaseAuth() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    
    if (client) {
      try {
        const { data: { session } } = await client.auth.getSession();
        if (session && session.user) {
          this.handleAuthUserSession(session.user);
        }
      } catch (e) {
        console.error("[Auth Init] Error retrieving session:", e);
      }
    }

    await this.fetchFeedClipsFromSupabase();
    await this.fetchUserConnectionsFromSupabase();
    await this.fetchAcademyProgressFromSupabase();

    if (!client) return;

    client.auth.onAuthStateChange(async (event, session) => {
      console.log("[Supabase Auth Event]:", event, session?.user?.email);
      if (session && session.user) {
        this.handleAuthUserSession(session.user);
      } else if (event === 'SIGNED_OUT') {
        this.handleAuthUserSignOut();
      }
      await this.fetchFeedClipsFromSupabase();
      await this.fetchUserConnectionsFromSupabase();
      await this.fetchAcademyProgressFromSupabase();
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
      skills: meta.skills || ["AWM Sniper", "M1887 One-Shot", "Gloo Wall Reflex", "IGL Shotcaller"]
    };
    this.isLoggedIn = true;
    this.notify();
  }

  handleAuthUserSignOut() {
    this.currentUser = initialCurrentUser;
    this.isLoggedIn = false;
    this.userConnections = [];
    this.academyProgress = [];
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
        alert("❌ Sign In Error: " + error.message);
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

  // FETCH REAL POSTS, LIKES & COMMENTS FROM SUPABASE DATABASE
  async fetchFeedClipsFromSupabase() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) return;

    this.isClipsLoading = true;
    this.clipsError = null;
    this.notify();

    try {
      const { data: postsData, error: postsError } = await client
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(this.postLimit);

      if (postsError) {
        console.warn("Supabase fetch posts info:", postsError.message);
        this.clipsError = postsError.message;
        this.isClipsLoading = false;
        this.notify();
        return;
      }

      if (postsData && postsData.length > 0) {
        const postIds = postsData.map(p => p.id);

        let userLikesMap = {};
        let likesCountMap = {};

        try {
          const { data: likesData, error: likesErr } = await client
            .from('post_likes')
            .select('post_id, user_id')
            .in('post_id', postIds);

          if (likesErr) console.error("Fetch likes error:", likesErr.message);
          else if (likesData) {
            likesData.forEach(lk => {
              likesCountMap[lk.post_id] = (likesCountMap[lk.post_id] || 0) + 1;
              if (this.isLoggedIn && this.currentUser && lk.user_id === this.currentUser.id) {
                userLikesMap[lk.post_id] = true;
              }
            });
          }
        } catch (e) {
          console.error("Error reading likes:", e);
        }

        let commentsMap = {};
        try {
          const { data: commentsData, error: commentsErr } = await client
            .from('post_comments')
            .select('*')
            .in('post_id', postIds)
            .order('created_at', { ascending: true });

          if (commentsErr) console.error("Fetch comments error:", commentsErr.message);
          else if (commentsData) {
            commentsData.forEach(c => {
              if (!commentsMap[c.post_id]) commentsMap[c.post_id] = [];
              commentsMap[c.post_id].push({
                id: c.id,
                authorId: c.user_id,
                authorIgn: c.user_ign || 'Pro Gamer',
                authorAvatar: c.user_avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${c.user_id}`,
                text: c.content,
                time: new Date(c.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              });
            });
          }
        } catch (e) {
          console.error("Error reading comments:", e);
        }

        const remoteClips = postsData.map(post => ({
          id: post.id,
          authorId: post.user_id,
          authorIgn: post.user_ign || 'Pro Gamer',
          authorAvatar: post.user_avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${post.user_id}`,
          authorRank: post.user_rank || 'Grandmaster',
          title: post.title,
          description: post.description,
          mediaPath: post.media_path,
          mediaType: post.media_type || 'video',
          mediaUrl: post.media_url,
          tags: ["Gameplay", "Supabase", "FreeFire"],
          likes: likesCountMap[post.id] !== undefined ? likesCountMap[post.id] : (post.likes_count || 0),
          isLiked: !!userLikesMap[post.id],
          views: post.views_count || 1,
          createdAt: new Date(post.created_at).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }),
          comments: commentsMap[post.id] || []
        }));

        this.clips = [...remoteClips, ...initialClips];
        this.hasFetchedRemoteClips = true;
      } else {
        this.hasFetchedRemoteClips = true;
      }

      this.isClipsLoading = false;
      this.notify();
    } catch (e) {
      console.error("Error fetching feed clips from Supabase:", e);
      this.clipsError = "Network error fetching posts";
      this.isClipsLoading = false;
      this.notify();
    }
  }

  // FETCH ACADEMY LESSON PROGRESS FROM SUPABASE ('academy_progress')
  async fetchAcademyProgressFromSupabase() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!client || !this.isLoggedIn || !user || !user.id || user.id === "guest_user") return;

    try {
      const { data, error } = await client
        .from('academy_progress')
        .select('lesson_id, completed')
        .eq('user_id', user.id);

      if (error) {
        console.warn("[Academy] Progress fetch warning:", error.message);
      } else if (data) {
        this.academyProgress = data.filter(d => d.completed).map(d => d.lesson_id);
        this.notify();
      }
    } catch (e) {
      console.error("Error reading academy progress from Supabase:", e);
    }
  }

  // TOGGLE ACADEMY LESSON COMPLETION IN SUPABASE
  async toggleLessonComplete(lessonId) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") {
      alert("⚠️ Authentication Required!\nPlease sign in with your Supabase account to track your Academy training progress.");
      this.toggleLoginModal(true, 'signin');
      return;
    }

    const isCompleted = this.academyProgress.includes(lessonId);

    if (isCompleted) {
      this.academyProgress = this.academyProgress.filter(id => id !== lessonId);
    } else {
      this.academyProgress.push(lessonId);
    }
    this.notify();

    if (client) {
      try {
        if (isCompleted) {
          const { error } = await client
            .from('academy_progress')
            .delete()
            .eq('user_id', user.id)
            .eq('lesson_id', lessonId);

          if (error) console.error("❌ Delete Academy Progress Error:", error.message);
        } else {
          const { error } = await client
            .from('academy_progress')
            .upsert([{ user_id: user.id, lesson_id: lessonId, completed: true }], { onConflict: 'user_id,lesson_id' });

          if (error) console.error("❌ Upsert Academy Progress Error:", error.message);
        }
      } catch (e) {
        console.error("Error toggling academy progress in Supabase:", e);
      }
    }
  }

  // DELETE OWN GAMEPLAY VIDEO FROM SUPABASE STORAGE AND DATABASE
  async deleteUserGameplayClip(clipId) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") {
      alert("⚠️ Authentication Required!");
      return false;
    }

    const targetClip = this.clips.find(c => c.id === clipId);
    if (!targetClip) return false;

    if (targetClip.authorId !== user.id) {
      alert("❌ Security Violation: You can only delete your own gameplay clips!");
      return false;
    }

    const confirmDelete = confirm("⚠️ Delete this gameplay clip?\nThis will permanently remove the video file and its post record from Supabase.");
    if (!confirmDelete) return false;

    this.clips = this.clips.filter(c => c.id !== clipId);
    this.notify();

    if (client && isUuid(clipId)) {
      try {
        if (targetClip.mediaPath) {
          const { error: storageErr } = await client.storage
            .from('gameplay-videos')
            .remove([targetClip.mediaPath]);
          if (storageErr) console.warn("Storage file delete note:", storageErr.message);
        }

        const { error: dbErr } = await client
          .from('posts')
          .delete()
          .eq('id', clipId)
          .eq('user_id', user.id);

        if (dbErr) {
          console.error("❌ Post record delete error:", dbErr.message);
        } else {
          alert("🗑️ Gameplay video permanently deleted!");
        }

        await this.fetchFeedClipsFromSupabase();
      } catch (e) {
        console.error("Error deleting post from Supabase:", e);
      }
    }
    return true;
  }

  // LIKES SYSTEM
  async toggleLikeClip(clipId) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") {
      alert("⚠️ Authentication Required!\nPlease sign in with your Supabase account to like posts.");
      this.toggleLoginModal(true, 'signin');
      return;
    }

    const targetClip = this.clips.find(c => c.id === clipId);
    if (!targetClip) return;

    const isCurrentlyLiked = targetClip.isLiked;

    this.clips = this.clips.map(c => {
      if (c.id === clipId) {
        return {
          ...c,
          isLiked: !isCurrentlyLiked,
          likes: !isCurrentlyLiked ? c.likes + 1 : Math.max(0, c.likes - 1)
        };
      }
      return c;
    });
    this.notify();

    if (client && isUuid(clipId)) {
      try {
        if (isCurrentlyLiked) {
          const { error } = await client
            .from('post_likes')
            .delete()
            .eq('post_id', clipId)
            .eq('user_id', user.id);
          if (error) console.error("❌ Like Delete Error:", error.message);
        } else {
          const { error } = await client
            .from('post_likes')
            .insert([{ post_id: clipId, user_id: user.id }]);
          if (error) console.error("❌ Like Insert Error:", error.message);
        }
      } catch (e) {
        console.error("Error toggling like on Supabase:", e);
      }
    }
  }

  // COMMENTS SYSTEM
  async addCommentToClip(clipId, text) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") {
      alert("⚠️ Authentication Required!\nPlease sign in to comment.");
      this.toggleLoginModal(true, 'signin');
      return;
    }

    if (!text || !text.trim()) return;

    const newCommentObj = {
      id: "temp_c_" + Date.now(),
      authorId: user.id,
      authorIgn: user.ign,
      authorAvatar: user.avatar,
      text: text.trim(),
      time: "Just now"
    };

    this.clips = this.clips.map(c => {
      if (c.id === clipId) {
        return { ...c, comments: [...c.comments, newCommentObj] };
      }
      return c;
    });
    this.notify();

    if (client && isUuid(clipId)) {
      try {
        const { data, error } = await client
          .from('post_comments')
          .insert([
            {
              post_id: clipId,
              user_id: user.id,
              user_ign: user.ign,
              user_avatar: user.avatar,
              content: text.trim()
            }
          ])
          .select();

        if (error) {
          console.error("❌ Comment Insert Error:", error.message);
        } else if (data && data[0]) {
          this.clips = this.clips.map(c => {
            if (c.id === clipId) {
              const updatedComments = c.comments.map(cm => cm.id === newCommentObj.id ? { ...cm, id: data[0].id } : cm);
              return { ...c, comments: updatedComments };
            }
            return c;
          });
          this.notify();
        }
      } catch (e) {
        console.error("Unexpected comment insert error:", e);
      }
    }
  }

  // DELETE OWN COMMENT
  async deleteComment(clipId, commentId) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") return;

    this.clips = this.clips.map(c => {
      if (c.id === clipId) {
        return { ...c, comments: c.comments.filter(cm => cm.id !== commentId) };
      }
      return c;
    });
    this.notify();

    if (client && isUuid(commentId)) {
      try {
        await client
          .from('post_comments')
          .delete()
          .eq('id', commentId)
          .eq('user_id', user.id);
      } catch (e) {
        console.error("Error deleting comment:", e);
      }
    }
  }

  // CONNECTIONS SYSTEM
  async fetchUserConnectionsFromSupabase() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!client || !this.isLoggedIn || !user || !user.id || user.id === "guest_user") return;

    try {
      const { data } = await client
        .from('user_connections')
        .select('following_id')
        .eq('follower_id', user.id);

      if (data) {
        this.userConnections = data.map(conn => conn.following_id);
        this.players = this.players.map(p => ({
          ...p,
          connectionState: this.userConnections.includes(p.id) ? 'connected' : 'none'
        }));
        this.notify();
      }
    } catch (e) {
      console.error("Error fetching connections:", e);
    }
  }

  async toggleConnection(targetUserId) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const user = this.currentUser;

    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") {
      alert("⚠️ Authentication Required!\nPlease sign in to connect with players.");
      this.toggleLoginModal(true, 'signin');
      return;
    }

    if (user.id === targetUserId) return;

    const isConnected = this.userConnections.includes(targetUserId);

    if (isConnected) {
      this.userConnections = this.userConnections.filter(id => id !== targetUserId);
    } else {
      this.userConnections.push(targetUserId);
    }

    this.players = this.players.map(p => {
      if (p.id === targetUserId) {
        return { ...p, connectionState: !isConnected ? 'connected' : 'none' };
      }
      return p;
    });
    this.notify();

    if (client && isUuid(targetUserId)) {
      try {
        if (isConnected) {
          await client
            .from('user_connections')
            .delete()
            .eq('follower_id', user.id)
            .eq('following_id', targetUserId);
        } else {
          await client
            .from('user_connections')
            .insert([{ follower_id: user.id, following_id: targetUserId }]);
        }
      } catch (e) {
        console.error("Error toggling user connection:", e);
      }
    }
  }

  // UPLOAD GAMEPLAY VIDEO TO SUPABASE STORAGE ('gameplay-videos')
  async uploadGameplayClip({ file, title, description }) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) {
      alert("⚠️ Supabase Client Not Initialized.");
      return false;
    }

    const user = this.currentUser;
    if (!this.isLoggedIn || !user || !user.id || user.id === "guest_user") {
      alert("⚠️ Authentication Required!\nPlease sign in to upload gameplay videos.");
      this.toggleLoginModal(true, 'signin');
      return false;
    }

    if (!file) return false;

    const isVideo = file.type.startsWith('video/') || file.name.match(/\.(mp4|webm|mov|m4v)$/i);
    const isImage = file.type.startsWith('image/') || file.name.match(/\.(jpg|jpeg|png|webp)$/i);

    if (!isVideo && !isImage) {
      alert("❌ Unsupported File Format!");
      return false;
    }

    const maxBytes = 50 * 1024 * 1024;
    if (file.size > maxBytes) {
      alert(`❌ File Too Large! Maximum limit is 50 MB.`);
      return false;
    }

    this.isUploading = true;
    this.uploadStatusText = "⏳ Uploading file to Supabase Storage bucket 'gameplay-videos'...";
    this.notify();

    try {
      const fileExt = file.name.split('.').pop() || (isVideo ? 'mp4' : 'jpg');
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      const filePath = `${user.id}/${fileName}`;

      const { data: storageData, error: storageError } = await client.storage
        .from('gameplay-videos')
        .upload(filePath, file, { cacheControl: '3600', upsert: false });

      if (storageError) {
        alert("❌ Supabase Storage Upload Error: " + storageError.message);
        this.isUploading = false;
        this.notify();
        return false;
      }

      const { data: { publicUrl } } = client.storage
        .from('gameplay-videos')
        .getPublicUrl(filePath);

      this.uploadStatusText = "⏳ Creating post record in Supabase Database...";
      this.notify();

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

      this.isUploading = false;
      this.uploadStatusText = '';
      this.toggleUploadModal(false);

      await this.fetchFeedClipsFromSupabase();
      alert("🎉 BOOYAH! Gameplay Video Uploaded & Published to Feed!");
      return true;

    } catch (err) {
      alert("❌ Upload Error: Unable to complete upload.");
      this.isUploading = false;
      this.uploadStatusText = '';
      this.notify();
      return false;
    }
  }

  // DYNAMIC ACADEMY CALCULATIONS
  getAcademyStats() {
    let totalLessonsCount = 0;
    let completedCount = 0;

    academyCourses.forEach(course => {
      totalLessonsCount += course.lessons.length;
      course.lessons.forEach(l => {
        if (this.academyProgress.includes(l.id)) {
          completedCount++;
        }
      });
    });

    const overallPercentage = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;
    return { totalLessonsCount, completedCount, overallPercentage };
  }

  getAcademyBadges() {
    const { completedCount } = this.getAcademyStats();

    const hsCourse = academyCourses.find(c => c.id === 'headshot-masterclass');
    const hsCompleted = hsCourse ? hsCourse.lessons.every(l => this.academyProgress.includes(l.id)) : false;

    const gwCourse = academyCourses.find(c => c.id === 'gloo-wall-mastery');
    const gwCompleted = gwCourse ? gwCourse.lessons.every(l => this.academyProgress.includes(l.id)) : false;

    const mvCourse = academyCourses.find(c => c.id === 'movement-techniques');
    const mvCompleted = mvCourse ? mvCourse.lessons.every(l => this.academyProgress.includes(l.id)) : false;

    return [
      { id: 'b_hs_initiate', name: '🎯 HEADSHOT INITIATE', desc: 'Complete 3 headshot lessons', unlocked: completedCount >= 3, icon: '🎯' },
      { id: 'b_aim_spec', name: '🔥 AIM SPECIALIST', desc: 'Complete Headshot Masterclass', unlocked: hsCompleted, icon: '🔥' },
      { id: 'b_gloo_master', name: '🧱 GLOO MASTER', desc: 'Complete Gloo Wall Mastery', unlocked: gwCompleted, icon: '🧱' },
      { id: 'b_movement_king', name: '🏃 MOVEMENT KING', desc: 'Complete Movement Techniques', unlocked: mvCompleted, icon: '🏃' },
      { id: 'b_academy_grad', name: '🏆 ACADEMY GRADUATE', desc: 'Complete 15+ Academy lessons', unlocked: completedCount >= 15, icon: '🏆' }
    ];
  }

  getTodayEarnedCoins() { return 0; }
  addGameHistoryRecord() {}
  awardMiniGameCoins() { return true; }

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
  setAcademyCategoryFilter(cat) { this.academyCategoryFilter = cat; this.notify(); }
  setAcademyDifficultyFilter(diff) { this.academyDifficultyFilter = diff; this.notify(); }
  setActiveAcademyCategory(course) { this.activeAcademyCategory = course; this.activeAcademyLesson = null; this.notify(); }
  setActiveAcademyLesson(lesson) { this.activeAcademyLesson = lesson; this.notify(); }

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

  submitEsportsApplication(appData) { alert("🎉 Application Submitted!"); }
  sendChallenge(challengeData) { alert("⚔️ Challenge Sent!"); }
  sendMessage(targetPlayerId, text) {}
  setActiveChatPlayer(playerId) {}
}

const state = new StateManager();

// NAVBAR RENDERER (SINGLE-ROW CENTERED ESPORTS HEADER)
function renderNavbar() {
  const { activeTab, searchQuery, currentUser, challenges, isLoggedIn } = state;
  const pendingChallengesCount = challenges.filter(c => c.opponentId === currentUser.id && c.status === 'Pending').length;

  return `
    <header class="navbar">
      <div class="navbar-container">
        <!-- BRAND LOGO (LEFT) -->
        <div class="navbar-brand" id="nav-brand">
          <div class="logo-icon">🔥</div>
          <div class="brand-text">
            <span class="brand-title">BOOYAH<span class="brand-highlight">CONNECT</span></span>
          </div>
        </div>

        <!-- CENTERED NAVIGATION TABS (ALL 9 OPTIONS) -->
        <nav class="navbar-tabs">
          <button class="nav-tab ${activeTab === 'feed' ? 'active' : ''}" data-tab="feed" id="nav-home-btn">🏠 Home</button>
          <button class="nav-tab ${activeTab === 'academy' ? 'active' : ''}" data-tab="academy">🎓 Academy</button>
          <button class="nav-tab ${activeTab === 'connect' ? 'active' : ''}" data-tab="connect">Network</button>
          <button class="nav-tab ${activeTab === 'minigames' ? 'active' : ''}" data-tab="minigames">🎮 Mini Games</button>
          <button class="nav-tab ${activeTab === 'challenges' ? 'active' : ''}" data-tab="challenges">
            1v1 Rooms ${pendingChallengesCount > 0 ? `<span class="nav-badge">${pendingChallengesCount}</span>` : ''}
          </button>
          <button class="nav-tab ${activeTab === 'esports' ? 'active' : ''}" data-tab="esports">🏆 Tryouts</button>
          <button class="nav-tab ${activeTab === 'news' ? 'active' : ''}" data-tab="news">🌐 News</button>
          <button class="nav-tab ${activeTab === 'leaderboard' ? 'active' : ''}" data-tab="leaderboard">Leaderboard</button>
          <button class="nav-tab ${activeTab === 'chat' ? 'active' : ''}" data-tab="chat">💬 Chat</button>
        </nav>

        <!-- RIGHT SEARCH & USER ACTIONS -->
        <div class="navbar-user-actions">
          <div class="navbar-search">
            <input type="text" id="global-search-input" placeholder="Search..." value="${searchQuery}" />
            <button class="btn btn-primary btn-sm" id="btn-trigger-search">🔍</button>
          </div>

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

// ACADEMY RENDERER
function renderAcademy() {
  const { academyProgress, activeAcademyCategory, activeAcademyLesson, academyCategoryFilter, academyDifficultyFilter } = state;
  const { totalLessonsCount, completedCount, overallPercentage } = state.getAcademyStats();
  const badges = state.getAcademyBadges();

  if (activeAcademyLesson && activeAcademyCategory) {
    const isCompleted = academyProgress.includes(activeAcademyLesson.id);

    return `
      <div class="academy-container" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
        <button class="btn btn-secondary" id="btn-back-to-course" style="margin-bottom: 20px;">
          ← Back to ${activeAcademyCategory.title}
        </button>

        <div style="background: var(--bg-card); border: 1px solid rgba(255, 85, 0, 0.3); border-radius: 20px; padding: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
            <span style="background: rgba(255, 85, 0, 0.15); color: var(--primary-fire); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 800; border: 1px solid var(--primary-fire);">
              ${activeAcademyCategory.title} • ${activeAcademyLesson.difficulty}
            </span>
            <span style="color: var(--text-muted); font-size: 0.9rem;">⏱️ Duration: ${activeAcademyLesson.duration}</span>
          </div>

          <h1 style="margin: 0 0 12px 0; font-family: var(--font-heading); font-size: 2.2rem;">${activeAcademyLesson.title}</h1>
          <p style="color: var(--text-light); font-size: 1.05rem; margin-bottom: 24px; line-height: 1.6;">${activeAcademyLesson.description}</p>

          <div style="background: #000; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 24px; position: relative;">
            <img src="${activeAcademyLesson.videoUrl}" alt="Tutorial Preview" style="width: 100%; max-height: 420px; object-fit: cover; opacity: 0.85;" />
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; background: rgba(0,0,0,0.75); padding: 20px 30px; border-radius: 16px; border: 1px solid var(--primary-fire);">
              <div style="font-size: 2.5rem; margin-bottom: 6px;">▶️</div>
              <div style="font-weight: 800; color: #FFF; font-size: 1.1rem;">Esports Tutorial Demonstration</div>
              <div style="font-size: 0.85rem; color: var(--amber-gold);">Curated Free Fire Pro Guide</div>
            </div>
          </div>

          <div style="background: var(--dark-surface); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; color: var(--amber-gold); font-size: 1.2rem;">💡 Pro Key Points & Execution Tips:</h3>
            <ul style="margin: 10px 0 0 20px; color: var(--text-main); line-height: 1.8;">
              ${activeAcademyLesson.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>

          <div style="background: rgba(0, 230, 118, 0.08); border: 1px solid rgba(0, 230, 118, 0.3); padding: 20px; border-radius: 16px; margin-bottom: 28px;">
            <h3 style="margin-top: 0; color: #00E676; font-size: 1.2rem;">🎯 Practical Training Challenge:</h3>
            <p style="margin: 8px 0 0 0; color: var(--text-main); font-weight: 600;">"${activeAcademyLesson.practiceTask}"</p>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; background: var(--dark-surface-2); padding: 16px 24px; border-radius: 16px;">
            <span style="font-weight: 700; color: var(--text-light);">Lesson Progress Status:</span>
            <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" data-action="toggle-lesson-complete" data-id="${activeAcademyLesson.id}" style="${isCompleted ? 'background: rgba(0, 230, 118, 0.2); color: #00E676; border: 1px solid #00E676;' : ''}">
              ${isCompleted ? '✓ Completed' : '✓ Mark Lesson Complete'}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  if (activeAcademyCategory) {
    const courseLessons = activeAcademyCategory.lessons;
    const completedCourseLessons = courseLessons.filter(l => academyProgress.includes(l.id)).length;
    const coursePercentage = courseLessons.length > 0 ? Math.round((completedCourseLessons / courseLessons.length) * 100) : 0;

    return `
      <div class="academy-container" style="max-width: 1000px; margin: 0 auto; padding: 20px;">
        <button class="btn btn-secondary" id="btn-back-to-academy" style="margin-bottom: 20px;">
          ← Back to Academy Dashboard
        </button>

        <div style="background: var(--bg-card); border: 1px solid rgba(255, 85, 0, 0.3); border-radius: 20px; padding: 28px; margin-bottom: 28px;">
          <div style="display: flex; gap: 20px; align-items: center;">
            <div style="font-size: 3.5rem;">${activeAcademyCategory.icon}</div>
            <div style="flex: 1;">
              <h1 style="margin: 0; font-family: var(--font-heading); font-size: 2.4rem;">${activeAcademyCategory.title}</h1>
              <p style="color: var(--text-muted); margin: 4px 0 12px 0;">${activeAcademyCategory.description}</p>
              
              <div style="display: flex; align-items: center; gap: 16px;">
                <div style="flex: 1; background: rgba(255,255,255,0.08); height: 10px; border-radius: 5px; overflow: hidden;">
                  <div style="width: ${coursePercentage}%; background: linear-gradient(90deg, var(--primary-fire) 0%, var(--amber-gold) 100%); height: 100%;"></div>
                </div>
                <span style="font-weight: 800; color: var(--amber-gold); font-size: 0.95rem;">${completedCourseLessons} / ${courseLessons.length} Completed (${coursePercentage}%)</span>
              </div>
            </div>
          </div>
        </div>

        <h2 style="margin-bottom: 20px;">📚 Course Lessons (${courseLessons.length})</h2>
        <div style="display: grid; gap: 16px;">
          ${courseLessons.map((lesson, idx) => {
            const isDone = academyProgress.includes(lesson.id);
            return `
              <div class="card" style="background: var(--bg-card); border: 1px solid ${isDone ? 'rgba(0, 230, 118, 0.3)' : 'rgba(255, 255, 255, 0.08)'}; padding: 20px; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;">
                <div style="display: flex; gap: 16px; align-items: center; flex: 1;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: ${isDone ? 'rgba(0, 230, 118, 0.2)' : 'var(--dark-surface-2)'}; color: ${isDone ? '#00E676' : 'var(--amber-gold)'}; display: flex; align-items: center; justify-content: center; font-weight: 800; border: 1px solid ${isDone ? '#00E676' : 'transparent'};">
                    ${isDone ? '✓' : idx + 1}
                  </div>
                  <div>
                    <h3 style="margin: 0; font-size: 1.15rem; color: #FFF;">${lesson.title}</h3>
                    <p style="margin: 4px 0 0 0; color: var(--text-muted); font-size: 0.85rem;">⏱️ ${lesson.duration} • Difficulty: ${lesson.difficulty}</p>
                  </div>
                </div>

                <div style="display: flex; gap: 10px; align-items: center;">
                  <button class="btn btn-primary btn-sm" data-action="open-lesson" data-course-id="${activeAcademyCategory.id}" data-lesson-id="${lesson.id}">
                    ▶ Start Lesson
                  </button>
                  <button class="btn btn-sm ${isDone ? 'btn-secondary' : ''}" data-action="toggle-lesson-complete" data-id="${lesson.id}" style="${isDone ? 'background: rgba(0, 230, 118, 0.2); color: #00E676; border: 1px solid #00E676;' : 'background: var(--dark-surface-2); color: var(--text-light);'}">
                    ${isDone ? '✓ Done' : 'Mark Complete'}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  const filteredCourses = academyCourses.filter(c => {
    const matchesCategory = academyCategoryFilter === 'all' || c.category.toLowerCase() === academyCategoryFilter.toLowerCase();
    const matchesDiff = academyDifficultyFilter === 'all' || c.difficulty.toLowerCase() === academyDifficultyFilter.toLowerCase();
    return matchesCategory && matchesDiff;
  });

  return `
    <div class="academy-container" style="max-width: 1100px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 32px; margin-bottom: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <span style="background: var(--primary-fire); color: #FFF; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">
          🎓 OFFICIAL ESPORTS TRAINING
        </span>
        <h1 style="margin: 12px 0 6px 0; font-family: var(--font-heading); font-size: 2.8rem; letter-spacing: 1px;">BOOYAHCONNECT ACADEMY</h1>
        <p style="color: var(--amber-gold); font-size: 1.15rem; font-weight: 600; margin: 0 0 20px 0;">"Train smarter. Play better. Get the Booyah."</p>

        <div style="background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 20px; max-width: 600px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 800; font-size: 0.9rem;">
            <span>Overall Academy Training Progress</span>
            <span style="color: var(--amber-gold);">${completedCount} / ${totalLessonsCount} Lessons (${overallPercentage}%)</span>
          </div>
          <div style="background: rgba(255,255,255,0.1); height: 12px; border-radius: 6px; overflow: hidden;">
            <div style="width: ${overallPercentage}%; background: linear-gradient(90deg, #FF5500 0%, #00E676 100%); height: 100%; transition: width 0.3s ease;"></div>
          </div>
        </div>
      </div>

      <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 20px; margin-bottom: 28px;">
        <h3 style="margin-top: 0; margin-bottom: 14px; font-size: 1.1rem; color: var(--amber-gold);">🏆 Unlocked Badges & Achievements (${badges.filter(b => b.unlocked).length} / ${badges.length})</h3>
        <div style="display: flex; gap: 14px; flex-wrap: wrap;">
          ${badges.map(b => `
            <div style="background: ${b.unlocked ? 'rgba(0, 230, 118, 0.12)' : 'rgba(255, 255, 255, 0.03)'}; border: 1px solid ${b.unlocked ? '#00E676' : 'rgba(255, 255, 255, 0.1)'}; padding: 10px 16px; border-radius: 12px; display: flex; align-items: center; gap: 10px; opacity: ${b.unlocked ? '1' : '0.55'};">
              <span style="font-size: 1.4rem;">${b.icon}</span>
              <div>
                <div style="font-weight: 800; font-size: 0.85rem; color: ${b.unlocked ? '#00E676' : 'var(--text-muted)'};">${b.name}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">${b.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; background: var(--bg-card); padding: 16px 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08);">
        <h2 style="margin: 0; font-size: 1.4rem;">Training Masterclasses (${filteredCourses.length})</h2>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <select id="select-academy-category" class="filter-select" style="padding: 8px 12px; border-radius: 8px; background: var(--dark-surface); border: 1px solid rgba(255,255,255,0.1); color: #FFF;">
            <option value="all" ${academyCategoryFilter === 'all' ? 'selected' : ''}>All Skill Categories</option>
            <option value="Aim" ${academyCategoryFilter === 'Aim' ? 'selected' : ''}>🎯 Aim & Sniping</option>
            <option value="Movement" ${academyCategoryFilter === 'Movement' ? 'selected' : ''}>🏃 Movement</option>
            <option value="Combat" ${academyCategoryFilter === 'Combat' ? 'selected' : ''}>⚡ Combat & Gloo Wall</option>
            <option value="Strategy" ${academyCategoryFilter === 'Strategy' ? 'selected' : ''}>🧠 Strategy & Positioning</option>
          </select>

          <select id="select-academy-difficulty" class="filter-select" style="padding: 8px 12px; border-radius: 8px; background: var(--dark-surface); border: 1px solid rgba(255,255,255,0.1); color: #FFF;">
            <option value="all" ${academyDifficultyFilter === 'all' ? 'selected' : ''}>All Difficulties</option>
            <option value="Beginner" ${academyDifficultyFilter === 'Beginner' ? 'selected' : ''}>Beginner</option>
            <option value="Intermediate" ${academyDifficultyFilter === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
            <option value="Advanced" ${academyDifficultyFilter === 'Advanced' ? 'selected' : ''}>Advanced</option>
          </select>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
        ${filteredCourses.map(course => {
          const completedLessons = course.lessons.filter(l => academyProgress.includes(l.id)).length;
          const coursePercentage = course.lessons.length > 0 ? Math.round((completedLessons / course.lessons.length) * 100) : 0;

          return `
            <div class="card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s ease, border-color 0.2s ease;" onmouseenter="this.style.borderColor='var(--primary-fire)';" onmouseleave="this.style.borderColor='rgba(255, 255, 255, 0.08)';">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                  <span style="font-size: 2.8rem;">${course.icon}</span>
                  <span style="background: var(--dark-surface-2); color: var(--amber-gold); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 700;">${course.difficulty}</span>
                </div>
                <h3 style="margin: 0 0 8px 0; font-family: var(--font-heading); font-size: 1.6rem; color: #FFF;">${course.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px;">${course.description}</p>
              </div>

              <div>
                <div style="margin-bottom: 16px;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px;">
                    <span>${course.lessons.length} Lessons</span>
                    <span style="color: var(--amber-gold); font-weight: 700;">${completedLessons}/${course.lessons.length} (${coursePercentage}%)</span>
                  </div>
                  <div style="background: rgba(255,255,255,0.08); height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="width: ${coursePercentage}%; background: linear-gradient(90deg, var(--primary-fire) 0%, #00E676 100%); height: 100%;"></div>
                  </div>
                </div>

                <button class="btn btn-primary" data-action="select-course" data-id="${course.id}" style="width: 100%; justify-content: center;">
                  🚀 Start Training
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// FEED RENDERER
function renderFeed() {
  const { clips, searchQuery, clipTagFilter, isClipsLoading, clipsError, currentUser, isLoggedIn } = state;

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
        <h2>Community Gameplay Videos (${filteredClips.length})</h2>
        <div class="feed-tags-quick">
          ${availableTags.map(tag => `
            <span class="tag-pill ${clipTagFilter === tag ? 'active' : ''}" data-action="filter-clip-tag" data-tag="${tag}">${tag}</span>
          `).join('')}
        </div>
      </div>

      ${isClipsLoading ? `
        <div style="text-align: center; padding: 40px; background: var(--bg-card); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-size: 2rem; margin-bottom: 8px;">⏳</div>
          <h3 style="margin: 0; color: var(--amber-gold);">Loading Feed Posts from Supabase...</h3>
        </div>
      ` : ''}

      ${clipsError ? `
        <div style="background: rgba(255, 82, 82, 0.15); border: 1px solid #FF5252; padding: 20px; border-radius: 16px; text-align: center; margin-bottom: 24px;">
          <h3 style="color: #FF5252; margin: 0 0 8px 0;">⚠️ Supabase Feed Info</h3>
          <p style="margin: 0 0 12px 0; color: var(--text-light);">${clipsError}</p>
          <button class="btn btn-primary btn-sm" id="btn-retry-feed">🔄 Retry Loading Feed</button>
        </div>
      ` : ''}

      ${!isClipsLoading && filteredClips.length === 0 ? `
        <div style="text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🎬</div>
          <h3 style="margin: 0 0 8px 0;">No Gameplay Videos Found</h3>
          <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 20px auto;">Be the first player to upload a 1v4 clutch or AWM headshot highlight to Supabase Storage!</p>
          <button class="btn btn-primary" id="btn-upload-clip-empty">+ Upload Gameplay Video</button>
        </div>
      ` : ''}

      ${!isClipsLoading && filteredClips.length > 0 ? `
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
                  <button class="action-btn ${clip.isLiked ? 'liked' : ''}" data-action="like" data-id="${clip.id}" style="${clip.isLiked ? 'color: #FF5252; font-weight: 800;' : ''}">
                    ${clip.isLiked ? '❤️' : '🤍'} ${clip.likes} Likes
                  </button>
                  <button class="action-btn" data-action="toggle-comments" data-id="${clip.id}">
                    💬 ${clip.comments.length} Comments
                  </button>

                  ${isLoggedIn && clip.authorId === currentUser.id ? `
                    <button class="action-btn btn-delete-post" data-action="delete-post" data-id="${clip.id}" style="color: #FF5252; margin-left: auto;" title="Delete Post & Video">
                      🗑️ Delete
                    </button>
                  ` : ''}
                </div>

                <div class="comment-section" id="comments-${clip.id}">
                  <div class="comments-list">
                    ${clip.comments.map(c => `
                      <div class="comment-item" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <div style="display: flex; gap: 10px; align-items: flex-start;">
                          <img src="${c.authorAvatar}" alt="Commenter" class="comment-avatar" style="width: 28px; height: 28px; border-radius: 50%;" />
                          <div>
                            <strong>${c.authorIgn}</strong>: ${c.text}
                            <div style="font-size: 0.7rem; color: var(--text-muted);">${c.time}</div>
                          </div>
                        </div>

                        ${isLoggedIn && (c.authorId === currentUser.id || currentUser.id === clip.authorId) ? `
                          <button class="btn btn-sm" data-action="delete-comment" data-clip-id="${clip.id}" data-comment-id="${c.id}" style="background: transparent; color: #FF5252; padding: 0 4px; font-size: 0.75rem;" title="Delete Comment">
                            🗑️
                          </button>
                        ` : ''}
                      </div>
                    `).join('')}
                  </div>

                  <div class="add-comment-form" style="display: flex; gap: 8px; margin-top: 10px;">
                    <input type="text" placeholder="Write a comment (max 500 chars)..." class="comment-input" id="input-comment-${clip.id}" style="flex: 1; padding: 8px 12px; border-radius: 8px; background: var(--dark-surface); border: 1px solid rgba(255,255,255,0.1); color: #FFF;" />
                    <button class="btn btn-primary btn-sm send-comment-btn" data-clip-id="${clip.id}">Post</button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// CONNECTIONS RENDERER
function renderConnections() {
  const { players, searchQuery, roleFilter, stateFilter, skillFilter, currentUser, isLoggedIn, userConnections } = state;

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
        ${filteredPlayers.map(player => {
          const isConnected = userConnections.includes(player.id) || player.connectionState === 'connected';
          const isSelf = isLoggedIn && currentUser.id === player.id;

          return `
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
                  ${isSelf ? `
                    <button class="btn btn-secondary" style="width: 100%; justify-content: center;" disabled>👤 You (Self)</button>
                  ` : `
                    <button class="btn btn-connect ${isConnected ? 'connected' : ''}" data-action="toggle-connect" data-id="${player.id}">
                      ${isConnected ? '✓ Connected' : '+ Connect'}
                    </button>
                    <button class="btn btn-primary" data-action="view-full-profile" data-id="${player.id}">
                      🔍 View Profile
                    </button>
                  `}
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderFullPlayerProfile() {
  const { viewedPlayer, players, currentUser, isLoggedIn, userConnections, clips } = state;
  const player = viewedPlayer || players[0];
  const isConnected = userConnections.includes(player.id) || player.connectionState === 'connected';
  const isSelf = isLoggedIn && currentUser.id === player.id;
  const playerClips = clips.filter(c => c.authorId === player.id);

  return `
    <div class="profile-page-container" style="max-width: 1100px; margin: 0 auto; padding: 20px;">
      <button class="btn btn-secondary" id="btn-back-to-network" style="margin-bottom: 16px;">
        ← Back to Network
      </button>

      <div class="profile-banner-card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 28px; margin-bottom: 24px;">
        <div class="profile-header-main" style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
          <img src="${player.avatar}" class="profile-large-avatar" style="width: 110px; height: 110px; border-radius: 50%; border: 4px solid var(--primary-fire);" />
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
              <h1 style="margin: 0; font-size: 2rem; font-family: var(--font-heading);">${player.ign}</h1>
              <span class="rank-badge-pill grandmaster">${player.rank} ⭐${player.rankStars}</span>
            </div>
            <p style="margin: 6px 0; color: var(--amber-gold); font-weight: 700;">UID: <strong>${player.uid}</strong> | 📍 ${player.city || ''}, ${player.state} | Guild: ${player.guild || 'N/A'}</p>
            <p style="margin: 4px 0 16px 0; color: var(--text-light); font-size: 0.95rem;">${player.bio}</p>

            <div style="display: flex; gap: 10px;">
              ${isSelf ? `
                <button class="btn btn-secondary" disabled>👤 Your Profile</button>
              ` : `
                <button class="btn btn-connect ${isConnected ? 'connected' : ''}" data-action="toggle-connect" data-id="${player.id}">
                  ${isConnected ? '✓ Connected' : '+ Connect'}
                </button>
                <button class="btn btn-primary" data-action="select-chat-player" data-id="${player.id}">💬 Direct Message</button>
              `}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProfile() {
  const { currentUser, isLoggedIn, userConnections, clips } = state;
  const { totalLessonsCount, completedCount, overallPercentage } = state.getAcademyStats();
  const badges = state.getAcademyBadges();
  const myClips = clips.filter(c => c.authorId === currentUser.id);
  const totalLikesReceived = myClips.reduce((acc, c) => acc + c.likes, 0);

  return `
    <div class="profile-page-container" style="max-width: 1100px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 32px; margin-bottom: 24px; display: flex; gap: 28px; align-items: center; flex-wrap: wrap; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
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

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 28px;">
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">My Gameplay Clips</div>
          <div style="font-size: 2rem; font-weight: 800; color: var(--primary-fire); margin-top: 4px;">🎬 ${myClips.length}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Total Likes Received</div>
          <div style="font-size: 2rem; font-weight: 800; color: #FF5252; margin-top: 4px;">❤️ ${totalLikesReceived}</div>
        </div>
        <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); padding: 20px; border-radius: 16px; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Connections</div>
          <div style="font-size: 2rem; font-weight: 800; color: #00E676; margin-top: 4px;">👥 ${userConnections.length}</div>
        </div>
      </div>

      <div style="background: var(--bg-card); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
          <h2 style="margin: 0; font-size: 1.4rem;">🎓 Academy Training Progress</h2>
          <button class="btn btn-primary btn-sm" id="btn-profile-open-academy">Go to Academy Dashboard ➔</button>
        </div>

        <div style="margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.9rem; margin-bottom: 6px;">
            <span>Completed Lessons: ${completedCount} / ${totalLessonsCount}</span>
            <span style="color: var(--amber-gold);">${overallPercentage}% Overall Mastery</span>
          </div>
          <div style="background: rgba(255,255,255,0.08); height: 10px; border-radius: 5px; overflow: hidden;">
            <div style="width: ${overallPercentage}%; background: linear-gradient(90deg, #FF5500 0%, #00E676 100%); height: 100%;"></div>
          </div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          ${badges.map(b => `
            <span style="background: ${b.unlocked ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 255, 255, 0.05)'}; color: ${b.unlocked ? '#00E676' : 'var(--text-muted)'}; padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; font-weight: 700; border: 1px solid ${b.unlocked ? '#00E676' : 'transparent'};">
              ${b.icon} ${b.name} ${b.unlocked ? '✓' : '🔒'}
            </span>
          `).join('')}
        </div>
      </div>

      <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 24px; margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="margin: 0;">🎬 My Uploaded Gameplay Videos (${myClips.length})</h2>
          <button class="btn btn-primary btn-sm" id="btn-profile-upload">+ Upload New Clip</button>
        </div>

        ${myClips.length === 0 ? `
          <div style="text-align: center; padding: 40px 20px;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">📹</div>
            <p style="color: var(--text-muted); margin: 0 0 16px 0;">You haven't uploaded any gameplay videos yet.</p>
            <button class="btn btn-primary" id="btn-profile-upload-empty">+ Upload Your First Clip</button>
          </div>
        ` : `
          <div class="clips-grid">
            ${myClips.map(clip => `
              <div class="clip-card">
                <div class="clip-media-box">
                  ${clip.mediaType === 'video' ? `
                    <video src="${clip.mediaUrl}" controls preload="metadata" class="clip-media-video"></video>
                  ` : `
                    <img src="${clip.mediaUrl}" alt="${clip.title}" class="clip-media-img" />
                  `}
                </div>

                <div class="clip-card-body">
                  <h3 class="clip-title">${clip.title}</h3>
                  <p class="clip-desc">${clip.description}</p>
                  <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 12px;">Uploaded: ${clip.createdAt}</div>

                  <div class="clip-actions">
                    <button class="action-btn ${clip.isLiked ? 'liked' : ''}" data-action="like" data-id="${clip.id}">
                      ${clip.isLiked ? '❤️' : '🤍'} ${clip.likes} Likes
                    </button>
                    <button class="action-btn" data-action="toggle-comments" data-id="${clip.id}">
                      💬 ${clip.comments.length} Comments
                    </button>
                    <button class="action-btn btn-delete-post" data-action="delete-post" data-id="${clip.id}" style="color: #FF5252; margin-left: auto;">
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

// NAVBAR RENDERER (PROFILE ON LEFT, TABS CENTER, SEARCH/AUTH RIGHT)
function renderNavbar() {
  const { activeTab, searchQuery, currentUser, challenges, isLoggedIn } = state;
  const pendingChallengesCount = challenges.filter(c => c.opponentId === currentUser.id && c.status === 'Pending').length;

  return `
    <header class="navbar">
      <div class="navbar-container">
        <!-- USER PROFILE BUTTON (FAR LEFT) -->
        <button class="nav-profile-btn ${activeTab === 'profile' ? 'active' : ''}" data-tab="profile" style="flex-shrink: 0;">
          <img src="${currentUser.avatar}" alt="Avatar" class="user-avatar-tiny" />
          <span class="user-ign-mini" style="font-weight: 800; font-size: 0.9rem; color: #FFF;">${currentUser.ign.split(' ')[1] || currentUser.ign}</span>
        </button>

        <!-- CENTERED NAVIGATION TABS -->
        <nav class="navbar-tabs">
          <button class="nav-tab ${activeTab === 'feed' ? 'active' : ''}" data-tab="feed" id="nav-home-btn">🏠 Home</button>
          <button class="nav-tab ${activeTab === 'academy' ? 'active' : ''}" data-tab="academy">🎓 Academy</button>
          <button class="nav-tab ${activeTab === 'connect' ? 'active' : ''}" data-tab="connect">Network</button>
          <button class="nav-tab ${activeTab === 'minigames' ? 'active' : ''}" data-tab="minigames">🎮 Mini Games</button>
          <button class="nav-tab ${activeTab === 'challenges' ? 'active' : ''}" data-tab="challenges">
            ⚔️ 1v1 Rooms ${pendingChallengesCount > 0 ? `<span class="nav-badge">${pendingChallengesCount}</span>` : ''}
          </button>
          <button class="nav-tab ${activeTab === 'esports' ? 'active' : ''}" data-tab="esports">🏆 Tryouts</button>
          <button class="nav-tab ${activeTab === 'news' ? 'active' : ''}" data-tab="news">🌐 News</button>
          <button class="nav-tab ${activeTab === 'leaderboard' ? 'active' : ''}" data-tab="leaderboard">Leaderboard</button>
          <button class="nav-tab ${activeTab === 'chat' ? 'active' : ''}" data-tab="chat">💬 Chat</button>
        </nav>

        <!-- RIGHT SEARCH & USER ACTIONS -->
        <div class="navbar-user-actions">
          <div class="navbar-search">
            <input type="text" id="global-search-input" placeholder="Search..." value="${searchQuery}" />
            <button class="btn btn-primary btn-sm" id="btn-trigger-search">🔍</button>
          </div>

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
        </div>
      </div>
    </header>
  `;
}

// 1v1 ROOMS PAGE RENDERER
function renderChallenges() {
  const { challenges, challengeFilter, currentUser, isLoggedIn } = state;
  const filteredRooms = challenges.filter(r => challengeFilter === 'All' || r.status === challengeFilter);

  return `
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 28px; margin-bottom: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span style="background: var(--primary-fire); color: #FFF; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">
            ⚔️ CUSTOM 1v1 ARENA
          </span>
          <h1 style="margin: 10px 0 4px 0; font-family: var(--font-heading); font-size: 2.5rem;">CUSTOM 1v1 ROOM CHALLENGES</h1>
          <p style="color: var(--amber-gold); margin: 0; font-weight: 600;">Challenge Grandmaster players in CS 1v1, Sniper AWM, or Desert Eagle 1-Tap rooms!</p>
        </div>
        <button class="btn btn-primary" id="btn-open-create-room">+ Create Custom 1v1 Room</button>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; background: var(--bg-card); padding: 16px 20px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.08);">
        <h2 style="margin: 0; font-size: 1.4rem;">Available 1v1 Rooms (${filteredRooms.length})</h2>
        <div style="display: flex; gap: 8px;">
          ${['All', 'Open', 'Waiting', 'In Match'].map(f => `
            <button class="btn btn-sm ${challengeFilter === f ? 'btn-primary' : 'btn-secondary'}" data-action="filter-rooms" data-filter="${f}">${f}</button>
          `).join('')}
        </div>
      </div>

      ${filteredRooms.length === 0 ? `
        <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">⚔️</div>
          <h3 style="margin: 0 0 8px 0; font-size: 1.5rem;">No active 1v1 rooms right now.</h3>
          <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto 24px auto;">Host your custom room, set coin entry fees, and challenge Grandmaster players across India!</p>
          <button class="btn btn-primary" id="btn-create-room-empty">+ Create 1v1 Room</button>
        </div>
      ` : `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;">
          ${filteredRooms.map(room => `
            <div class="card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                  <span style="background: ${room.status === 'Open' ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 183, 0, 0.15)'}; color: ${room.status === 'Open' ? '#00E676' : 'var(--amber-gold)'}; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; border: 1px solid ${room.status === 'Open' ? '#00E676' : 'var(--amber-gold)'};">
                    ${room.status === 'Open' ? '🟢 Open' : '⚔️ ' + room.status}
                  </span>
                  <span style="color: var(--amber-gold); font-weight: 800; font-size: 0.9rem;">🪙 ${room.entryFee || 100} Coins</span>
                </div>

                <h3 style="margin: 0 0 8px 0; font-size: 1.4rem; color: #FFF;">${room.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px;">Game Mode: <strong style="color: var(--primary-fire);">${room.gameMode || 'CS 1v1 M1887'}</strong></p>

                <div style="display: flex; gap: 12px; align-items: center; background: var(--dark-surface); padding: 12px; border-radius: 12px; margin-bottom: 20px;">
                  <img src="${room.hostAvatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=Host'}" style="width: 42px; height: 42px; border-radius: 50%; border: 2px solid var(--primary-fire);" />
                  <div>
                    <div style="font-weight: 800; color: #FFF;">Host: ${room.hostIgn || 'Pro Gamer'}</div>
                    <div style="font-size: 0.78rem; color: var(--text-muted);">UID: ${room.hostUid || '104928101'} • Slots: ${room.playersCount || '1'}/2</div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary" data-action="join-room" data-id="${room.id}" style="width: 100%; justify-content: center;">
                ⚔️ Join 1v1 Match
              </button>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

// MINI GAMES ARENA RENDERER
function renderMiniGames() {
  const { currentUser } = state;

  const miniGamesList = [
    { id: 'aim_trainer', title: '🎯 Headshot Reflex Aim Trainer', desc: 'Click moving headshot targets within 15 seconds to test your aim reaction speed!', diff: 'Advanced', reward: '500 Coins', status: 'Playable' },
    { id: 'gloo_speed', title: '🧱 Gloo Wall Speed Test', desc: 'Test your 1-second reflex Gloo Wall placement response time.', diff: 'Intermediate', reward: '300 Coins', status: 'Playable' },
    { id: 'ff_quiz', title: '🧠 Free Fire Esports IQ Quiz', desc: 'Test your tactical game sense, weapon stats, and FFWS tournament knowledge.', diff: 'Beginner', reward: '200 Coins', status: 'Coming Soon' }
  ];

  return `
    <div style="max-width: 1100px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 28px; margin-bottom: 28px;">
        <span style="background: var(--primary-fire); color: #FFF; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">
          🎮 MINI GAMES ARENA
        </span>
        <h1 style="margin: 10px 0 4px 0; font-family: var(--font-heading); font-size: 2.5rem;">PRACTICE & EARN COINS</h1>
        <p style="color: var(--amber-gold); margin: 0; font-weight: 600;">Play aim reflection mini-games and earn coins for your profile!</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
        ${miniGamesList.map(game => `
          <div class="card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <span style="background: var(--dark-surface-2); color: var(--amber-gold); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 700;">${game.diff}</span>
                <span style="color: #00E676; font-weight: 800; font-size: 0.85rem;">🎁 ${game.reward}</span>
              </div>

              <h3 style="margin: 0 0 8px 0; font-size: 1.4rem; color: #FFF;">${game.title}</h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px;">${game.desc}</p>
            </div>

            <button class="btn ${game.status === 'Playable' ? 'btn-primary' : 'btn-secondary'}" data-action="play-minigame" data-id="${game.id}" style="width: 100%; justify-content: center;" ${game.status !== 'Playable' ? 'disabled' : ''}>
              ${game.status === 'Playable' ? '🎮 Play Now & Earn Coins' : '🔒 Coming Soon'}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ESPORTS TRYOUTS RENDERER
function renderEsports() {
  const { esportsListings } = state;

  return `
    <div style="max-width: 1100px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 28px; margin-bottom: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div>
          <span style="background: var(--primary-fire); color: #FFF; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">
            🏆 ESPORTS TRYOUTS & RECRUITMENT
          </span>
          <h1 style="margin: 10px 0 4px 0; font-family: var(--font-heading); font-size: 2.5rem;">SQUAD TRYOUTS & RECRUITMENT</h1>
          <p style="color: var(--amber-gold); margin: 0; font-weight: 600;">Join verified esports rosters for FFWS Qualifiers & Grandmaster Tournaments!</p>
        </div>
        <button class="btn btn-primary" id="btn-open-tryout-modal">+ Post Tryout Listing</button>
      </div>

      ${esportsListings.length === 0 ? `
        <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🏆</div>
          <h3 style="margin: 0 0 8px 0; font-size: 1.5rem;">No upcoming tryouts available.</h3>
          <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto 24px auto;">Post your team recruitment listing or check back later for FFWS squad tryouts!</p>
          <button class="btn btn-primary" id="btn-empty-tryout">+ Post Tryout Listing</button>
        </div>
      ` : `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px;">
          ${esportsListings.map(listing => `
            <div class="card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                  <span style="background: rgba(0, 230, 118, 0.15); color: #00E676; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; border: 1px solid #00E676;">
                    🟢 ${listing.status || 'Open Registration'}
                  </span>
                  <span style="color: var(--amber-gold); font-weight: 800; font-size: 0.85rem;">🏆 ${listing.prizePool || 'Rs. 25,000 Prize'}</span>
                </div>

                <h3 style="margin: 0 0 6px 0; font-size: 1.4rem; color: #FFF;">${listing.teamName}</h3>
                <p style="color: var(--amber-gold); font-weight: 700; font-size: 0.95rem; margin-bottom: 12px;">${listing.tournamentTitle}</p>

                <div style="background: var(--dark-surface); padding: 12px; border-radius: 12px; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px; line-height: 1.6;">
                  <div>🎮 Game Mode: <strong style="color:#FFF;">${listing.gameMode || 'Squad BR Ranked'}</strong></div>
                  <div>📅 Date & Time: <strong style="color:#FFF;">${listing.dateTime || 'Tomorrow 8:00 PM'}</strong></div>
                  <div>👥 Slots Registered: <strong style="color: var(--primary-fire);">${listing.slots || '12/16 Squads'}</strong></div>
                </div>
              </div>

              <button class="btn btn-primary" data-action="apply-tryout" data-id="${listing.id}" style="width: 100%; justify-content: center;">
                📝 Apply for Tryout
              </button>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

// NEWS HUB RENDERER
function renderNews() {
  const { news, newsCategoryFilter } = state;
  const filteredNews = news.filter(n => newsCategoryFilter === 'All Articles' || n.category === newsCategoryFilter);

  return `
    <div style="max-width: 1100px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 28px; margin-bottom: 28px;">
        <span style="background: var(--primary-fire); color: #FFF; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">
          🌐 ESPORTS & FREE FIRE NEWS HUB
        </span>
        <h1 style="margin: 10px 0 4px 0; font-family: var(--font-heading); font-size: 2.5rem;">OFFICIAL ESPORTS NEWS & UPDATES</h1>
        <p style="color: var(--amber-gold); margin: 0; font-weight: 600;">Stay updated on FFWS Tournaments, Patch Notes, and BooyahConnect Announcements!</p>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        ${['All Articles', '🔥 Gaming', '🏆 Tournaments', '🎮 Free Fire', '📢 BooyahConnect'].map(cat => `
          <button class="btn btn-sm ${newsCategoryFilter === cat ? 'btn-primary' : 'btn-secondary'}" data-action="filter-news" data-category="${cat}">${cat}</button>
        `).join('')}
      </div>

      ${filteredNews.length === 0 ? `
        <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="font-size: 3.5rem; margin-bottom: 12px;">🌐</div>
          <h3 style="margin: 0 0 8px 0; font-size: 1.5rem;">No news articles available yet.</h3>
          <p style="color: var(--text-muted);">Check back soon for latest Free Fire news and tournament updates!</p>
        </div>
      ` : `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
          ${filteredNews.map(article => `
            <div class="card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <img src="${article.image || 'assets/ff_banner.jpg'}" style="width: 100%; height: 180px; object-fit: cover;" />
                <div style="padding: 20px;">
                  <span style="background: rgba(255, 85, 0, 0.15); color: var(--primary-fire); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 800;">
                    ${article.category}
                  </span>
                  <h3 style="margin: 10px 0 8px 0; font-size: 1.3rem; color: #FFF;">${article.title}</h3>
                  <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.5; margin-bottom: 16px;">${article.excerpt}</p>
                </div>
              </div>

              <div style="padding: 0 20px 20px 20px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.78rem; color: var(--text-muted);">${article.publishedDate || 'Today'}</span>
                <button class="btn btn-primary btn-sm" data-action="read-news" data-id="${article.id}">Read Article ➔</button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

// LEADERBOARD RENDERER
function renderLeaderboard() {
  const { players } = state;
  const sortedPlayers = [...players].sort((a, b) => b.rankStars - a.rankStars);

  return `
    <div style="max-width: 1100px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, rgba(255, 85, 0, 0.25) 0%, rgba(18, 22, 29, 0.95) 100%); border: 1px solid rgba(255, 183, 0, 0.3); border-radius: 20px; padding: 28px; margin-bottom: 28px;">
        <span style="background: var(--primary-fire); color: #FFF; padding: 4px 12px; border-radius: 12px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">
          📊 OFFICIAL GRANDMASTER LEADERBOARD
        </span>
        <h1 style="margin: 10px 0 4px 0; font-family: var(--font-heading); font-size: 2.5rem;">TOP FREE FIRE PRO GAMERS</h1>
        <p style="color: var(--amber-gold); margin: 0; font-weight: 600;">Rankings based on Grandmaster Stars, Win Rate, and Headshot Percentage!</p>
      </div>

      <!-- TOP 3 PODIUM CARDS -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;">
        ${sortedPlayers.slice(0, 3).map((p, idx) => {
          const podiumIcons = ['🥇 #1 TOP PLAYER', '🥈 #2 RUNNER UP', '🥉 #3 THIRD PLACE'];
          const borders = ['#FFD700', '#C0C0C0', '#CD7F32'];
          return `
            <div style="background: var(--bg-card); border: 2px solid ${borders[idx]}; border-radius: 20px; padding: 24px; text-align: center; box-shadow: 0 0 25px rgba(0,0,0,0.5);">
              <div style="font-weight: 800; color: ${borders[idx]}; font-size: 0.9rem; margin-bottom: 12px;">${podiumIcons[idx]}</div>
              <img src="${p.avatar}" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid ${borders[idx]}; margin-bottom: 12px;" />
              <h3 style="margin: 0; font-size: 1.3rem;">${p.ign}</h3>
              <div style="color: var(--amber-gold); font-size: 0.85rem; margin: 4px 0 12px 0;">UID: ${p.uid} • ${p.state}</div>
              <span class="rank-badge-pill grandmaster">${p.rank} ⭐${p.rankStars}</span>
            </div>
          `;
        }).join('')}
      </div>

      <!-- RANKINGS TABLE -->
      <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background: var(--dark-surface); border-bottom: 1px solid rgba(255,255,255,0.08); color: var(--amber-gold); font-size: 0.85rem;">
              <th style="padding: 16px;">Rank</th>
              <th style="padding: 16px;">Player</th>
              <th style="padding: 16px;">UID</th>
              <th style="padding: 16px;">Tier</th>
              <th style="padding: 16px;">K/D Ratio</th>
              <th style="padding: 16px;">HS %</th>
              <th style="padding: 16px;">Win Rate</th>
            </tr>
          </thead>
          <tbody>
            ${sortedPlayers.map((p, idx) => `
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <td style="padding: 16px; font-weight: 800; color: ${idx === 0 ? '#FFD700' : idx === 1 ? '#C0C0C0' : idx === 2 ? '#CD7F32' : 'var(--text-muted)'};">#${idx + 1}</td>
                <td style="padding: 16px; display: flex; align-items: center; gap: 12px;">
                  <img src="${p.avatar}" style="width: 36px; height: 36px; border-radius: 50%;" />
                  <strong>${p.ign}</strong>
                </td>
                <td style="padding: 16px; color: var(--text-muted);">${p.uid}</td>
                <td style="padding: 16px;"><span class="rank-badge-pill grandmaster">${p.rank} ⭐${p.rankStars}</span></td>
                <td style="padding: 16px; font-weight: 700; color: var(--primary-fire);">${p.kdRatio}</td>
                <td style="padding: 16px; color: var(--amber-gold);">${p.headshotRate}</td>
                <td style="padding: 16px; color: #00E676; font-weight: 700;">${p.winRate}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// PLAYER CHAT RENDERER
function renderChat() {
  const { players, activeChatPlayerId, messages, currentUser } = state;
  const activePlayer = players.find(p => p.id === activeChatPlayerId) || players[0];
  const chatMessages = messages.filter(m => (m.senderId === currentUser.id && m.receiverId === activePlayer.id) || (m.senderId === activePlayer.id && m.receiverId === currentUser.id));

  return `
    <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
      <div style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; overflow: hidden; display: grid; grid-template-columns: 300px 1fr; min-height: 600px;">
        
        <!-- LEFT CONVERSATIONS PANE -->
        <div style="background: var(--dark-surface); border-right: 1px solid rgba(255, 255, 255, 0.08); padding: 20px;">
          <h3 style="margin-top: 0; font-size: 1.2rem; color: var(--amber-gold);">💬 Conversations</h3>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 16px;">
            ${players.map(p => `
              <div data-action="select-chat-player" data-id="${p.id}" style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 12px; cursor: pointer; background: ${p.id === activePlayer.id ? 'rgba(255, 85, 0, 0.15)' : 'transparent'}; border: 1px solid ${p.id === activePlayer.id ? 'var(--primary-fire)' : 'transparent'};">
                <div style="position: relative;">
                  <img src="${p.avatar}" style="width: 40px; height: 40px; border-radius: 50%;" />
                  <span style="position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #00E676; border-radius: 50%; border: 2px solid var(--dark-surface);"></span>
                </div>
                <div>
                  <div style="font-weight: 700; color: #FFF; font-size: 0.9rem;">${p.ign}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${p.role}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- RIGHT CHAT MESSAGES PANE -->
        <div style="display: flex; flex-direction: column; justify-content: space-between; background: var(--bg-card);">
          <div style="padding: 16px 24px; background: var(--dark-surface); border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; gap: 12px;">
            <img src="${activePlayer.avatar}" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid var(--primary-fire);" />
            <div>
              <div style="font-weight: 800; font-size: 1.1rem; color: #FFF;">${activePlayer.ign}</div>
              <div style="font-size: 0.8rem; color: #00E676;">🟢 Online • Free Fire Grandmaster</div>
            </div>
          </div>

          <div style="padding: 24px; flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 16px;">
            ${chatMessages.length === 0 ? `
              <div style="text-align: center; margin: auto; color: var(--text-muted);">
                <div style="font-size: 2.5rem; margin-bottom: 8px;">💬</div>
                <div>No messages in this chat yet. Say hi to ${activePlayer.ign}!</div>
              </div>
            ` : `
              ${chatMessages.map(msg => `
                <div style="align-self: ${msg.senderId === currentUser.id ? 'flex-end' : 'flex-start'}; max-width: 70%; background: ${msg.senderId === currentUser.id ? 'linear-gradient(135deg, #FF5500 0%, #FF3300 100%)' : 'var(--dark-surface-2)'}; color: #FFF; padding: 12px 16px; border-radius: 16px;">
                  <div style="font-size: 0.9rem;">${msg.text}</div>
                  <div style="font-size: 0.7rem; opacity: 0.7; text-align: right; margin-top: 4px;">${msg.time || 'Just now'}</div>
                </div>
              `).join('')}
            `}
          </div>

          <div style="padding: 16px; background: var(--dark-surface); border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; gap: 12px;">
            <input type="text" id="input-chat-message" placeholder="Type a message to ${activePlayer.ign}..." style="flex: 1; padding: 10px 16px; border-radius: 12px; background: var(--bg-card); border: 1px solid rgba(255,255,255,0.1); color: #FFF;" />
            <button class="btn btn-primary" id="btn-send-chat-msg">🚀 Send</button>
          </div>
        </div>

      </div>
    </div>
  `;
}

// MODALS RENDERER
function renderModals() {
  const { selectedUploadModal, selectedLoginModal, authModalTab, isUploading, uploadStatusText, selectedEsportsApplyModal } = state;

  return `
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
            </form>
          `}
        </div>
      </div>
    ` : ''}

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
    case 'academy': mainContentHtml = renderAcademy(); break;
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
    elem.addEventListener('click', (e) => {
      e.stopPropagation();
      state.isMoreDropdownOpen = false;
      state.setActiveTab(elem.getAttribute('data-tab'));
    });
  });

  const btnToggleMore = document.getElementById('btn-toggle-more');
  if (btnToggleMore) {
    btnToggleMore.addEventListener('click', (e) => {
      e.stopPropagation();
      state.isMoreDropdownOpen = !state.isMoreDropdownOpen;
      state.notify();
    });
  }

  const navBrand = document.getElementById('nav-brand');
  if (navBrand) navBrand.addEventListener('click', () => state.setActiveTab('feed'));

  const navHomeBtn = document.getElementById('nav-home-btn');
  if (navHomeBtn) navHomeBtn.addEventListener('click', () => state.setActiveTab('feed'));

  const btnUpload = document.getElementById('btn-upload-clip');
  if (btnUpload) btnUpload.addEventListener('click', () => state.toggleUploadModal(true));

  const btnProfileUpload = document.getElementById('btn-profile-upload');
  if (btnProfileUpload) btnProfileUpload.addEventListener('click', () => state.toggleUploadModal(true));

  const btnProfileOpenAcademy = document.getElementById('btn-profile-open-academy');
  if (btnProfileOpenAcademy) btnProfileOpenAcademy.addEventListener('click', () => state.setActiveTab('academy'));

  const btnBackToAcademy = document.getElementById('btn-back-to-academy');
  if (btnBackToAcademy) btnBackToAcademy.addEventListener('click', () => state.setActiveAcademyCategory(null));

  const btnBackToCourse = document.getElementById('btn-back-to-course');
  if (btnBackToCourse) btnBackToCourse.addEventListener('click', () => state.setActiveAcademyLesson(null));

  const btnOpenCreateRoom = document.getElementById('btn-open-create-room');
  if (btnOpenCreateRoom) {
    btnOpenCreateRoom.addEventListener('click', () => {
      const roomName = prompt("Enter Custom 1v1 Room Name:", "Grandmaster 1v1 Match");
      if (roomName) {
        state.challenges.unshift({
          id: 'room_' + Date.now(),
          name: roomName,
          hostIgn: state.currentUser.ign,
          hostAvatar: state.currentUser.avatar,
          hostUid: state.currentUser.uid,
          gameMode: 'CS 1v1 M1887',
          entryFee: 100,
          status: 'Open',
          playersCount: 1,
          createdAt: new Date().toISOString()
        });
        state.notify();
        alert("🎉 Custom 1v1 Room Created!");
      }
    });
  }

  const btnSendChatMsg = document.getElementById('btn-send-chat-msg');
  if (btnSendChatMsg) {
    btnSendChatMsg.addEventListener('click', () => {
      const input = document.getElementById('input-chat-message');
      if (input && input.value.trim()) {
        state.messages.push({
          id: 'm_' + Date.now(),
          senderId: state.currentUser.id,
          receiverId: state.activeChatPlayerId || 'player_1',
          text: input.value.trim(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        input.value = '';
        state.notify();
      }
    });
  }

  const btnRetryFeed = document.getElementById('btn-retry-feed');
  if (btnRetryFeed) btnRetryFeed.addEventListener('click', () => state.fetchFeedClipsFromSupabase());

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

  document.querySelectorAll('.send-comment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const clipId = btn.getAttribute('data-clip-id');
      const inputElem = document.getElementById(`input-comment-${clipId}`);
      if (inputElem) {
        state.addCommentToClip(clipId, inputElem.value);
        inputElem.value = '';
      }
    });
  });

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

  if (!isGlobalClickAttached) {
    document.addEventListener('click', handleGlobalClick);
    isGlobalClickAttached = true;
  }
}

function handleGlobalClick(e) {
  if (state.isMoreDropdownOpen && !e.target.closest('.more-dropdown-wrapper')) {
    state.isMoreDropdownOpen = false;
    state.notify();
  }

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

  if (action === 'filter-rooms') {
    state.setChallengeFilter(target.getAttribute('data-filter'));
  }
  else if (action === 'select-chat-player') {
    state.activeChatPlayerId = id;
    state.notify();
  }
  else if (action === 'join-room') {
    alert("⚔️ Joined 1v1 Room! Match starting in Custom Room...");
  }
  else if (action === 'play-minigame') {
    if (id === 'aim_trainer') {
      state.currentUser.coins += 500;
      alert("🎯 Aim Reflex Target Destroyed! +500 Coins awarded!");
      state.notify();
    }
  }
  else if (action === 'apply-tryout') {
    alert("📝 Tryout Application Submitted! Team Captain will review your profile.");
  }
  else if (action === 'filter-news') {
    state.setNewsCategoryFilter(target.getAttribute('data-category'));
  }
  else if (action === 'read-news') {
    alert("📖 Opening full article preview...");
  }
  else if (action === 'select-course') {
    const course = academyCourses.find(c => c.id === id);
    if (course) state.setActiveAcademyCategory(course);
  }
  else if (action === 'open-lesson') {
    const courseId = target.getAttribute('data-course-id');
    const lessonId = target.getAttribute('data-lesson-id');
    const course = academyCourses.find(c => c.id === courseId);
    if (course) {
      const lesson = course.lessons.find(l => l.id === lessonId);
      if (lesson) {
        state.setActiveAcademyCategory(course);
        state.setActiveAcademyLesson(lesson);
      }
    }
  }
  else if (action === 'toggle-lesson-complete') {
    state.toggleLessonComplete(id);
  }
  else if (action === 'like') state.toggleLikeClip(id);
  else if (action === 'toggle-comments') {
    const s = document.getElementById(`comments-${id}`);
    if (s) s.classList.toggle('open');
  }
  else if (action === 'delete-comment') {
    const clipId = target.getAttribute('data-clip-id');
    const commentId = target.getAttribute('data-comment-id');
    state.deleteComment(clipId, commentId);
  }
  else if (action === 'delete-post') {
    state.deleteUserGameplayClip(id);
  }
  else if (action === 'toggle-connect') state.toggleConnection(id);
  else if (action === 'filter-clip-tag') state.setClipTagFilter(target.getAttribute('data-tag'));
  else if (action === 'view-full-profile') {
    const p = state.players.find(x => x.id === id);
    if (p) state.openPlayerProfile(p);
  }
}

state.subscribe(renderApp);

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
