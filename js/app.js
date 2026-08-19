import { state } from './state.js';
import { renderNavbar } from './components/navbar.js';
import { renderFeed } from './components/feed.js';
import { renderConnections } from './components/connections.js';
import { renderChallenges } from './components/challenges.js';
import { renderLeaderboard } from './components/leaderboard.js';
import { renderNews } from './components/news.js';
import { renderChat } from './components/chat.js';
import { renderProfile } from './components/profile.js';
import { renderModals } from './components/modals.js';

function renderApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  let mainContentHtml = '';

  switch (state.activeTab) {
    case 'feed':
      mainContentHtml = renderFeed();
      break;
    case 'connect':
      mainContentHtml = renderConnections();
      break;
    case 'challenges':
      mainContentHtml = renderChallenges();
      break;
    case 'leaderboard':
      mainContentHtml = renderLeaderboard();
      break;
    case 'news':
      mainContentHtml = renderNews();
      break;
    case 'chat':
      mainContentHtml = renderChat();
      break;
    case 'profile':
      mainContentHtml = renderProfile();
      break;
    default:
      mainContentHtml = renderFeed();
  }

  appRoot.innerHTML = `
    ${renderNavbar()}
    <main class="main-body">
      ${mainContentHtml}
    </main>
    ${renderModals()}
  `;

  attachEventListeners();
}

function attachEventListeners() {
  // Navigation Tabs
  document.querySelectorAll('[data-tab]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      const tab = elem.getAttribute('data-tab');
      state.setActiveTab(tab);
    });
  });

  // Global Search
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.setSearchQuery(e.target.value);
    });
  }

  // Upload Clip Trigger
  const btnUpload = document.getElementById('btn-upload-clip');
  if (btnUpload) {
    btnUpload.addEventListener('click', () => state.toggleUploadModal(true));
  }

  // Login Modal Trigger
  const btnLogin = document.getElementById('btn-login-modal');
  if (btnLogin) {
    btnLogin.addEventListener('click', () => state.toggleLoginModal(true));
  }

  // Action delegation for click events
  document.addEventListener('click', handleGlobalClick);

  // User Login Form Submission
  const formLogin = document.getElementById('form-user-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const ign = document.getElementById('login-ign').value;
      const uid = document.getElementById('login-uid').value;
      const userState = document.getElementById('login-state').value;
      const role = document.getElementById('login-role').value;

      state.loginUser({ ign, uid, state: userState, role });
    });
  }

  // Challenge Form Submission
  const formChallenge = document.getElementById('form-send-challenge');
  if (formChallenge) {
    formChallenge.addEventListener('submit', (e) => {
      e.preventDefault();
      const opponent = state.selectedChallengeModalPlayer;
      if (!opponent) return;

      const mode = document.getElementById('chal-mode').value;
      const map = document.getElementById('chal-map').value;
      const stake = document.getElementById('chal-stake').value;
      const scheduledTime = document.getElementById('chal-time').value;

      state.sendChallenge({
        opponentId: opponent.id,
        opponentIgn: opponent.ign,
        opponentAvatar: opponent.avatar,
        mode,
        map,
        stake,
        scheduledTime
      });
    });
  }

  // Rating Form Submission
  const formRating = document.getElementById('form-submit-rating');
  if (formRating) {
    formRating.addEventListener('submit', (e) => {
      e.preventDefault();
      const player = state.selectedRatingModalPlayer;
      if (!player) return;

      const aim = parseFloat(document.getElementById('rate-aim').value);
      const teamwork = parseFloat(document.getElementById('rate-teamwork').value);
      const iq = parseFloat(document.getElementById('rate-iq').value);
      const sportsmanship = parseFloat(document.getElementById('rate-sportsmanship').value);
      const reviewText = document.getElementById('rate-review').value;

      state.submitRating(player.id, { aim, teamwork, iq, sportsmanship, reviewText });
    });
  }

  // Upload Clip Form Submission
  const formUpload = document.getElementById('form-upload-clip');
  if (formUpload) {
    formUpload.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('upload-title').value;
      const description = document.getElementById('upload-desc').value;
      const tags = document.getElementById('upload-tags').value;
      const presetMedia = document.getElementById('upload-media-preset').value;
      const fileInput = document.getElementById('upload-file-input');

      if (fileInput && fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const isVideo = file.type.startsWith('video/');
        const fileUrl = URL.createObjectURL(file);
        
        state.addClip({
          title,
          description,
          tags,
          mediaUrl: fileUrl,
          mediaType: isVideo ? 'video' : 'image'
        });
      } else {
        state.addClip({
          title,
          description,
          tags,
          mediaUrl: presetMedia,
          mediaType: 'image'
        });
      }
    });
  }

  // Send Chat Message button
  const btnSendChat = document.getElementById('btn-send-chat');
  const chatInput = document.getElementById('chat-input-field');
  if (btnSendChat && chatInput) {
    const handleSend = () => {
      const targetId = btnSendChat.getAttribute('data-player-id');
      state.sendMessage(targetId, chatInput.value);
    };

    btnSendChat.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  // Clip Comment submission
  document.querySelectorAll('.send-comment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const clipId = btn.getAttribute('data-clip-id');
      const input = document.getElementById(`input-comment-${clipId}`);
      if (input) {
        state.addCommentToClip(clipId, input.value);
      }
    });
  });
}

function handleGlobalClick(e) {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.getAttribute('data-action');
  const id = target.getAttribute('data-id');

  if (action === 'like') {
    state.toggleLikeClip(id);
  } else if (action === 'toggle-comments') {
    const section = document.getElementById(`comments-${id}`);
    if (section) {
      section.classList.toggle('open');
    }
  } else if (action === 'toggle-connect') {
    state.toggleConnection(id);
  } else if (action === 'view-profile') {
    const player = state.players.find(p => p.id === id);
    if (player) state.openPlayerModal(player);
  } else if (action === 'challenge') {
    const player = state.players.find(p => p.id === id);
    if (player) state.openChallengeModal(player);
  } else if (action === 'rate') {
    const player = state.players.find(p => p.id === id);
    if (player) state.openRatingModal(player);
  } else if (action === 'message') {
    state.setActiveChatPlayer(id);
    state.setActiveTab('chat');
  } else if (action === 'endorse') {
    const playerId = target.getAttribute('data-player-id');
    const skill = target.getAttribute('data-skill');
    if (playerId && skill) {
      state.endorseSkill(playerId, skill);
    }
  } else if (action === 'accept-challenge') {
    state.updateChallengeStatus(id, 'Accepted');
  } else if (action === 'reject-challenge') {
    state.updateChallengeStatus(id, 'Rejected');
  } else if (action === 'complete-challenge') {
    state.updateChallengeStatus(id, 'Completed', state.currentUser.id);
  } else if (action === 'copy-room') {
    const roomId = target.getAttribute('data-id');
    const roomPass = target.getAttribute('data-pass');
    navigator.clipboard?.writeText(`Free Fire Room ID: ${roomId} | Pass: ${roomPass}`);
    alert(`Copied to clipboard!\nRoom ID: ${roomId}\nPassword: ${roomPass}`);
  } else if (action === 'select-chat') {
    const playerId = target.getAttribute('data-player-id');
    state.setActiveChatPlayer(playerId);
  }

  // Close modals
  if (e.target.id === 'close-player-modal') state.closePlayerModal();
  if (e.target.id === 'close-challenge-modal' || e.target.id === 'cancel-challenge-modal') state.closeChallengeModal();
  if (e.target.id === 'close-rating-modal' || e.target.id === 'cancel-rating-modal') state.closeRatingModal();
  if (e.target.id === 'close-upload-modal' || e.target.id === 'cancel-upload-modal') state.toggleUploadModal(false);
  if (e.target.id === 'close-login-modal' || e.target.id === 'cancel-login-modal') state.toggleLoginModal(false);
}

// Subscribe to state updates to re-render
state.subscribe(renderApp);

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
