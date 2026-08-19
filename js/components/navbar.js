import { state } from '../state.js';

export function renderNavbar() {
  const { activeTab, searchQuery, currentUser, challenges, messages } = state;
  const pendingChallengesCount = challenges.filter(c => c.opponentId === currentUser.id && c.status === 'Pending').length;

  return `
    <header class="navbar">
      <div class="navbar-container">
        <!-- Logo & Branding -->
        <div class="navbar-brand" id="nav-brand">
          <div class="logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z" />
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-title">BOOYAH<span class="brand-highlight">CONNECT</span></span>
            <span class="brand-subtitle">INDIA FREE FIRE NETWORK</span>
          </div>
        </div>

        <!-- Global Search Bar -->
        <div class="navbar-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="global-search-input" placeholder="Search Free Fire UIDs, IGNs, States, or Guilds..." value="${searchQuery}" />
        </div>

        <!-- Main Navigation Tabs -->
        <nav class="navbar-tabs">
          <button class="nav-tab ${activeTab === 'feed' ? 'active' : ''}" data-tab="feed">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Clips Feed</span>
          </button>

          <button class="nav-tab ${activeTab === 'connect' ? 'active' : ''}" data-tab="connect">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>Network</span>
          </button>

          <button class="nav-tab ${activeTab === 'challenges' ? 'active' : ''}" data-tab="challenges">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <path d="M12 18v-6"></path>
              <path d="M9 15l3 3 3-3"></path>
            </svg>
            <span>1v1 Rooms</span>
            ${pendingChallengesCount > 0 ? `<span class="nav-badge pulse">${pendingChallengesCount}</span>` : ''}
          </button>

          <button class="nav-tab ${activeTab === 'leaderboard' ? 'active' : ''}" data-tab="leaderboard">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
            </svg>
            <span>Leaderboard</span>
          </button>

          <button class="nav-tab ${activeTab === 'news' ? 'active' : ''}" data-tab="news">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
              <path d="M18 14h-8"></path>
              <path d="M15 18h-5"></path>
              <path d="M10 6h8v4h-8V6z"></path>
            </svg>
            <span>News & Meta</span>
          </button>

          <button class="nav-tab ${activeTab === 'chat' ? 'active' : ''}" data-tab="chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Squad Chat</span>
          </button>
        </nav>

        <!-- User Profile Pill & Actions -->
        <div class="navbar-user-actions">
          <div class="coin-badge">
            <span class="coin-icon">🪙</span>
            <span class="coin-value">${currentUser.coins.toLocaleString()}</span>
          </div>

          <button class="btn btn-secondary btn-sm" id="btn-login-modal">
            🔑 Login / Switch
          </button>

          <button class="nav-profile-btn ${activeTab === 'profile' ? 'active' : ''}" data-tab="profile" id="user-profile-trigger">
            <img src="${currentUser.avatar}" alt="Avatar" class="user-avatar-tiny" />
            <div class="user-info-mini">
              <span class="user-ign-mini">${currentUser.ign}</span>
              <span class="user-rank-mini badge-gm">${currentUser.rank} ⭐${currentUser.rankStars}</span>
            </div>
          </button>
        </div>
      </div>
    </header>
  `;
}
