import { state } from '../state.js';

export function renderModals() {
  const { selectedPlayerModal, selectedChallengeModalPlayer, selectedRatingModalPlayer, selectedUploadModal, players } = state;

  return `
    <!-- Player Deep-Dive Modal -->
    ${selectedPlayerModal ? `
      <div class="modal-overlay" id="modal-player">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-player-modal">&times;</button>
          
          <div class="modal-player-header">
            <img src="${selectedPlayerModal.avatar}" alt="${selectedPlayerModal.ign}" class="modal-avatar" />
            <div>
              <h2>${selectedPlayerModal.ign}</h2>
              <div class="modal-sub-info">
                <span>UID: <strong>${selectedPlayerModal.uid}</strong></span>
                <span class="dot">•</span>
                <span>📍 ${selectedPlayerModal.city}, ${selectedPlayerModal.state}</span>
              </div>
              <span class="rank-pill gm">👑 ${selectedPlayerModal.rank} ⭐${selectedPlayerModal.rankStars}</span>
            </div>
          </div>

          <div class="modal-body-content">
            <p class="modal-bio">${selectedPlayerModal.bio}</p>

            <div class="modal-stats-grid">
              <div class="modal-stat">
                <span class="val">${selectedPlayerModal.kdRatio}</span>
                <span class="lbl">K/D Ratio</span>
              </div>
              <div class="modal-stat">
                <span class="val">${selectedPlayerModal.headshotRate}</span>
                <span class="lbl">Headshot Rate</span>
              </div>
              <div class="modal-stat">
                <span class="val">${selectedPlayerModal.winRate}</span>
                <span class="lbl">Win Rate</span>
              </div>
              <div class="modal-stat">
                <span class="val">⭐ ${selectedPlayerModal.rating}</span>
                <span class="lbl">Audience Rating</span>
              </div>
            </div>

            <h3>Endorsements</h3>
            <div class="modal-endorsements">
              ${selectedPlayerModal.endorsements.map(e => `
                <button class="endorse-btn-action" data-action="endorse" data-player-id="${selectedPlayerModal.id}" data-skill="${e.skill}">
                  👍 ${e.skill} (${e.count})
                </button>
              `).join('')}
            </div>
          </div>

          <div class="modal-footer-actions">
            <button class="btn btn-challenge" data-action="challenge" data-id="${selectedPlayerModal.id}">
              ⚔️ Challenge 1v1 Room
            </button>
            <button class="btn btn-primary" data-action="toggle-connect" data-id="${selectedPlayerModal.id}">
              ${selectedPlayerModal.connectionState === 'connected' ? 'Connected' : '+ Connect'}
            </button>
          </div>
        </div>
      </div>
    ` : ''}

    <!-- Challenge 1v1 Room Modal -->
    ${selectedChallengeModalPlayer ? `
      <div class="modal-overlay" id="modal-challenge">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-challenge-modal">&times;</button>
          
          <h2>⚔️ Challenge ${selectedChallengeModalPlayer.ign}</h2>
          <p class="modal-desc">Setup a Custom Room match, choose match format and stake Booyah Coins.</p>

          <form id="form-send-challenge">
            <div class="form-group">
              <label>Match Mode</label>
              <select id="chal-mode" class="form-control">
                <option value="1v1 Headshot Only Room">1v1 Headshot Only Room</option>
                <option value="4v4 Clash Squad Custom">4v4 Clash Squad Custom</option>
                <option value="1v1 Desert Eagle Headshot">1v1 Desert Eagle Headshot</option>
                <option value="BR Solo vs Solo Battle">BR Solo vs Solo Battle</option>
              </select>
            </div>

            <div class="form-group">
              <label>Map</label>
              <select id="chal-map" class="form-control">
                <option value="Bermuda (Ironworks)">Bermuda (Ironworks)</option>
                <option value="Bermuda Remastered">Bermuda Remastered</option>
                <option value="Kalahari">Kalahari</option>
                <option value="Purgatory">Purgatory</option>
              </select>
            </div>

            <div class="form-group">
              <label>Coin Stake (Booyah Coins)</label>
              <input type="number" id="chal-stake" class="form-control" value="500" min="100" max="5000" />
            </div>

            <div class="form-group">
              <label>Scheduled Time</label>
              <input type="text" id="chal-time" class="form-control" value="Today at 8:30 PM IST" />
            </div>

            <div class="modal-footer-actions">
              <button type="button" class="btn btn-secondary" id="cancel-challenge-modal">Cancel</button>
              <button type="submit" class="btn btn-primary">Send Challenge Invites</button>
            </div>
          </form>
        </div>
      </div>
    ` : ''}

    <!-- Rating Modal -->
    ${selectedRatingModalPlayer ? `
      <div class="modal-overlay" id="modal-rating">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-rating-modal">&times;</button>
          
          <h2>⭐ Rate ${selectedRatingModalPlayer.ign}</h2>
          <p class="modal-desc">Submit your audience feedback based on recent gameplay performances.</p>

          <form id="form-submit-rating">
            <div class="rating-sliders">
              <div class="slider-group">
                <label>Aim Precision: <span id="val-aim">5.0</span> / 5.0</label>
                <input type="range" id="rate-aim" min="1" max="5" step="0.5" value="5" />
              </div>

              <div class="slider-group">
                <label>Teamwork & Revives: <span id="val-teamwork">4.5</span> / 5.0</label>
                <input type="range" id="rate-teamwork" min="1" max="5" step="0.5" value="4.5" />
              </div>

              <div class="slider-group">
                <label>Clutch IQ & Strategy: <span id="val-iq">5.0</span> / 5.0</label>
                <input type="range" id="rate-iq" min="1" max="5" step="0.5" value="5" />
              </div>

              <div class="slider-group">
                <label>Sportsmanship: <span id="val-sportsmanship">5.0</span> / 5.0</label>
                <input type="range" id="rate-sportsmanship" min="1" max="5" step="0.5" value="5" />
              </div>
            </div>

            <div class="form-group margin-top">
              <label>Review Comment (Optional)</label>
              <textarea id="rate-review" class="form-control" rows="3" placeholder="Insane Gloo wall speed and shot accuracy..."></textarea>
            </div>

            <div class="modal-footer-actions">
              <button type="button" class="btn btn-secondary" id="cancel-rating-modal">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit Audience Review</button>
            </div>
          </form>
        </div>
      </div>
    ` : ''}

    <!-- Upload Gameplay Clip Modal -->
    ${selectedUploadModal ? `
      <div class="modal-overlay" id="modal-upload">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-upload-modal">&times;</button>
          
          <h2>🎥 Upload Gameplay Highlight</h2>
          <p class="modal-desc">Share your Free Fire 1v4 clutch or headshot video to the community feed.</p>

          <form id="form-upload-clip">
            <div class="form-group">
              <label>Clip Title</label>
              <input type="text" id="upload-title" class="form-control" placeholder="e.g. 1v4 Clutch in CS Ranked Grandmaster Lobby!" required />
            </div>

            <div class="form-group">
              <label>Description</label>
              <textarea id="upload-desc" class="form-control" rows="2" placeholder="Explain the gameplay moment..." required></textarea>
            </div>

            <div class="form-group">
              <label>Tags (Comma separated)</label>
              <input type="text" id="upload-tags" class="form-control" placeholder="1v4, CS-Ranked, Headshots, Grandmaster" />
            </div>

            <div class="form-group">
              <label>Select Video / Image File from Device</label>
              <input type="file" id="upload-file-input" class="form-control" accept="video/*,image/*" />
              <small style="color: var(--text-muted); display: block; margin-top: 4px;">Or choose a demo showcase thumbnail below:</small>
            </div>

            <div class="form-group">
              <label>Demo Showcase Media</label>
              <select id="upload-media-preset" class="form-control">
                <option value="assets/gameplay_thumb1.jpg">Victory BOOYAH Screenshot Showcase</option>
                <option value="assets/ff_banner.jpg">Esports Fire Arena Showcase</option>
                <option value="assets/ff_news_thumb.jpg">Tournament Final Circle Moment</option>
              </select>
            </div>

            <div class="modal-footer-actions">
              <button type="button" class="btn btn-secondary" id="cancel-upload-modal">Cancel</button>
              <button type="submit" class="btn btn-primary">Publish to Community Feed</button>
            </div>
          </form>
        </div>
      </div>
    ` : ''}

    <!-- Player Login & Account Switcher Modal -->
    ${state.selectedLoginModal ? `
      <div class="modal-overlay" id="modal-login">
        <div class="modal-card">
          <button class="modal-close-btn" id="close-login-modal">&times;</button>
          
          <h2>🔑 Free Fire Player Login / Register</h2>
          <p class="modal-desc">Login with your in-game identity or switch player profile.</p>

          <form id="form-user-login">
            <div class="form-group">
              <label>In-Game Name (IGN)</label>
              <input type="text" id="login-ign" class="form-control" value="${state.currentUser.ign}" required />
            </div>

            <div class="form-group">
              <label>Free Fire UID (8-10 digits)</label>
              <input type="text" id="login-uid" class="form-control" value="${state.currentUser.uid}" required />
            </div>

            <div class="form-group">
              <label>State in India</label>
              <select id="login-state" class="form-control">
                <option value="Maharashtra" ${state.currentUser.state === 'Maharashtra' ? 'selected' : ''}>Maharashtra</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Punjab">Punjab</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>

            <div class="form-group">
              <label>Primary Combat Role</label>
              <select id="login-role" class="form-control">
                <option value="IGL / Rusher" ${state.currentUser.role.includes('IGL') ? 'selected' : ''}>IGL / Rusher</option>
                <option value="Sniper">Sniper</option>
                <option value="Rusher">Rusher</option>
                <option value="Support">Support</option>
                <option value="Entry Fragger">Entry Fragger</option>
              </select>
            </div>

            <div class="modal-footer-actions">
              <button type="button" class="btn btn-secondary" id="cancel-login-modal">Cancel</button>
              <button type="submit" class="btn btn-primary">Save & Sign In</button>
            </div>
          </form>
        </div>
      </div>
    ` : ''}
  `;
}
