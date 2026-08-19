import { state } from '../state.js';

export function renderConnections() {
  const { players, searchQuery } = state;

  const filteredPlayers = players.filter(p => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return p.ign.toLowerCase().includes(q) ||
           p.uid.includes(q) ||
           p.state.toLowerCase().includes(q) ||
           p.role.toLowerCase().includes(q) ||
           p.guild.toLowerCase().includes(q);
  });

  return `
    <div class="connections-container">
      <!-- Network Header -->
      <div class="network-header">
        <div>
          <h2>LinkedIn Player Network</h2>
          <p>Connect with verified Free Fire pros across India, invite teammates to your Guild, and challenge rivals to 1v1 Custom Rooms!</p>
        </div>
        <div class="network-stats-pill">
          <span>👥 ${players.length} Pro Gamers Listed</span>
        </div>
      </div>

      <!-- Filters & State Bar -->
      <div class="filter-bar">
        <div class="filter-group">
          <label>Filter by Role:</label>
          <select id="role-filter" class="filter-select">
            <option value="all">All Roles (Rusher, Sniper, IGL, Support)</option>
            <option value="Rusher">Rusher</option>
            <option value="Sniper">Sniper</option>
            <option value="IGL">IGL / Shotcaller</option>
            <option value="Support">Support</option>
            <option value="Entry Fragger">Entry Fragger</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Filter by State:</label>
          <select id="state-filter" class="filter-select">
            <option value="all">All States of India</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Punjab">Punjab</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </select>
        </div>
      </div>

      <!-- Player Cards Grid -->
      <div class="players-grid">
        ${filteredPlayers.map(player => `
          <div class="player-card" data-player-id="${player.id}">
            <!-- Header Glow Banner -->
            <div class="player-card-banner">
              <span class="state-badge">📍 ${player.state}</span>
              <span class="rank-badge-pill ${player.rank.toLowerCase()}">${player.rank} ⭐${player.rankStars}</span>
            </div>

            <!-- Profile Info -->
            <div class="player-card-body">
              <div class="player-avatar-wrapper" data-action="view-profile" data-id="${player.id}">
                <img src="${player.avatar}" alt="${player.ign}" class="player-avatar" />
              </div>
              <h3 class="player-ign" data-action="view-profile" data-id="${player.id}">${player.ign}</h3>
              <div class="player-uid">UID: ${player.uid}</div>
              <div class="player-role">Role: <strong>${player.role}</strong></div>
              <div class="player-guild">Guild: ${player.guild}</div>

              <!-- Rating & Stats Bar -->
              <div class="player-metrics">
                <div class="metric-box">
                  <span class="metric-val">⭐ ${player.rating}</span>
                  <span class="metric-lbl">Audience Rating</span>
                </div>
                <div class="metric-box">
                  <span class="metric-val">${player.kdRatio}</span>
                  <span class="metric-lbl">K/D Ratio</span>
                </div>
                <div class="metric-box">
                  <span class="metric-val">${player.headshotRate}</span>
                  <span class="metric-lbl">Headshot %</span>
                </div>
              </div>

              <!-- Top Endorsements -->
              <div class="player-endorsements-preview">
                <span class="endorse-title">Top Endorsement:</span>
                <span class="endorse-chip" data-action="endorse" data-player-id="${player.id}" data-skill="${player.endorsements[0]?.skill}">
                  👍 ${player.endorsements[0]?.skill} (${player.endorsements[0]?.count})
                </span>
              </div>

              <!-- Action Buttons -->
              <div class="player-card-actions">
                <button class="btn btn-connect ${player.connectionState}" data-action="toggle-connect" data-id="${player.id}">
                  ${player.connectionState === 'connected' ? '✓ Connected' : player.connectionState === 'pending' ? '⏳ Request Sent' : '+ Connect'}
                </button>

                <button class="btn btn-challenge" data-action="challenge" data-id="${player.id}">
                  ⚔️ Challenge 1v1
                </button>

                <button class="btn btn-icon-only" data-action="rate" data-id="${player.id}" title="Rate Player">
                  ⭐
                </button>
                <button class="btn btn-icon-only" data-action="message" data-id="${player.id}" title="Direct Message">
                  💬
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
