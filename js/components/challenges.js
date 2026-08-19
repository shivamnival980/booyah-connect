import { state } from '../state.js';

  const { challenges, challengeFilter, currentUser } = state;

  const filteredChallenges = challenges.filter(c => {
    if (!challengeFilter || challengeFilter === 'All') return true;
    if (challengeFilter === 'Pending') return c.status === 'Pending';
    if (challengeFilter === 'Accepted') return c.status === 'Accepted';
    if (challengeFilter === 'Completed') return c.status === 'Completed';
    return true;
  });

  const filterTabs = ['All', 'Pending', 'Accepted', 'Completed'];

  return `
    <div class="challenges-container">
      <div class="challenges-header">
        <div>
          <h2>⚔️ Custom Room Challenge Manager</h2>
          <p>Organize 1v1 Room duels or 4v4 Clash Squad Custom matches. Stake Booyah Coins, share Room ID & Pass, and submit screenshot proof for win verifications!</p>
        </div>
        <button class="btn btn-primary" id="btn-create-challenge">
          + Create Room Challenge
        </button>
      </div>

      <!-- Challenge Tabs / Filter -->
      <div class="challenge-tabs">
        ${filterTabs.map(tab => `
          <span class="chal-tab ${challengeFilter === tab ? 'active' : ''}" data-action="filter-challenge" data-filter="${tab}">
            ${tab === 'All' ? `All Challenges (${challenges.length})` : tab === 'Pending' ? 'Pending Acceptance' : tab === 'Accepted' ? 'Upcoming Matches' : 'Match Results'}
          </span>
        `).join('')}
      </div>

      <!-- List of Challenges -->
      <div class="challenges-list">
        ${filteredChallenges.length === 0 ? `
          <div class="empty-state">
            <div class="empty-icon">⚔️</div>
            <h3>No challenges in this status</h3>
          </div>
        ` : filteredChallenges.map(c => {
          const isChallenger = c.challengerId === currentUser.id;
          const opponentName = isChallenger ? c.opponentIgn : c.challengerIgn;
          const opponentAvatar = isChallenger ? c.opponentAvatar : c.challengerAvatar;

          return `
            <div class="challenge-card ${c.status.toLowerCase()}">
              <div class="chal-badge-status ${c.status.toLowerCase()}">
                ${c.status === 'Pending' ? '⏳ PENDING RESPONSE' : c.status === 'Accepted' ? '⚔️ MATCH SCHEDULED' : '🏆 MATCH COMPLETED'}
              </div>

              <div class="chal-versus-container">
                <!-- Challenger -->
                <div class="chal-player">
                  <img src="${c.challengerAvatar}" alt="Avatar" class="chal-avatar" />
                  <div class="chal-name">${c.challengerIgn}</div>
                  <span class="chal-role-tag">${isChallenger ? 'You (Host)' : 'Challenger'}</span>
                </div>

                <div class="chal-vs-badge">
                  <span>VS</span>
                  <div class="stake-tag">💰 ${c.stake}</div>
                </div>

                <!-- Opponent -->
                <div class="chal-player">
                  <img src="${c.opponentAvatar}" alt="Avatar" class="chal-avatar" />
                  <div class="chal-name">${c.opponentIgn}</div>
                  <span class="chal-role-tag">${!isChallenger ? 'You' : 'Opponent'}</span>
                </div>
              </div>

              <!-- Match Details -->
              <div class="chal-details-grid">
                <div class="chal-detail-item">
                  <span class="lbl">Match Mode:</span>
                  <span class="val">${c.mode}</span>
                </div>
                <div class="chal-detail-item">
                  <span class="lbl">Map:</span>
                  <span class="val">${c.map}</span>
                </div>
                <div class="chal-detail-item">
                  <span class="lbl">Scheduled Time:</span>
                  <span class="val">${c.scheduledTime}</span>
                </div>
                <div class="chal-detail-item">
                  <span class="lbl">Room ID & Pass:</span>
                  <span class="val room-credentials">ID: <strong>${c.roomId}</strong> | Pass: <strong>${c.roomPass}</strong></span>
                </div>
              </div>

              <!-- Winner / Proof Banner if Completed -->
              ${c.status === 'Completed' ? `
                <div class="chal-completed-banner">
                  <span>🏆 Winner: <strong>${c.winnerId === currentUser.id ? currentUser.ign : opponentName}</strong></span>
                  <span class="proof-verified">✓ Screenshot Proof Verified</span>
                </div>
              ` : ''}

              <!-- Action Bar -->
              <div class="chal-action-bar">
                ${c.status === 'Pending' && !isChallenger ? `
                  <button class="btn btn-success btn-sm" data-action="accept-challenge" data-id="${c.id}">Accept Challenge</button>
                  <button class="btn btn-danger btn-sm" data-action="reject-challenge" data-id="${c.id}">Decline</button>
                ` : ''}

                ${c.status === 'Accepted' ? `
                  <button class="btn btn-primary btn-sm" data-action="complete-challenge" data-id="${c.id}">
                    📸 Submit Victory Screenshot
                  </button>
                ` : ''}

                <button class="btn btn-secondary btn-sm" data-action="copy-room" data-id="${c.roomId}" data-pass="${c.roomPass}">
                  📋 Copy Room Info
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
