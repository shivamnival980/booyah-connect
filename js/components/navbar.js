import { state } from '../state.js';

export function renderNavbar() {
  const { activeTab, searchQuery, currentUser, challenges } = state;
  const pendingChallengesCount = challenges.filter(c => c.opponentId === currentUser.id && c.status === 'Pending').length;

  return `
    <header class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand" id="nav-brand">
          <div class="logo-icon">🔥</div>
          <div class="brand-text">
            <span class="brand-title">BOOYAH<span class="brand-highlight">CONNECT</span></span>
            <span class="brand-subtitle">INDIA FREE FIRE NETWORK</span>
          </div>
        </div>

        <div class="navbar-search">
          <input type="text" id="global-search-input" placeholder="Search UIDs, IGNs, States..." value="${searchQuery}" />
        </div>

        <nav class="navbar-tabs">
          <button class="nav-tab ${activeTab === 'feed' ? 'active' : ''}" data-tab="feed" id="nav-home-btn">
            🏠 Home
          </button>
          <button class="nav-tab ${activeTab === 'connect' ? 'active' : ''}" data-tab="connect">Network</button>
          <button class="nav-tab ${activeTab === 'challenges' ? 'active' : ''}" data-tab="challenges">
            1v1 Rooms ${pendingChallengesCount > 0 ? `<span class="nav-badge">${pendingChallengesCount}</span>` : ''}
          </button>
          <button class="nav-tab ${activeTab === 'leaderboard' ? 'active' : ''}" data-tab="leaderboard">Leaderboard</button>
          <button class="nav-tab ${activeTab === 'news' ? 'active' : ''}" data-tab="news">News & Meta</button>
          <button class="nav-tab ${activeTab === 'chat' ? 'active' : ''}" data-tab="chat">Squad Chat</button>
        </nav>

        <div class="navbar-user-actions">
          <div class="coin-badge">
            <span>🪙</span>
            <span>${currentUser.coins.toLocaleString()}</span>
          </div>

          <button class="btn btn-secondary btn-sm" id="btn-login-modal">🔑 Login / Switch</button>

          <button class="nav-profile-btn ${activeTab === 'profile' ? 'active' : ''}" data-tab="profile">
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
