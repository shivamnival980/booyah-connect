import { state } from '../state.js';

export function renderLeaderboard() {
  const { players, currentUser } = state;

  // Sort players by Grandmaster stars / rating
  const sortedPlayers = [...players, currentUser].sort((a, b) => {
    if (b.rankStars !== a.rankStars) return b.rankStars - a.rankStars;
    return b.rating - a.rating;
  });

  return `
    <div class="leaderboard-container">
      <!-- Leaderboard Header Banner -->
      <div class="leaderboard-hero">
        <div class="hero-text">
          <span class="leaderboard-tag">🏆 OFFICIAL INDIA RANKINGS</span>
          <h1>GRANDMASTER LEADERBOARD</h1>
          <p>Top Free Fire ranked performers in India across Clash Squad & Battle Royale modes.</p>
        </div>
      </div>

      <!-- Top 3 Podium Showcase -->
      <div class="podium-container">
        ${sortedPlayers[1] ? `
          <div class="podium-card rank-2">
            <div class="podium-rank-badge">#2</div>
            <img src="${sortedPlayers[1].avatar}" alt="${sortedPlayers[1].ign}" class="podium-avatar" />
            <div class="podium-name">${sortedPlayers[1].ign}</div>
            <div class="podium-stars">⭐ ${sortedPlayers[1].rankStars} GM Stars</div>
            <div class="podium-state">📍 ${sortedPlayers[1].state}</div>
          </div>
        ` : ''}

        ${sortedPlayers[0] ? `
          <div class="podium-card rank-1">
            <div class="crown-icon">👑</div>
            <div class="podium-rank-badge">#1</div>
            <img src="${sortedPlayers[0].avatar}" alt="${sortedPlayers[0].ign}" class="podium-avatar" />
            <div class="podium-name">${sortedPlayers[0].ign}</div>
            <div class="podium-stars">⭐ ${sortedPlayers[0].rankStars} GM Stars</div>
            <div class="podium-state">📍 ${sortedPlayers[0].state}</div>
          </div>
        ` : ''}

        ${sortedPlayers[2] ? `
          <div class="podium-card rank-3">
            <div class="podium-rank-badge">#3</div>
            <img src="${sortedPlayers[2].avatar}" alt="${sortedPlayers[2].ign}" class="podium-avatar" />
            <div class="podium-name">${sortedPlayers[2].ign}</div>
            <div class="podium-stars">⭐ ${sortedPlayers[2].rankStars} GM Stars</div>
            <div class="podium-state">📍 ${sortedPlayers[2].state}</div>
          </div>
        ` : ''}
      </div>

      <!-- Leaderboard Table -->
      <div class="leaderboard-table-card">
        <table class="lb-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player IGN & UID</th>
              <th>State</th>
              <th>Role</th>
              <th>Rank Tier</th>
              <th>K/D Ratio</th>
              <th>Headshot %</th>
              <th>Audience Rating</th>
            </tr>
          </thead>
          <tbody>
            ${sortedPlayers.map((player, index) => `
              <tr class="${player.id === currentUser.id ? 'highlight-me' : ''}">
                <td class="lb-rank">
                  ${index === 0 ? '🥇 1' : index === 1 ? '🥈 2' : index === 2 ? '🥉 3' : `#${index + 1}`}
                </td>
                <td class="lb-player-cell">
                  <img src="${player.avatar}" alt="Avatar" class="lb-avatar" />
                  <div>
                    <div class="lb-ign">${player.ign} ${player.id === currentUser.id ? '(You)' : ''}</div>
                    <div class="lb-uid">UID: ${player.uid}</div>
                  </div>
                </td>
                <td class="lb-state">📍 ${player.state}</td>
                <td class="lb-role"><span class="role-chip">${player.role}</span></td>
                <td><span class="rank-pill gm">Grandmaster ⭐${player.rankStars}</span></td>
                <td><strong>${player.kdRatio}</strong></td>
                <td>${player.headshotRate}</td>
                <td>⭐ <strong>${player.rating}</strong> (${player.ratingsCount})</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
