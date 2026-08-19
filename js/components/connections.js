import { state } from '../state.js';

export function renderConnections() {
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

  const allIndiaStates = [
    "Maharashtra", "Himachal Pradesh", "Delhi NCR", "West Bengal", "Punjab", "Tamil Nadu",
    "Uttar Pradesh", "Gujarat", "Karnataka", "Kerala", "Rajasthan", "Bihar", "Assam", "Telangana"
  ];

  const skillOptions = [
    { val: "all", label: "🎯 All Weapons & Skills" },
    { val: "AWM Sniper", label: "🎯 AWM / Double AWM Sniper" },
    { val: "MP40 Cobra", label: "⚡ MP40 Cobra Rusher" },
    { val: "M1887 One-Shot", label: "💥 M1887 One-Shot Shotgun" },
    { val: "Gloo Wall Reflex", label: "🛡️ Gloo Wall Fast Reflex" },
    { val: "IGL Shotcaller", label: "🧠 IGL Strategy Shotcaller" }
  ];

  return `
    <div class="connections-container">
      <div class="network-header">
        <div>
          <h2>LinkedIn Player Network</h2>
          <p>Find & connect with verified Free Fire pros across India by Weapon Skills (AWM, MP40, M1887), Roles & Regional Locations!</p>
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
            <option value="Support" ${roleFilter === 'Support' ? 'selected' : ''}>Support</option>
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
              <div class="player-avatar-wrapper" data-action="view-profile" data-id="${player.id}">
                <img src="${player.avatar}" alt="${player.ign}" class="player-avatar" />
              </div>
              <h3 class="player-ign" data-action="view-profile" data-id="${player.id}">${player.ign}</h3>
              <div class="player-uid">UID: ${player.uid}</div>
              <div class="player-role">Role: <strong>${player.role}</strong></div>

              <div class="player-skills-container" style="margin: 8px 0; display: flex; flex-wrap: wrap; gap: 4px; justify-content: center;">
                ${(player.skills || ["AWM Sniper", "M1887 One-Shot"]).map(sk => `
                  <span class="skill-chip ${skillFilter === sk ? 'active' : ''}" data-action="filter-skill-chip" data-skill="${sk}" style="font-size: 0.72rem; background: rgba(255, 183, 0, 0.15); color: var(--amber-gold); padding: 2px 8px; border-radius: 12px; cursor: pointer;">
                    ⚡ ${sk}
                  </span>
                `).join('')}
              </div>

              <div class="player-metrics">
                <div class="metric-box"><span class="metric-val">⭐ ${player.rating}</span><span class="metric-lbl">Rating</span></div>
                <div class="metric-box"><span class="metric-val">${player.kdRatio}</span><span class="metric-lbl">K/D</span></div>
                <div class="metric-box"><span class="metric-val">${player.headshotRate}</span><span class="metric-lbl">HS %</span></div>
              </div>

              <!-- TWO EQUAL-WIDTH CENTERED BUTTONS -->
              <div class="player-card-actions">
                <button class="btn btn-connect ${player.connectionState}" data-action="toggle-connect" data-id="${player.id}">
                  ${player.connectionState === 'connected' ? '✓ Connected' : player.connectionState === 'pending' ? '⏳ Pending' : '+ Connect'}
                </button>
                <button class="btn btn-primary" data-action="view-profile" data-id="${player.id}">
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
