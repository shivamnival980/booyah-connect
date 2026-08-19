import { state } from '../state.js';

export function renderChat() {
  const { messages, activeChatPlayerId, players, currentUser } = state;

  const activeSession = messages.find(m => m.withPlayerId === activeChatPlayerId) || messages[0];
  const activePlayer = players.find(p => p.id === (activeSession ? activeSession.withPlayerId : activeChatPlayerId));

  return `
    <div class="chat-container">
      <!-- Chat Sidebar / Conversations List -->
      <div class="chat-sidebar">
        <div class="chat-sidebar-header">
          <h3>💬 Direct Messages</h3>
        </div>
        <div class="chat-threads-list">
          ${messages.map(m => `
            <div class="chat-thread-item ${m.withPlayerId === activeChatPlayerId ? 'active' : ''}" data-action="select-chat" data-player-id="${m.withPlayerId}">
              <img src="${m.withPlayerAvatar}" alt="Avatar" class="thread-avatar" />
              <div class="thread-meta">
                <div class="thread-name">${m.withPlayerName}</div>
                <div class="thread-last-msg">${m.messages[m.messages.length - 1]?.text || 'No messages yet'}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Chat Main Window -->
      <div class="chat-window">
        ${activeSession ? `
          <div class="chat-window-header">
            <img src="${activeSession.withPlayerAvatar}" alt="Avatar" class="active-chat-avatar" />
            <div>
              <div class="active-chat-name">${activeSession.withPlayerName}</div>
              <div class="active-chat-status">🟢 Online | Ready for Squad Room</div>
            </div>
          </div>

          <div class="chat-messages-area" id="chat-messages-box">
            ${activeSession.messages.map(msg => `
              <div class="chat-bubble-row ${msg.sender === 'user_me' ? 'me' : 'other'}">
                <div class="chat-bubble">
                  <div class="msg-text">${msg.text}</div>
                  <div class="msg-time">${msg.time}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="chat-input-bar">
            <input type="text" id="chat-input-field" placeholder="Send a message or invite to Room..." />
            <button class="btn btn-primary" id="btn-send-chat" data-player-id="${activeSession.withPlayerId}">
              Send
            </button>
          </div>
        ` : `
          <div class="empty-chat-state">
            <h3>Select a connection to start messaging</h3>
          </div>
        `}
      </div>
    </div>
  `;
}
