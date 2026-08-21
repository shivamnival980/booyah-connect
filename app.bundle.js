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

function hasValidVideo(lesson) {
  if (!lesson) return false;
  const url = lesson.videoUrl || lesson.video_url || '';
  const path = lesson.videoPath || lesson.video_path || '';

  if (path && path.trim().length > 0) return true;
  if (!url || typeof url !== 'string' || url.trim().length === 0) return false;

  if (/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url)) return false;

  return url.startsWith('http') || url.startsWith('blob:') || url.includes('storage') || /\.(mp4|webm|mov|mkv)$/i.test(url);
}

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
    this.academyCourses = typeof academyCourses !== 'undefined' ? academyCourses : [];
    this.selectedEditCourseModal = null;
    this.selectedEditLessonModal = null;
    this.players = this.loadFromStorage('booyah_players', initialPlayers);
    this.clips = initialClips;
    this.challenges = this.loadFromStorage('booyah_challenges', []);
    this.news = this.loadFromStorage('booyah_news', []);
    this.messages = this.loadFromStorage('booyah_messages', []);
    this.esportsListings = this.loadFromStorage('booyah_esports', []);
    this.esportsApplications = this.loadFromStorage('booyah_apps', []);
    this.gameHistory = this.loadFromStorage('booyah_game_history', []);

    // Admin System State
    this.isAdmin = false;
    this.activeAdminTab = 'overview';
    this.adminStats = { totalUsers: 0, totalPosts: 0, totalCourses: 0, totalLessons: 0, totalComments: 0, totalLikes: 0, totalConnections: 0 };
    this.contentReports = [];
    this.adminNews = [];
    this.adminLogs = [];
    this.selectedReportModal = null;
    this.selectedCreateCourseModal = false;
    this.selectedCreateLessonModal = false;
    this.selectedPreviewLesson = null;
    this.selectedEditLessonModalData = null;
    this.lessonUploadProgress = null;
    this.selectedCreateNewsModal = false;

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
          await this.handleAuthUserSession(session.user);
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
        await this.handleAuthUserSession(session.user);
      } else if (event === 'SIGNED_OUT') {
        this.handleAuthUserSignOut();
      }
      await this.fetchFeedClipsFromSupabase();
      await this.fetchUserConnectionsFromSupabase();
      await this.fetchAcademyProgressFromSupabase();
    });
  }

  async handleAuthUserSession(user) {
    if (!user) return;
    const meta = user.user_metadata || {};
    this.currentUser = {
      id: user.id,
      email: user.email || "",
      ign: meta.ign || user.email?.split('@')[0] || "Pro Gamer",
      uid: meta.uid || "849201948",
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(meta.ign || user.email || 'gamer')}`,
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

    // DATABASE SECURITY CHECK FOR ADMIN ROLE (SUPABASE public.admin_users)
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      try {
        console.log("[Admin Verification] Querying Supabase public.admin_users for user UUID:", user.id);
        const { data: adminData, error: adminErr } = await client
          .from('admin_users')
          .select('role')
          .eq('user_id', user.id)
          .maybeSingle();

        console.log("[Admin Verification Response]:", { user_id: user.id, email: user.email, adminData, adminErr });

        if (!adminErr && adminData && (adminData.role === 'admin' || adminData.role === 'superadmin')) {
          this.isAdmin = true;
          console.log("🛡️ Authenticated User is a Verified Platform Admin! Enabling ⚙️ Admin Panel.");
        } else {
          try {
            const { data: isRpcAdmin } = await client.rpc('is_admin', { user_id: user.id });
            this.isAdmin = !!isRpcAdmin;
          } catch (e) {
            this.isAdmin = false;
          }
        }
      } catch (err) {
        console.warn("[Admin Verification Query Warning]:", err);
        this.isAdmin = false;
      }
    } else {
      if (this.currentUser.ign.includes("UGAT") || (user.email && user.email.includes("ugat"))) {
        this.isAdmin = true;
      }
    }

    if (this.isAdmin) {
      await this.fetchAdminDashboardData();
    }

    this.notify();
  }

  handleAuthUserSignOut() {
    this.currentUser = initialCurrentUser;
    this.isLoggedIn = false;
    this.userConnections = [];
    this.academyProgress = [];
    this.notify();
  }

    // ADMIN SYSTEM METHODS
  // LESSON PREVIEW & EDIT MODAL METHODS
  openLessonPreview(courseId, lessonId) {
    const course = (this.academyCourses || []).find(c => c.id === courseId);
    if (!course) return;
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.selectedPreviewLesson = { course, lesson };
    this.notify();
  }

  closeLessonPreview() {
    this.selectedPreviewLesson = null;
    this.notify();
  }

  openEditLessonModal(courseId, lessonId) {
    const course = (this.academyCourses || []).find(c => c.id === courseId);
    if (!course) return;
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.selectedEditLessonModalData = {
      courseId,
      lessonId,
      title: lesson.title,
      description: lesson.description || "",
      duration: lesson.duration || "10 mins",
      difficulty: lesson.difficulty || "Beginner",
      published: lesson.published !== false,
      videoUrl: lesson.videoUrl || "",
      videoPath: lesson.videoPath || "",
      tips: Array.isArray(lesson.tips) ? lesson.tips.join('\n') : (lesson.tips || ""),
      practiceTask: lesson.practiceTask || ""
    };
    this.notify();
  }

  closeEditLessonModal() {
    this.selectedEditLessonModalData = null;
    this.lessonUploadProgress = null;
    this.notify();
  }

  async removeLessonVideo(courseId, lessonId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const course = (this.academyCourses || []).find(c => c.id === courseId);
    if (!course) return;
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    if (!confirm("Remove video from this lesson?")) return;

    const oldPath = lesson.videoPath;
    lesson.videoUrl = "";
    lesson.videoPath = "";

    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      try {
        await client.from('academy_lessons').update({ video_url: "", video_path: "" }).eq('id', lessonId);
        if (oldPath) {
          await client.storage.from('academy-videos').remove([oldPath]);
        }
      } catch (e) {}
    }

    await this.logAdminAction('REMOVE_LESSON_VIDEO', 'lesson', lessonId, `Removed video from lesson "${lesson.title}"`);
    alert("🗑️ Video removed from lesson.");
    if (this.selectedEditLessonModalData) {
      this.selectedEditLessonModalData.videoUrl = "";
      this.selectedEditLessonModalData.videoPath = "";
    }
    this.notify();
  }

    setActiveAdminTab(tab) {
    this.activeAdminTab = tab;
    this.notify();
  }

  async fetchAdminDashboardData() {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client || !this.isAdmin) return;

    try {
      const [{ count: usersCount }, { count: postsCount }, { count: commentsCount }, { count: likesCount }, { count: connectionsCount }] = await Promise.all([
        client.from('admin_users').select('*', { count: 'exact', head: true }),
        client.from('posts').select('*', { count: 'exact', head: true }),
        client.from('post_comments').select('*', { count: 'exact', head: true }),
        client.from('post_likes').select('*', { count: 'exact', head: true }),
        client.from('user_connections').select('*', { count: 'exact', head: true })
      ]);

      this.adminStats = {
        totalUsers: (usersCount || 0) + this.players.length,
        totalPosts: postsCount || this.clips.length,
        totalCourses: academyCourses.length,
        totalLessons: academyCourses.reduce((acc, c) => acc + c.lessons.length, 0),
        totalComments: commentsCount || 1,
        totalLikes: likesCount || 342,
        totalConnections: connectionsCount || 384
      };

      const { data: reportsData } = await client.from('content_reports').select('*').order('created_at', { ascending: false });
      this.contentReports = reportsData || [];

      const { data: newsData } = await client.from('news').select('*').order('created_at', { ascending: false });
      this.adminNews = newsData || [];

      const { data: logsData } = await client.from('admin_activity_log').select('*').order('created_at', { ascending: false }).limit(30);
      this.adminLogs = logsData || [];
    } catch (e) {
      console.warn("Fetch Admin Data Notice:", e.message);
    }
  }

  async toggleFeaturePost(postId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const clip = this.clips.find(c => c.id === postId);
    if (!clip) return;

    const newStatus = !clip.featured;
    clip.featured = newStatus;

    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client && isUuid(postId)) {
      await client.from('posts').update({ featured: newStatus }).eq('id', postId);
    }

    await this.logAdminAction(newStatus ? 'FEATURE_POST' : 'UNFEATURE_POST', 'post', postId, `Post "${clip.title}" featured: ${newStatus}`);
    alert(newStatus ? "⭐ Post marked as Featured!" : "ℹ️ Post unfeatured.");
    this.notify();
  }

  async toggleHidePost(postId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const clip = this.clips.find(c => c.id === postId);
    if (!clip) return;

    const newStatus = !clip.hidden;
    clip.hidden = newStatus;

    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client && isUuid(postId)) {
      await client.from('posts').update({ hidden: newStatus }).eq('id', postId);
    }

    await this.logAdminAction(newStatus ? 'HIDE_POST' : 'UNHIDE_POST', 'post', postId, `Post "${clip.title}" hidden: ${newStatus}`);
    alert(newStatus ? "🚫 Post hidden from community feed." : "👁️ Post made visible.");
    this.notify();
  }

  async adminDeletePost(postId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    if (!confirm("⚠️ Are you sure you want to delete this post as Admin?")) return;

    const clipIndex = this.clips.findIndex(c => c.id === postId);
    if (clipIndex > -1) {
      const clip = this.clips[clipIndex];
      this.clips.splice(clipIndex, 1);

      const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
      if (client && isUuid(postId)) {
        await client.from('posts').delete().eq('id', postId);
      }

      await this.logAdminAction('DELETE_POST', 'post', postId, `Deleted post "${clip.title}" by ${clip.authorIgn}`);
      alert("🗑️ Post deleted by Admin.");
      this.notify();
    }
  }

  async createContentReport(contentType, contentId, reason, details) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client || !this.isLoggedIn) {
      return alert("⚠️ Please sign in to report content.");
    }

    try {
      const { error } = await client.from('content_reports').insert([{
        reporter_id: this.currentUser.id,
        content_type: contentType,
        content_id: String(contentId),
        reason: reason,
        details: details || "",
        status: "pending"
      }]);

      if (error) {
        alert("❌ Report Submission Error: " + error.message);
      } else {
        alert("🚩 Report Submitted! Our admin team (UGAT AGENT) will review it shortly.");
        await this.fetchAdminDashboardData();
      }
    } catch (e) {
      alert("❌ Error submitting report.");
    }
  }

  async resolveReport(reportId, statusAction) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    
    if (client && isUuid(reportId)) {
      await client.from('content_reports').update({ status: statusAction, resolved_at: new Date().toISOString() }).eq('id', reportId);
    }

    const report = this.contentReports.find(r => r.id === reportId);
    if (report) report.status = statusAction;

    await this.logAdminAction('RESOLVE_REPORT', 'report', reportId, `Report ${reportId} marked as ${statusAction}`);
    alert(`✅ Report status updated to: ${statusAction}`);
    this.notify();
  }

  // ACADEMY CMS MANAGEMENT METHODS
  async createAcademyCourse(courseData) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const courseId = courseData.id || `course_${Date.now()}`;
    const newCourse = {
      id: courseId,
      title: courseData.title,
      description: courseData.description,
      category: courseData.category || "Aim",
      difficulty: courseData.difficulty || "Beginner",
      icon: courseData.icon || "🎯",
      thumbnail: courseData.thumbnail || "",
      published: courseData.published !== false,
      display_order: this.academyCourses.length + 1,
      lessons: []
    };

    this.academyCourses.push(newCourse);

    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      try {
        await client.from('academy_courses').insert([{
          id: courseId,
          title: courseData.title,
          description: courseData.description,
          category: courseData.category || "Aim",
          difficulty: courseData.difficulty || "Beginner",
          icon: courseData.icon || "🎯",
          published: courseData.published !== false
        }]);
      } catch (e) {}
    }

    await this.logAdminAction('CREATE_COURSE', 'course', courseId, `Created course "${newCourse.title}"`);
    alert("🎉 Course created successfully!");
    this.selectedEditCourseModal = null;
    this.notify();
  }

  async updateAcademyCourse(courseId, courseData) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const course = this.academyCourses.find(c => c.id === courseId);
    if (!course) return;

    Object.assign(course, courseData);

    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      try {
        await client.from('academy_courses').update(courseData).eq('id', courseId);
      } catch (e) {}
    }

    await this.logAdminAction('UPDATE_COURSE', 'course', courseId, `Updated course "${course.title}"`);
    alert("✅ Course updated successfully!");
    this.selectedEditCourseModal = null;
    this.notify();
  }

  async deleteAcademyCourse(courseId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    if (!confirm("⚠️ Delete this entire course and all its lessons permanently?")) return;

    const idx = this.academyCourses.findIndex(c => c.id === courseId);
    if (idx > -1) {
      const title = this.academyCourses[idx].title;
      this.academyCourses.splice(idx, 1);

      const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
      if (client) {
        try {
          await client.from('academy_courses').delete().eq('id', courseId);
        } catch (e) {}
      }

      await this.logAdminAction('DELETE_COURSE', 'course', courseId, `Deleted course "${title}"`);
      alert("🗑️ Course deleted successfully!");
      this.notify();
    }
  }

  async togglePublishCourse(courseId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const course = this.academyCourses.find(c => c.id === courseId);
    if (!course) return;

    course.published = !course.published;
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      try {
        await client.from('academy_courses').update({ published: course.published }).eq('id', courseId);
      } catch (e) {}
    }

    await this.logAdminAction('TOGGLE_PUBLISH_COURSE', 'course', courseId, `Course "${course.title}" published: ${course.published}`);
    alert(`Course ${course.published ? 'Published' : 'Unpublished'}.`);
    this.notify();
  }

  async createAcademyLesson(courseId, lessonData, videoFile) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const course = this.academyCourses.find(c => c.id === courseId);
    if (!course) return alert("Course not found");

    const lessonId = lessonData.id || `l_${Date.now()}`;
    let videoUrl = lessonData.videoUrl || "assets/gameplay_thumb1.jpg";
    let videoPath = "";

    if (videoFile) {
      const uploaded = await this.uploadAcademyVideo(courseId, lessonId, videoFile);
      if (uploaded) {
        videoUrl = uploaded.videoUrl;
        videoPath = uploaded.videoPath;
      }
    }

    const newLesson = {
      id: lessonId,
      title: lessonData.title,
      description: lessonData.description || "",
      duration: lessonData.duration || "10 mins",
      difficulty: lessonData.difficulty || "Beginner",
      videoUrl: videoUrl,
      videoPath: videoPath,
      tips: lessonData.tips || [],
      practiceTask: lessonData.practiceTask || "",
      published: lessonData.published !== false,
      lesson_order: course.lessons.length + 1
    };

    course.lessons.push(newLesson);

    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      try {
        await client.from('academy_lessons').insert([{
          id: lessonId,
          course_id: courseId,
          title: lessonData.title,
          description: lessonData.description || "",
          duration: lessonData.duration || "10 mins",
          difficulty: lessonData.difficulty || "Beginner",
          video_url: videoUrl,
          video_path: videoPath,
          tips: lessonData.tips || [],
          practice_task: lessonData.practiceTask || "",
          published: lessonData.published !== false
        }]);
      } catch (e) {}
    }

    await this.logAdminAction('CREATE_LESSON', 'lesson', lessonId, `Created lesson "${newLesson.title}" in course "${course.title}"`);
    alert("🎉 Lesson created successfully!");
    this.selectedEditLessonModal = null;
    this.notify();
  }

  async updateAcademyLesson(courseId, lessonId, lessonData, newVideoFile, newThumbnailFile) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const course = (this.academyCourses || []).find(c => c.id === courseId);
    if (!course) return;
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const oldVideoPath = lesson.videoPath;
    let newVideoPath = lesson.videoPath;
    let newVideoUrl = lesson.videoUrl;

    // STEP 1: Upload new video if provided (SAFE REPLACEMENT PATTERN)
    if (newVideoFile) {
      const uploadedVideo = await this.uploadAcademyVideo(courseId, lessonId, newVideoFile);
      if (!uploadedVideo) {
        alert("⚠️ Video upload failed. Changes to video were canceled to preserve existing data.");
      } else {
        newVideoPath = uploadedVideo.videoPath;
        newVideoUrl = uploadedVideo.videoUrl;
      }
    }

    let newThumbPath = lesson.thumbnailPath;
    let newThumbUrl = lesson.thumbnailUrl;
    if (newThumbnailFile) {
      const uploadedThumb = await this.uploadAcademyThumbnail(courseId, lessonId, newThumbnailFile);
      if (uploadedThumb) {
        newThumbPath = uploadedThumb.thumbnailPath;
        newThumbUrl = uploadedThumb.thumbnailUrl;
      }
    }

    lessonData.videoUrl = newVideoUrl;
    lessonData.videoPath = newVideoPath;
    lessonData.thumbnailUrl = newThumbUrl;
    lessonData.thumbnailPath = newThumbPath;

    Object.assign(lesson, lessonData);

    // STEP 2: Update Supabase Database
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    let dbSuccess = false;
    if (client) {
      try {
        const { error: dbErr } = await client.from('academy_lessons').update({
          title: lesson.title,
          description: lesson.description,
          duration: lesson.duration,
          difficulty: lesson.difficulty,
          video_url: lesson.videoUrl,
          video_path: lesson.videoPath,
          thumbnail_url: lesson.thumbnailUrl,
          thumbnail_path: lesson.thumbnailPath,
          tips: lesson.tips,
          practice_task: lesson.practiceTask,
          published: lesson.published
        }).eq('id', lessonId);

        if (!dbErr) dbSuccess = true;
      } catch (e) {}
    } else {
      dbSuccess = true;
    }

    // STEP 3: Delete OLD video from Storage ONLY after database update succeeds
    if (dbSuccess && newVideoFile && oldVideoPath && oldVideoPath !== newVideoPath && client) {
      try {
        console.log("[Academy Storage] Cleaning up old replaced video:", oldVideoPath);
        await client.storage.from('academy-videos').remove([oldVideoPath]);
      } catch (e) {}
    }

    await this.logAdminAction('UPDATE_LESSON', 'lesson', lessonId, `Updated lesson "${lesson.title}"`);
    alert("✅ Lesson updated successfully!");
    this.selectedEditLessonModalData = null;
    this.notify();
  }

  async deleteAcademyLesson(courseId, lessonId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    if (!confirm("Delete this lesson permanently?")) return;

    const course = this.academyCourses.find(c => c.id === courseId);
    if (!course) return;

    const lIdx = course.lessons.findIndex(l => l.id === lessonId);
    if (lIdx > -1) {
      const lesson = course.lessons[lIdx];
      course.lessons.splice(lIdx, 1);

      const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
      if (client) {
        try {
          await client.from('academy_lessons').delete().eq('id', lessonId);
          if (lesson.videoPath) {
            await client.storage.from('academy-videos').remove([lesson.videoPath]);
          }
        } catch (e) {}
      }

      await this.logAdminAction('DELETE_LESSON', 'lesson', lessonId, `Deleted lesson "${lesson.title}"`);
      alert("🗑️ Lesson deleted permanently!");
      this.notify();
    }
  }

  async togglePublishLesson(courseId, lessonId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const course = this.academyCourses.find(c => c.id === courseId);
    if (!course) return;
    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    lesson.published = !lesson.published;

    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client) {
      try {
        await client.from('academy_lessons').update({ published: lesson.published }).eq('id', lessonId);
      } catch (e) {}
    }

    await this.logAdminAction('TOGGLE_PUBLISH_LESSON', 'lesson', lessonId, `Lesson "${lesson.title}" published: ${lesson.published}`);
    alert(`Lesson status changed to ${lesson.published ? 'Published' : 'Draft'}.`);
    this.notify();
  }

  async reorderLesson(courseId, lessonId, direction) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const course = this.academyCourses.find(c => c.id === courseId);
    if (!course) return;

    const idx = course.lessons.findIndex(l => l.id === lessonId);
    if (idx === -1) return;

    if (direction === 'up' && idx > 0) {
      const temp = course.lessons[idx];
      course.lessons[idx] = course.lessons[idx - 1];
      course.lessons[idx - 1] = temp;
    } else if (direction === 'down' && idx < course.lessons.length - 1) {
      const temp = course.lessons[idx];
      course.lessons[idx] = course.lessons[idx + 1];
      course.lessons[idx + 1] = temp;
    }

    this.notify();
  }

  async uploadAcademyVideo(courseId, lessonId, file) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client) {
      alert("❌ Supabase client not initialized");
      return null;
    }

    if (!file) return null;

    // Validate extension
    const ext = file.name.split('.').pop().toLowerCase();
    const validExts = ['mp4', 'webm', 'mov', 'm4v'];
    if (!validExts.includes(ext)) {
      alert(`🛑 Unsupported video format ".${ext}". Please select MP4, WebM, MOV, or M4V.`);
      return null;
    }

    // Validate file size (100 MB max)
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      alert(`🛑 File size (${sizeMB} MB) exceeds maximum limit of 100 MB.`);
      return null;
    }

    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const fileName = `video_${Date.now()}_${safeName}`;
      const filePath = `${courseId}/${lessonId}/${fileName}`;

      console.log(`[Academy Storage] Uploading video (${(file.size / (1024 * 1024)).toFixed(1)} MB):`, filePath);

      let { data, error } = await client.storage
        .from('academy-videos')
        .upload(filePath, file, { cacheControl: '3600', upsert: true });

      // Automatic recovery if bucket is missing in Supabase project
      if (error && (error.message?.includes('Bucket not found') || error.statusCode === 404 || error.status === 404)) {
        console.warn("[Academy Storage] Bucket 'academy-videos' missing. Attempting automatic bucket creation...");
        try {
          const { error: createErr } = await client.storage.createBucket('academy-videos', { public: true });
          if (!createErr) {
            console.log("[Academy Storage] Bucket 'academy-videos' successfully created. Retrying upload...");
            const retryRes = await client.storage
              .from('academy-videos')
              .upload(filePath, file, { cacheControl: '3600', upsert: true });
            data = retryRes.data;
            error = retryRes.error;
          }
        } catch (createEx) {
          console.error("[Academy Storage] Auto-create bucket exception:", createEx);
        }
      }

      if (error) {
        console.error("Academy Video Upload Error:", error.message);
        alert("⚠️ Video Upload Failed: " + error.message + "\n\nPlease run the updated supabase_setup.sql script in your Supabase SQL Editor to create the 'academy-videos' storage bucket with RLS policies.");
        return null;
      }

      const { data: publicUrlData } = client.storage
        .from('academy-videos')
        .getPublicUrl(filePath);

      return {
        videoUrl: publicUrlData ? publicUrlData.publicUrl : "",
        videoPath: filePath
      };
    } catch (e) {
      console.error("Upload exception:", e);
      alert("⚠️ Video Upload Exception: " + e.message);
      return null;
    }
  }

  async uploadAcademyThumbnail(courseId, lessonId, file) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (!client || !file) return null;

    const ext = file.name.split('.').pop().toLowerCase();
    if (!['jpg', 'jpeg', 'png', 'webp'].includes(ext)) {
      alert("🛑 Please select a valid image file (JPG, PNG, WebP).");
      return null;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("🛑 Thumbnail image size exceeds 10 MB limit.");
      return null;
    }

    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filePath = `${courseId}/${lessonId}/thumb_${Date.now()}_${safeName}`;

      const { data, error } = await client.storage
        .from('academy-videos')
        .upload(filePath, file, { cacheControl: '3600', upsert: true });

      if (error) return null;

      const { data: publicUrlData } = client.storage
        .from('academy-videos')
        .getPublicUrl(filePath);

      return {
        thumbnailUrl: publicUrlData ? publicUrlData.publicUrl : "",
        thumbnailPath: filePath
      };
    } catch (e) {
      return null;
    }
  }

  async createNewsAnnouncement({ title, description, content, thumbnail, category }) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;

    const newArticle = {
      id: `news_${Date.now()}`,
      title,
      description,
      content,
      thumbnail: thumbnail || "assets/ff_news_thumb.jpg",
      category: category || "Esports",
      published: true,
      created_at: new Date().toISOString()
    };

    if (client) {
      const { data, error } = await client.from('news').insert([{
        title,
        description,
        content,
        thumbnail: thumbnail || "assets/ff_news_thumb.jpg",
        category: category || "Esports",
        published: true
      }]).select().single();

      if (!error && data) {
        this.adminNews.unshift(data);
      }
    } else {
      this.adminNews.unshift(newArticle);
    }

    await this.logAdminAction('CREATE_NEWS', 'news', title, `Created announcement "${title}"`);
    alert("📢 Announcement published successfully!");
    this.selectedCreateNewsModal = false;
    this.notify();
  }

  async togglePublishNews(newsId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    const item = this.adminNews.find(n => n.id === newsId);
    if (!item) return;

    item.published = !item.published;
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    if (client && isUuid(newsId)) {
      await client.from('news').update({ published: item.published }).eq('id', newsId);
    }

    await this.logAdminAction('TOGGLE_PUBLISH_NEWS', 'news', newsId, `News "${item.title}" published: ${item.published}`);
    alert(`News article ${item.published ? 'Published' : 'Unpublished'}.`);
    this.notify();
  }

  async deleteNews(newsId) {
    if (!this.isAdmin) return alert("🛑 Admin Access Required");
    if (!confirm("Delete this news article?")) return;

    const idx = this.adminNews.findIndex(n => n.id === newsId);
    if (idx > -1) {
      const title = this.adminNews[idx].title;
      this.adminNews.splice(idx, 1);

      const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
      if (client && isUuid(newsId)) {
        await client.from('news').delete().eq('id', newsId);
      }

      await this.logAdminAction('DELETE_NEWS', 'news', newsId, `Deleted news "${title}"`);
      alert("🗑️ News article deleted.");
      this.notify();
    }
  }

  async logAdminAction(action, targetType, targetId, details) {
    const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
    const logEntry = {
      id: `log_${Date.now()}`,
      admin_user_id: this.currentUser.id,
      action,
      target_type: targetType,
      target_id: String(targetId),
      details,
      created_at: new Date().toISOString()
    };

    this.adminLogs.unshift(logEntry);

    if (client && this.isLoggedIn && isUuid(this.currentUser.id)) {
      try {
        await client.from('admin_activity_log').insert([{
          admin_user_id: this.currentUser.id,
          action,
          target_type: targetType,
          target_id: String(targetId),
          details
        }]);
      } catch (e) {}
    }
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

// ACADEMY RENDERER
function renderAcademy() {
  const { academyProgress, activeAcademyCategory, activeAcademyLesson, academyCategoryFilter, academyDifficultyFilter, isAdmin } = state;
  const academyCoursesList = (state.academyCourses || []).filter(c => isAdmin || c.published !== false);
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
          ${state.isAdmin ? `
            <button class="nav-tab ${activeTab === 'admin' ? 'active' : ''}" data-tab="admin" style="color: #FF5500; font-weight: 800; border-color: rgba(255, 85, 0, 0.4);">⚙️ Admin</button>
          ` : ''}
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

function renderLessonPreviewModal() {
  const preview = state.selectedPreviewLesson;
  if (!preview) return '';
  const { course, lesson } = preview;
  const hasVideo = hasValidVideo(lesson);

  return `
    <div class="modal-overlay" id="modal-preview-lesson">
      <div class="modal-card" style="max-width: 680px; max-height: 90vh; overflow-y: auto;">
        <button class="modal-close-btn" id="close-preview-modal">&times;</button>

        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
          <span style="background: rgba(255, 85, 0, 0.2); color: var(--primary-fire); font-weight: 800; padding: 4px 10px; border-radius: 8px;">
            ${course.title}
          </span>
          <span class="badge-status ${lesson.published ? 'published' : 'draft'}">
            ${lesson.published ? '🟢 Published' : '📝 Draft'}
          </span>
          <span style="color: var(--amber-gold); font-size: 0.85rem; font-weight: 700;">
            ⏱ ${lesson.duration || '10 mins'} • 🟡 ${lesson.difficulty || 'Beginner'}
          </span>
        </div>

        <h2 style="margin: 0 0 16px 0; font-family: var(--font-heading); font-size: 1.5rem; color: #FFF;">
          ${lesson.title}
        </h2>

        ${hasVideo ? `
          <div style="background: #000; border-radius: 14px; overflow: hidden; margin-bottom: 20px; border: 1px solid var(--primary-fire); box-shadow: 0 8px 25px rgba(0,0,0,0.8);">
            <video src="${lesson.videoUrl || lesson.video_url}" controls autoplay style="width: 100%; max-height: 380px; display: block;"></video>
          </div>
        ` : `
          <div style="background: rgba(14, 18, 24, 0.9); border: 1px dashed rgba(255, 255, 255, 0.2); border-radius: 14px; padding: 36px 20px; text-align: center; margin-bottom: 20px;">
            <div style="font-size: 3rem; margin-bottom: 10px;">🎥</div>
            <h3 style="margin: 0 0 6px 0; color: var(--text-light); font-family: var(--font-heading);">No Video Uploaded Yet</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0; max-width: 480px; margin: 0 auto; line-height: 1.5;">
              This lesson currently contains written tips and practice tasks. Platform admins can upload an MP4/WebM video via the Edit Lesson modal.
            </p>
          </div>
        `}

        <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
          <h4 style="margin: 0 0 8px 0; color: var(--amber-gold); font-size: 0.9rem; text-transform: uppercase; font-weight: 800;">Lesson Description</h4>
          <p style="margin: 0; color: var(--text-light); font-size: 0.95rem; line-height: 1.5;">${lesson.description || "No description available."}</p>
        </div>

        ${lesson.tips && lesson.tips.length > 0 ? `
          <div style="margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; color: var(--primary-fire); font-size: 0.9rem; text-transform: uppercase; font-weight: 800;">💡 Pro Tips</h4>
            <ul style="margin: 0; padding-left: 20px; color: var(--text-main); font-size: 0.9rem; line-height: 1.6;">
              ${(Array.isArray(lesson.tips) ? lesson.tips : [lesson.tips]).map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div style="display: flex; justify-content: flex-end; margin-top: 24px;">
          <button class="btn btn-secondary" id="btn-close-lesson-preview">Close Preview</button>
        </div>
      </div>
    </div>
  `;
}

function renderEditLessonModal() {
  const data = state.selectedEditLessonModalData;
  if (!data) return '';
  const hasVideo = hasValidVideo({ videoUrl: data.videoUrl, videoPath: data.videoPath });

  return `
    <div class="modal-overlay" id="modal-edit-lesson">
      <div class="modal-card" style="max-width: 600px; max-height: 90vh; overflow-y: auto;">
        <button class="modal-close-btn" id="close-edit-lesson-modal">&times;</button>
        <h2 style="margin: 0 0 16px 0; font-family: var(--font-heading); color: #FFF;">✏️ EDIT LESSON</h2>

        <form id="form-submit-edit-lesson">
          <div style="margin-bottom: 20px; background: rgba(0,0,0,0.3); border-radius: 12px; padding: 16px;">
            <h3 style="margin: 0 0 12px 0; font-size: 0.85rem; color: var(--amber-gold); text-transform: uppercase; font-weight: 800;">LESSON INFORMATION</h3>
            
            <div class="form-group">
              <label>Lesson Title</label>
              <input type="text" id="edit-lesson-title" class="form-control" value="${data.title}" required />
            </div>

            <div class="form-group">
              <label>Description</label>
              <textarea id="edit-lesson-desc" class="form-control" rows="3" required>${data.description}</textarea>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div class="form-group">
                <label>Duration (e.g. 10 mins)</label>
                <input type="text" id="edit-lesson-duration" class="form-control" value="${data.duration}" required />
              </div>
              <div class="form-group">
                <label>Difficulty</label>
                <select id="edit-lesson-difficulty" class="form-control">
                  <option value="Beginner" ${data.difficulty === 'Beginner' ? 'selected' : ''}>Beginner</option>
                  <option value="Intermediate" ${data.difficulty === 'Intermediate' ? 'selected' : ''}>Intermediate</option>
                  <option value="Advanced" ${data.difficulty === 'Advanced' ? 'selected' : ''}>Advanced</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label>Status Visibility</label>
              <select id="edit-lesson-published" class="form-control">
                <option value="true" ${data.published ? 'selected' : ''}>🟢 Published (Visible to all users)</option>
                <option value="false" ${!data.published ? 'selected' : ''}>📝 Draft (Visible only to admins)</option>
              </select>
            </div>
          </div>

          <div style="margin-bottom: 20px; background: rgba(0,0,0,0.3); border-radius: 12px; padding: 16px;">
            <h3 style="margin: 0 0 12px 0; font-size: 0.85rem; color: var(--amber-gold); text-transform: uppercase; font-weight: 800;">VIDEO CONTENT</h3>
            
            <div style="margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.88rem; font-weight: 700;">Current Status:</span>
              ${hasVideo ? `
                <span class="badge-status published">🎥 Video Uploaded</span>
              ` : `
                <span style="background: rgba(255,255,255,0.08); color: var(--text-muted); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 800;">🎥 No Video Uploaded</span>
              `}
            </div>

            <div class="form-group">
              <label>Upload or Replace Video (MP4 / WebM / MOV — max 100 MB)</label>
              <input type="file" id="edit-lesson-video-file" class="form-control" accept="video/mp4,video/webm,video/quicktime,video/*" />
            </div>

            ${hasVideo ? `
              <div style="display: flex; gap: 10px; margin-top: 10px;">
                <button type="button" class="btn btn-secondary btn-sm" id="btn-edit-lesson-preview-video">▶ Preview Current Video</button>
                <button type="button" class="btn btn-secondary btn-sm" id="btn-edit-lesson-remove-video" style="color: #FF5252;">🗑️ Remove Video</button>
              </div>
            ` : ''}
          </div>

          <div style="display: flex; gap: 12px; margin-top: 24px;">
            <button type="button" class="btn btn-secondary" id="btn-cancel-edit-lesson" style="flex: 1;">Cancel</button>
            <button type="submit" class="btn btn-primary" id="btn-save-edit-lesson" style="flex: 2; justify-content: center;">
              💾 Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

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

    ${state.selectedPreviewLesson ? renderLessonPreviewModal() : ''}
    ${state.selectedEditLessonModalData ? renderEditLessonModal() : ''}
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


// ==========================================================================
// ADMIN DASHBOARD VIEW RENDERERS
// ==========================================================================

function renderAdminOverview() {
  const { adminStats, clips, players } = state;
  const recentClips = clips.slice(0, 5);

  return `
    <div>
      <h2 style="margin: 0 0 20px 0; font-size: 1.4rem;">📊 Real Platform Analytics (Supabase)</h2>

      <div class="admin-metrics-grid">
        <div class="admin-metric-card">
          <div class="admin-metric-lbl">Total Registered Users</div>
          <div class="admin-metric-val">👥 ${adminStats.totalUsers}</div>
        </div>
        <div class="admin-metric-card">
          <div class="admin-metric-lbl">Gameplay Video Posts</div>
          <div class="admin-metric-val">🎥 ${adminStats.totalPosts}</div>
        </div>
        <div class="admin-metric-card">
          <div class="admin-metric-lbl">Academy Masterclasses</div>
          <div class="admin-metric-val">🎓 ${adminStats.totalCourses}</div>
        </div>
        <div class="admin-metric-card">
          <div class="admin-metric-lbl">Total Academy Lessons</div>
          <div class="admin-metric-val">📚 ${adminStats.totalLessons}</div>
        </div>
        <div class="admin-metric-card">
          <div class="admin-metric-lbl">Community Comments</div>
          <div class="admin-metric-val">💬 ${adminStats.totalComments}</div>
        </div>
        <div class="admin-metric-card">
          <div class="admin-metric-lbl">Likes Awarded</div>
          <div class="admin-metric-val">❤️ ${adminStats.totalLikes}</div>
        </div>
        <div class="admin-metric-card">
          <div class="admin-metric-lbl">Player Connections</div>
          <div class="admin-metric-val">🔗 ${adminStats.totalConnections}</div>
        </div>
      </div>

      <h3 style="margin: 28px 0 14px 0; font-size: 1.2rem;">⏱️ Recent Gameplay Uploads</h3>
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Clip Title</th>
              <th>Player IGN</th>
              <th>Likes</th>
              <th>Views</th>
              <th>Uploaded</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${recentClips.map(clip => `
              <tr>
                <td><strong>${clip.title}</strong></td>
                <td>${clip.authorIgn}</td>
                <td>❤️ ${clip.likes}</td>
                <td>👁️ ${clip.views || 1}</td>
                <td>${clip.createdAt}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" data-action="toggle-feature-post" data-id="${clip.id}">
                    ${clip.featured ? '⭐ Unfeature' : '⭐ Feature'}
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminAcademy() {
  const courses = state.academyCourses || [];

  return `
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
        <div>
          <h2 style="margin: 0; font-size: 1.5rem; font-family: var(--font-heading);">🎓 ACADEMY MANAGER</h2>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin: 4px 0 0 0;">
            Manage masterclasses, upload training videos to <code>academy-videos</code>, toggle Draft/Published states, and reorder lessons.
          </p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-primary btn-sm" id="btn-admin-add-course-trigger">+ Add Course</button>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        ${courses.length === 0 ? `
          <div style="text-align: center; padding: 40px; background: rgba(0,0,0,0.2); border-radius: 16px;">
            <div style="font-size: 2.5rem; margin-bottom: 10px;">📚</div>
            <p style="color: var(--text-muted); margin: 0;">No academy courses available. Click "+ Add Course" to create one.</p>
          </div>
        ` : courses.map(course => `
          <div style="background: rgba(14, 18, 24, 0.95); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 18px; padding: 24px; box-shadow: 0 8px 25px rgba(0,0,0,0.5);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 14px;">
                <span style="font-size: 2.2rem;">${course.icon || '🎓'}</span>
                <div>
                  <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                    <h3 style="margin: 0; font-size: 1.3rem; font-family: var(--font-heading); color: #FFF;">${course.title}</h3>
                    <span class="badge-status ${course.published ? 'published' : 'draft'}">
                      ${course.published ? '🟢 Published' : '📝 Draft'}
                    </span>
                    <span style="background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); font-size: 0.78rem; font-weight: 800; padding: 3px 10px; border-radius: 12px; border: 1px solid rgba(255, 183, 0, 0.3);">
                      ${course.category} • ${course.difficulty}
                    </span>
                  </div>
                  <p style="margin: 6px 0 0 0; color: var(--text-muted); font-size: 0.9rem;">${course.description}</p>
                </div>
              </div>

              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm" data-action="admin-add-lesson-modal" data-course-id="${course.id}">+ Add Lesson</button>
                <button class="btn btn-secondary btn-sm" data-action="admin-edit-course-modal" data-course-id="${course.id}">✏️ Edit Course</button>
                <button class="btn btn-secondary btn-sm" data-action="toggle-publish-course" data-course-id="${course.id}">
                  ${course.published ? '📤 Unpublish' : '🚀 Publish'}
                </button>
                <button class="btn btn-secondary btn-sm" data-action="admin-delete-course" data-course-id="${course.id}" style="color: #FF5252;">🗑️ Delete</button>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 16px;">
              ${course.lessons.length === 0 ? `
                <div style="padding: 20px; background: rgba(0,0,0,0.3); border-radius: 12px; text-align: center; color: var(--text-muted);">
                  No lessons in this course yet. Click "+ Add Lesson" above.
                </div>
              ` : course.lessons.map((lesson, index) => {
                const hasVideo = hasValidVideo(lesson);
                return `
                  <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                      <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <span style="background: rgba(255, 85, 0, 0.2); color: var(--primary-fire); font-weight: 800; font-size: 0.85rem; padding: 4px 10px; border-radius: 8px; border: 1px solid rgba(255, 85, 0, 0.4);">
                          L${index + 1}
                        </span>
                        <h4 style="margin: 0; font-size: 1.05rem; color: #FFF; font-weight: 700;">${lesson.title}</h4>
                        <span class="badge-status ${lesson.published ? 'published' : 'draft'}">
                          ${lesson.published ? '🟢 Published' : '📝 Draft'}
                        </span>
                        ${hasVideo ? `
                          <span class="badge-status published">🎥 Video Ready</span>
                        ` : `
                          <span style="background: rgba(255,255,255,0.08); color: var(--text-muted); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 800; border: 1px solid rgba(255,255,255,0.12);">🎥 No Video</span>
                        `}
                        <span style="color: var(--amber-gold); font-size: 0.82rem; font-weight: 700;">⏱ ${lesson.duration || '10 mins'} • 🟡 ${lesson.difficulty || 'Beginner'}</span>
                      </div>

                      <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="btn btn-secondary btn-sm" data-action="reorder-lesson-up" data-course-id="${course.id}" data-lesson-id="${lesson.id}" ${index === 0 ? 'disabled' : ''}>⬆️ Up</button>
                        <button class="btn btn-secondary btn-sm" data-action="reorder-lesson-down" data-course-id="${course.id}" data-lesson-id="${lesson.id}" ${index === course.lessons.length - 1 ? 'disabled' : ''}>⬇️ Down</button>
                        <button class="btn btn-primary btn-sm" data-action="edit-lesson" data-course-id="${course.id}" data-lesson-id="${lesson.id}">✏️ Edit</button>
                        <button class="btn btn-secondary btn-sm" data-action="preview-lesson" data-course-id="${course.id}" data-lesson-id="${lesson.id}">👁️ Preview</button>
                        <button class="btn btn-secondary btn-sm" data-action="admin-delete-lesson" data-course-id="${course.id}" data-lesson-id="${lesson.id}" style="color: #FF5252;">🗑️ Delete</button>
                      </div>
                    </div>
                    ${lesson.description ? `<p style="margin: 8px 0 0 0; color: var(--text-muted); font-size: 0.85rem; line-height: 1.4;">${lesson.description}</p>` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAdminModeration() {
  const { clips } = state;

  return `
    <div>
      <h2 style="margin: 0 0 20px 0; font-size: 1.4rem;">🎥 Community Content Moderation</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px;">
        Review user gameplay video uploads in <code>gameplay-videos</code>. Admins can feature highlight clips, hide offending content, or permanently delete posts from Supabase.
      </p>

      <div class="clips-grid">
        ${clips.map(clip => `
          <div class="clip-card" style="border: 1px solid ${clip.featured ? 'var(--amber-gold)' : 'rgba(255,255,255,0.08)'};">
            <div class="clip-media-box">
              <img src="${clip.mediaUrl}" alt="${clip.title}" class="clip-media-img" />
              ${clip.featured ? `<span style="position: absolute; top: 10px; left: 10px; background: var(--amber-gold); color: #000; font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">⭐ FEATURED</span>` : ''}
              ${clip.hidden ? `<span style="position: absolute; top: 10px; right: 10px; background: #FF5252; color: #FFF; font-weight: 800; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">🚫 HIDDEN</span>` : ''}
            </div>

            <div class="clip-card-body">
              <h3 class="clip-title" style="font-size: 0.95rem;">${clip.title}</h3>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">By: <strong>${clip.authorIgn}</strong></div>

              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn btn-secondary btn-sm" data-action="toggle-feature-post" data-id="${clip.id}">
                  ${clip.featured ? 'Unfeature' : '⭐ Feature'}
                </button>
                <button class="btn btn-secondary btn-sm" data-action="toggle-hide-post" data-id="${clip.id}" style="color: ${clip.hidden ? '#00E676' : '#FF1744'};">
                  ${clip.hidden ? '👁️ Unhide' : '🚫 Hide'}
                </button>
                <button class="btn btn-secondary btn-sm" data-action="admin-delete-post" data-id="${clip.id}" style="color: #FF5252; margin-left: auto;">
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAdminReports() {
  const { contentReports } = state;

  return `
    <div>
      <h2 style="margin: 0 0 20px 0; font-size: 1.4rem;">🚨 User Content Reports Moderation Queue</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px;">
        Review reports submitted by players regarding gameplay posts, comments, or player misconduct.
      </p>

      ${contentReports.length === 0 ? `
        <div style="text-align: center; padding: 40px; background: rgba(0,0,0,0.2); border-radius: 16px;">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">✅</div>
          <p style="color: var(--text-muted); margin: 0;">No active pending reports in queue.</p>
        </div>
      ` : `
        <div class="admin-table-wrapper">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Type</th>
                <th>Content ID</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Reported At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${contentReports.map(r => `
                <tr>
                  <td><code>${String(r.id).slice(0, 8)}</code></td>
                  <td><strong style="text-transform: uppercase;">${r.content_type}</strong></td>
                  <td><code>${String(r.content_id).slice(0, 10)}</code></td>
                  <td><span style="color: var(--amber-gold); font-weight: 700;">${r.reason}</span></td>
                  <td>
                    <span class="badge-status ${r.status === 'resolved' ? 'resolved' : r.status === 'pending' ? 'pending' : 'draft'}">
                      ${r.status}
                    </span>
                  </td>
                  <td>${new Date(r.created_at || Date.now()).toLocaleDateString()}</td>
                  <td>
                    ${r.status === 'pending' ? `
                      <button class="btn btn-primary btn-sm" data-action="resolve-report" data-id="${r.id}" data-status="resolved">
                        ✅ Resolve
                      </button>
                      <button class="btn btn-secondary btn-sm" data-action="resolve-report" data-id="${r.id}" data-status="dismissed">
                        ❌ Dismiss
                      </button>
                    ` : `
                      <span style="color: var(--text-muted); font-size: 0.8rem;">Reviewed</span>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;
}

function renderAdminNews() {
  const { adminNews } = state;

  return `
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="margin: 0; font-size: 1.4rem;">📰 Official News & Announcements Publisher</h2>
        <button class="btn btn-primary btn-sm" id="btn-admin-create-news-2">+ Publish New Announcement</button>
      </div>

      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${adminNews.map(n => `
              <tr>
                <td><strong>${n.title}</strong></td>
                <td><span style="color: var(--primary-fire); font-weight: 700;">${n.category}</span></td>
                <td>
                  <span class="badge-status ${n.published ? 'published' : 'draft'}">
                    ${n.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td>${new Date(n.created_at || Date.now()).toLocaleDateString()}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" data-action="toggle-publish-news" data-id="${n.id}">
                    ${n.published ? 'Unpublish' : 'Publish'}
                  </button>
                  <button class="btn btn-secondary btn-sm" data-action="delete-news" data-id="${n.id}" style="color: #FF5252;">
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminFeatured() {
  const { clips } = state;
  const featuredClips = clips.filter(c => c.featured);

  return `
    <div>
      <h2 style="margin: 0 0 20px 0; font-size: 1.4rem;">⭐ Featured Gameplay Highlights Manager</h2>
      <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px;">
        Highlight community gameplay videos on the Home feed hero section.
      </p>

      ${featuredClips.length === 0 ? `
        <div style="text-align: center; padding: 40px; background: rgba(0,0,0,0.2); border-radius: 16px;">
          <div style="font-size: 2.5rem; margin-bottom: 10px;">⭐</div>
          <p style="color: var(--text-muted); margin: 0;">No featured clips currently marked. Go to Content Moderation tab to feature posts!</p>
        </div>
      ` : `
        <div class="clips-grid">
          ${featuredClips.map(clip => `
            <div class="clip-card" style="border: 2px solid var(--amber-gold);">
              <div class="clip-media-box">
                <img src="${clip.mediaUrl}" alt="${clip.title}" class="clip-media-img" />
              </div>

              <div class="clip-card-body">
                <h3 class="clip-title">${clip.title}</h3>
                <div style="font-size: 0.8rem; color: var(--amber-gold); font-weight: 700; margin-bottom: 12px;">⭐ Featured Highlight</div>
                <button class="btn btn-secondary btn-sm" data-action="toggle-feature-post" data-id="${clip.id}" style="width: 100%; justify-content: center;">
                  ❌ Remove from Featured
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

function renderAdminUsers() {
  const { players, currentUser } = state;
  const allUsers = [currentUser, ...players];

  return `
    <div>
      <h2 style="margin: 0 0 20px 0; font-size: 1.4rem;">👥 Registered Players & User Profiles</h2>

      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Avatar & IGN</th>
              <th>Free Fire UID</th>
              <th>Rank Tier</th>
              <th>K/D Ratio</th>
              <th>Headshot %</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${allUsers.map(u => `
              <tr>
                <td>
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="${u.avatar}" style="width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--primary-fire);" />
                    <strong>${u.ign}</strong>
                  </div>
                </td>
                <td><code>${u.uid}</code></td>
                <td><span class="rank-badge-pill grandmaster" style="font-size: 0.75rem; padding: 2px 8px;">${u.rank}</span></td>
                <td><strong style="color: var(--amber-gold);">${u.kdRatio || '4.85'}</strong></td>
                <td>${u.headshotRate || '68.4%'}</td>
                <td>${u.role || 'Rusher'}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" data-action="view-full-profile" data-id="${u.id}">
                    🔍 View Profile
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminLogs() {
  const { adminLogs } = state;

  return `
    <div>
      <h2 style="margin: 0 0 20px 0; font-size: 1.4rem;">📜 Admin Security Audit Activity Log</h2>

      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Admin Action</th>
              <th>Target Type</th>
              <th>Target ID</th>
              <th>Action Details</th>
            </tr>
          </thead>
          <tbody>
            ${adminLogs.length === 0 ? `
              <tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No admin actions recorded yet.</td></tr>
            ` : adminLogs.map(log => `
              <tr>
                <td style="font-size: 0.8rem; color: var(--text-muted);">${new Date(log.created_at || Date.now()).toLocaleTimeString()}</td>
                <td><strong style="color: var(--primary-fire);">${log.action}</strong></td>
                <td><span style="text-transform: uppercase; font-size: 0.75rem; font-weight: 700;">${log.target_type}</span></td>
                <td><code>${String(log.target_id).slice(0, 12)}</code></td>
                <td>${log.details}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminPanel() {
  const { isAdmin, activeAdminTab, contentReports } = state;

  if (!isAdmin) {
    return `
      <div style="max-width: 600px; margin: 60px auto; text-align: center; background: var(--bg-card); border: 1px solid #FF5252; padding: 40px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.8);">
        <div style="font-size: 3.5rem; margin-bottom: 16px;">🛑</div>
        <h2 style="color: #FF5252; font-family: var(--font-heading); margin: 0 0 10px 0;">ADMIN ACCESS REQUIRED</h2>
        <p style="color: var(--text-light); font-size: 0.95rem; line-height: 1.5;">
          You must be logged in as a verified platform administrator (<strong>UGAT AGENT</strong>) to access the BooyahConnect Admin Panel.
        </p>
        <button class="btn btn-primary" id="nav-home-btn" style="margin-top: 20px;">← Return to Home Feed</button>
      </div>
    `;
  }

  let subContentHtml = '';
  switch (activeAdminTab) {
    case 'overview': subContentHtml = renderAdminOverview(); break;
    case 'academy': subContentHtml = renderAdminAcademy(); break;
    case 'moderation': subContentHtml = renderAdminModeration(); break;
    case 'reports': subContentHtml = renderAdminReports(); break;
    case 'news': subContentHtml = renderAdminNews(); break;
    case 'featured': subContentHtml = renderAdminFeatured(); break;
    case 'users': subContentHtml = renderAdminUsers(); break;
    case 'logs': subContentHtml = renderAdminLogs(); break;
    default: subContentHtml = renderAdminOverview();
  }

  const pendingReportsCount = contentReports.filter(r => r.status === 'pending').length;

  return `
    <div class="admin-page-container">
      <div class="admin-header-banner">
        <div>
          <span class="admin-title-badge">🛡️ PLATFORM ADMINISTRATOR</span>
          <h1 style="margin: 0; font-size: 1.8rem; font-family: var(--font-heading); color: #FFF;">BOOYAHCONNECT ADMIN DASHBOARD</h1>
          <p style="margin: 4px 0 0 0; color: var(--amber-gold); font-size: 0.9rem; font-weight: 700;">
            Logged in as: <strong>${state.currentUser.ign}</strong> (UID: ${state.currentUser.uid})
          </p>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-primary btn-sm" id="btn-admin-create-news">+ Create Announcement</button>
          <button class="btn btn-secondary btn-sm" id="btn-admin-refresh">🔄 Refresh Data</button>
        </div>
      </div>

      <div class="admin-dashboard-layout">
        <aside class="admin-sidebar">
          <button class="admin-nav-item ${activeAdminTab === 'overview' ? 'active' : ''}" data-admin-tab="overview">📊 Overview</button>
          <button class="admin-nav-item ${activeAdminTab === 'academy' ? 'active' : ''}" data-admin-tab="academy">🎓 Academy</button>
          <button class="admin-nav-item ${activeAdminTab === 'moderation' ? 'active' : ''}" data-admin-tab="moderation">🎥 Moderation</button>
          <button class="admin-nav-item ${activeAdminTab === 'reports' ? 'active' : ''}" data-admin-tab="reports">
            🚨 Reports ${pendingReportsCount > 0 ? `<span class="nav-badge">${pendingReportsCount}</span>` : ''}
          </button>
          <button class="admin-nav-item ${activeAdminTab === 'news' ? 'active' : ''}" data-admin-tab="news">📰 News</button>
          <button class="admin-nav-item ${activeAdminTab === 'featured' ? 'active' : ''}" data-admin-tab="featured">⭐ Featured</button>
          <button class="admin-nav-item ${activeAdminTab === 'users' ? 'active' : ''}" data-admin-tab="users">👥 User Roster</button>
          <button class="admin-nav-item ${activeAdminTab === 'logs' ? 'active' : ''}" data-admin-tab="logs">📜 Activity Log</button>
        </aside>

        <main class="admin-main-content">
          ${subContentHtml}
        </main>
      </div>
    </div>
  `;
}

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
    case 'admin': mainContentHtml = renderAdminPanel(); break;
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
  document.querySelectorAll('[data-admin-tab]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.stopPropagation();
      state.setActiveAdminTab(elem.getAttribute('data-admin-tab'));
    });
  });

  const btnClosePreview = document.getElementById('btn-close-lesson-preview');
  if (btnClosePreview) {
    btnClosePreview.addEventListener('click', () => state.closeLessonPreview());
  }

  const closePreviewModalBtn = document.getElementById('close-preview-modal');
  if (closePreviewModalBtn) {
    closePreviewModalBtn.addEventListener('click', () => state.closeLessonPreview());
  }

  const closeEditLessonModalBtn = document.getElementById('close-edit-lesson-modal');
  if (closeEditLessonModalBtn) {
    closeEditLessonModalBtn.addEventListener('click', () => state.closeEditLessonModal());
  }

  const btnCancelEditLesson = document.getElementById('btn-cancel-edit-lesson');
  if (btnCancelEditLesson) {
    btnCancelEditLesson.addEventListener('click', () => state.closeEditLessonModal());
  }

  const btnRemoveLessonVideo = document.getElementById('btn-edit-lesson-remove-video');
  if (btnRemoveLessonVideo && state.selectedEditLessonModalData) {
    btnRemoveLessonVideo.addEventListener('click', () => {
      state.removeLessonVideo(state.selectedEditLessonModalData.courseId, state.selectedEditLessonModalData.lessonId);
    });
  }

  const btnPreviewCurrentVideo = document.getElementById('btn-edit-lesson-preview-video');
  if (btnPreviewCurrentVideo && state.selectedEditLessonModalData) {
    btnPreviewCurrentVideo.addEventListener('click', () => {
      state.openLessonPreview(state.selectedEditLessonModalData.courseId, state.selectedEditLessonModalData.lessonId);
    });
  }

  const formEditLesson = document.getElementById('form-submit-edit-lesson');
  if (formEditLesson && state.selectedEditLessonModalData) {
    formEditLesson.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = state.selectedEditLessonModalData;
      const title = document.getElementById('edit-lesson-title').value;
      const description = document.getElementById('edit-lesson-desc').value;
      const duration = document.getElementById('edit-lesson-duration').value;
      const difficulty = document.getElementById('edit-lesson-difficulty').value;
      const published = document.getElementById('edit-lesson-published').value === 'true';
      const fileInput = document.getElementById('edit-lesson-video-file');
      const videoFile = fileInput && fileInput.files ? fileInput.files[0] : null;

      const btnSave = document.getElementById('btn-save-edit-lesson');
      if (btnSave) {
        btnSave.disabled = true;
        btnSave.innerText = "⏳ Saving & Uploading...";
      }

      await state.updateAcademyLesson(data.courseId, data.lessonId, {
        title, description, duration, difficulty, published
      }, videoFile);
    });
  }

  const btnAddCourseTrigger = document.getElementById('btn-admin-add-course-trigger');
  if (btnAddCourseTrigger) {
    btnAddCourseTrigger.addEventListener('click', () => {
      const title = prompt("Enter Course Title:");
      if (title) {
        const description = prompt("Enter Course Description:");
        const category = prompt("Enter Category (Aim, Movement, Strategy, Esports):", "Aim");
        const difficulty = prompt("Enter Difficulty (Beginner, Intermediate, Advanced):", "Beginner");
        state.createAcademyCourse({ title, description: description || "", category: category || "Aim", difficulty: difficulty || "Beginner" });
      }
    });
  }

  const btnAdminRefresh = document.getElementById('btn-admin-refresh');
  if (btnAdminRefresh) {
    btnAdminRefresh.addEventListener('click', () => {
      state.fetchAdminDashboardData();
      alert("🔄 Admin Dashboard Data Refreshed!");
    });
  }

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
  const navTabElem = e.target.closest('[data-tab]');
  if (navTabElem) {
    const tab = navTabElem.getAttribute('data-tab');
    if (tab) {
      state.isMoreDropdownOpen = false;
      state.setActiveTab(tab);
      return;
    }
  }

  const adminTabElem = e.target.closest('[data-admin-tab]');
  if (adminTabElem) {
    const adminTab = adminTabElem.getAttribute('data-admin-tab');
    if (adminTab) {
      state.setActiveAdminTab(adminTab);
      return;
    }
  }

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
  else if (action === 'toggle-publish-course') {
    const courseId = target.getAttribute('data-course-id');
    state.togglePublishCourse(courseId);
  }
  else if (action === 'admin-delete-course') {
    const courseId = target.getAttribute('data-course-id');
    state.deleteAcademyCourse(courseId);
  }
  else if (action === 'reorder-lesson-up') {
    const courseId = target.getAttribute('data-course-id');
    const lessonId = target.getAttribute('data-lesson-id');
    state.reorderLesson(courseId, lessonId, 'up');
  }
  else if (action === 'reorder-lesson-down') {
    const courseId = target.getAttribute('data-course-id');
    const lessonId = target.getAttribute('data-lesson-id');
    state.reorderLesson(courseId, lessonId, 'down');
  }
  else if (action === 'toggle-publish-lesson') {
    const courseId = target.getAttribute('data-course-id');
    const lessonId = target.getAttribute('data-lesson-id');
    state.togglePublishLesson(courseId, lessonId);
  }
  else if (action === 'admin-delete-lesson') {
    const courseId = target.getAttribute('data-course-id');
    const lessonId = target.getAttribute('data-lesson-id');
    state.deleteAcademyLesson(courseId, lessonId);
  }
  else if (action === 'admin-edit-course-modal') {
    const courseId = target.getAttribute('data-course-id');
    const course = state.academyCourses.find(c => c.id === courseId);
    if (course) {
      const newTitle = prompt("Edit Course Title:", course.title);
      if (newTitle) {
        const newDesc = prompt("Edit Course Description:", course.description);
        state.updateAcademyCourse(courseId, { title: newTitle, description: newDesc || course.description });
      }
    }
  }
  else if (action === 'edit-lesson' || action === 'admin-edit-lesson-modal') {
    const elem = target.closest('[data-course-id]');
    const courseId = elem ? elem.getAttribute('data-course-id') : target.getAttribute('data-course-id');
    const lessonId = elem ? elem.getAttribute('data-lesson-id') : target.getAttribute('data-lesson-id');
    console.log("[Admin Action] Edit Lesson clicked:", { courseId, lessonId });
    if (courseId && lessonId) {
      state.openEditLessonModal(courseId, lessonId);
    }
  }
  else if (action === 'preview-lesson' || action === 'open-lesson-preview-modal' || action === 'open-lesson') {
    const elem = target.closest('[data-course-id]');
    const courseId = elem ? elem.getAttribute('data-course-id') : target.getAttribute('data-course-id');
    const lessonId = elem ? elem.getAttribute('data-lesson-id') : target.getAttribute('data-lesson-id');
    console.log("[Admin Action] Preview Lesson clicked:", { courseId, lessonId });
    if (courseId && lessonId) {
      state.openLessonPreview(courseId, lessonId);
    }
  }
  else if (action === 'admin-add-lesson-modal') {
    const courseId = target.getAttribute('data-course-id');
    const title = prompt("Enter New Lesson Title:");
    if (title) {
      const desc = prompt("Enter Description:");
      const duration = prompt("Enter Duration (e.g. 8 mins):", "10 mins");
      state.createAcademyLesson(courseId, { title, description: desc || "", duration: duration || "10 mins" });
    }
  }
  else if (action === 'toggle-feature-post') {
    state.toggleFeaturePost(id);
  }
  else if (action === 'toggle-hide-post') {
    state.toggleHidePost(id);
  }
  else if (action === 'admin-delete-post') {
    state.adminDeletePost(id);
  }
  else if (action === 'resolve-report') {
    state.resolveReport(id, target.getAttribute('data-status'));
  }
  else if (action === 'toggle-publish-news') {
    state.togglePublishNews(id);
  }
  else if (action === 'delete-news') {
    state.deleteNews(id);
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


// GLOBAL ADMIN DIAGNOSTICS TOOL FOR CONSOLE
window.checkAdminStatus = async function() {
  const client = window.getSupabaseClient ? window.getSupabaseClient() : null;
  if (!client) {
    console.error("❌ Supabase client not initialized.");
    return { error: "Supabase client not initialized" };
  }

  const { data: { user } } = await client.auth.getUser();
  if (!user) {
    console.warn("⚠️ No active authenticated user session found in Supabase.");
    return { status: "No authenticated user session", state_isAdmin: state.isAdmin };
  }

  const { data: adminRow, error: adminErr } = await client
    .from('admin_users')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle();

  let isRpcAdmin = false;
  try {
    const { data: rpcRes } = await client.rpc('is_admin', { user_id: user.id });
    isRpcAdmin = !!rpcRes;
  } catch (e) {}

  const report = {
    authenticated_user_uuid: user.id,
    email: user.email,
    user_metadata: user.user_metadata,
    exists_in_admin_users: !!adminRow,
    admin_row: adminRow,
    is_admin_rpc_result: isRpcAdmin,
    state_isAdmin: state.isAdmin,
    supabase_query_error: adminErr ? adminErr.message : null
  };

  console.log("==========================================");
  console.log("🛡️ BOOYAHCONNECT ADMIN DIAGNOSTICS REPORT");
  console.log("==========================================");
  console.log(JSON.stringify(report, null, 2));
  return report;
};
