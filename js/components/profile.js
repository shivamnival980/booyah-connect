import { state } from '../state.js';

export function renderProfile() {
  const { currentUser, clips, challenges } = state;
  const myClips = clips.filter(c => c.authorId === currentUser.id);
  const myCompletedChallenges = challenges.filter(c => (c.challengerId === currentUser.id || c.opponentId === currentUser.id) && c.status === 'Completed');

  return `
    <div class="profile-page-container">
      <!-- Profile Header Banner -->
      <div class="profile-banner-card">
        <div class="profile-cover"></div>
        <div class="profile-header-main">
          <img src="${currentUser.avatar}" alt="${currentUser.ign}" class="profile-large-avatar" />
          
          <div class="profile-title-area">
            <div class="profile-name-row">
              <h1 class="profile-ign">${currentUser.ign}</h1>
              <span class="rank-pill gm">👑 ${currentUser.rank} ⭐${currentUser.rankStars}</span>
            </div>

            <div class="profile-meta-chips">
              <span class="meta-chip">🆔 UID: <strong>${currentUser.uid}</strong></span>
              <span class="meta-chip">📍 ${currentUser.city}, ${currentUser.state}</span>
              <span class="meta-chip">🛡️ Guild: ${currentUser.guild}</span>
              <span class="meta-chip">⚡ Level ${currentUser.level}</span>
            </div>

            <p class="profile-bio">${currentUser.bio}</p>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="profile-stats-grid">
        <div class="stat-card">
          <div class="stat-icon">🔥</div>
          <div class="stat-value">${currentUser.kdRatio}</div>
          <div class="stat-label">K/D Ratio</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">🎯</div>
          <div class="stat-value">${currentUser.headshotRate}</div>
          <div class="stat-label">Headshot Rate</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-value">${currentUser.winRate}</div>
          <div class="stat-label">Win Rate</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">⚔️</div>
          <div class="stat-value">${currentUser.booyahs}</div>
          <div class="stat-label">Total BOOYAHs</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">⭐</div>
          <div class="stat-value">${currentUser.rating} / 5.0</div>
          <div class="stat-label">Audience Rating (${currentUser.ratingsCount})</div>
        </div>
      </div>

      <!-- Skills Endorsements Section -->
      <div class="endorsements-section-card">
        <h3>Verified Player Endorsements</h3>
        <div class="endorsements-flex">
          ${currentUser.endorsements.map(e => `
            <div class="endorse-big-chip">
              <span class="chip-skill">${e.skill}</span>
              <span class="chip-count">👍 ${e.count} endorsements</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- My Clips Showcase -->
      <div class="my-clips-section">
        <h3>My Published Gameplay Highlights (${myClips.length})</h3>
        <div class="my-clips-grid">
          ${myClips.map(clip => `
            <div class="my-clip-item">
              <img src="${clip.mediaUrl}" alt="${clip.title}" class="my-clip-img" />
              <div class="my-clip-info">
                <h4>${clip.title}</h4>
                <div class="my-clip-stats">
                  <span>❤️ ${clip.likes}</span>
                  <span>👁️ ${clip.views}</span>
                  <span>💬 ${clip.comments.length}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
