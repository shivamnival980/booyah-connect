import { state } from '../state.js';

export function renderFeed() {
  const { clips, searchQuery, clipTagFilter, currentUser } = state;

  const filteredClips = clips.filter(c => {
    let matchesSearch = true;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      matchesSearch = c.title.toLowerCase().includes(q) ||
                      c.authorIgn.toLowerCase().includes(q) ||
                      c.tags.some(t => t.toLowerCase().includes(q));
    }

    let matchesTag = true;
    if (clipTagFilter && clipTagFilter !== 'All Highlights') {
      matchesTag = c.tags.some(t => t.toLowerCase().replace('-', '').includes(clipTagFilter.toLowerCase().replace('-', '').replace(' ', '')));
    }

    return matchesSearch && matchesTag;
  });

  const availableTags = ['All Highlights', '1v4 Clutch', 'CS Ranked', 'AWM Sniping', 'Grandmaster'];

  return `
    <div class="feed-container">
      <!-- Hero Banner & Quick Actions -->
      <div class="feed-hero">
        <div class="hero-content">
          <span class="hero-tag">🔥 INDIA COMMUNITY FEED</span>
          <h1 class="hero-title">SHOWCASE YOUR BOOYAH MOMENTS</h1>
          <p class="hero-sub">Upload 1v4 clutches, AWM headshots, and squad wipes to build your player reputation and get scouted by top Indian Guilds!</p>
          <div class="hero-actions">
            <button class="btn btn-primary" id="btn-upload-clip">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Upload Gameplay Clip
            </button>
          </div>
        </div>
      </div>

      <!-- Clips Grid -->
      <div class="feed-header-bar">
        <h2>Latest Community Gameplay (${filteredClips.length})</h2>
        <div class="feed-tags-quick">
          ${availableTags.map(tag => `
            <span class="tag-pill ${clipTagFilter === tag ? 'active' : ''}" data-action="filter-clip-tag" data-tag="${tag}">${tag}</span>
          `).join('')}
        </div>
      </div>

      <div class="clips-grid">
        ${filteredClips.length === 0 ? `
          <div class="empty-state">
            <div class="empty-icon">🎥</div>
            <h3>No clips match your search query</h3>
            <p>Try searching for different tags or player names!</p>
          </div>
        ` : filteredClips.map(clip => `
          <div class="clip-card" data-clip-id="${clip.id}">
            <!-- Card Header -->
            <div class="clip-card-header">
              <img src="${clip.authorAvatar}" alt="Avatar" class="author-avatar" />
              <div class="author-meta">
                <div class="author-ign">${clip.authorIgn}</div>
                <div class="author-sub">
                  <span class="rank-tag">${clip.authorRank}</span>
                  <span class="dot">•</span>
                  <span class="time-tag">${clip.createdAt}</span>
                </div>
              </div>
            </div>

            <!-- Media Preview / Player -->
            <div class="clip-media-box">
              ${clip.mediaType === 'video' ? `
                <video src="${clip.mediaUrl}" controls class="clip-media-video" poster="${clip.poster || 'assets/gameplay_thumb1.jpg'}"></video>
              ` : `
                <img src="${clip.mediaUrl}" alt="${clip.title}" class="clip-media-img" />
                <div class="media-overlay-play" data-action="play-media" data-id="${clip.id}">
                  <div class="play-btn-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              `}
              <div class="views-badge">👁️ ${clip.views.toLocaleString()} views</div>
            </div>

            <!-- Card Body -->
            <div class="clip-card-body">
              <h3 class="clip-title">${clip.title}</h3>
              <p class="clip-desc">${clip.description}</p>
              
              <div class="clip-tags">
                ${clip.tags.map(t => `<span class="tag-chip">#${t}</span>`).join('')}
              </div>

              <!-- Interactivity Bar -->
              <div class="clip-actions">
                <button class="action-btn like-btn ${clip.isLiked ? 'liked' : ''}" data-action="like" data-id="${clip.id}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="${clip.isLiked ? '#FF5500' : 'none'}" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>${clip.likes} Likes</span>
                </button>

                <button class="action-btn comment-toggle-btn" data-action="toggle-comments" data-id="${clip.id}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>${clip.comments.length} Comments</span>
                </button>
              </div>

              <!-- Comment Section -->
              <div class="comment-section" id="comments-${clip.id}">
                <div class="comments-list">
                  ${clip.comments.map(c => `
                    <div class="comment-item">
                      <img src="${c.authorAvatar}" alt="Commenter" class="comment-avatar" />
                      <div class="comment-content">
                        <div class="comment-header">
                          <span class="comment-author">${c.authorIgn}</span>
                          <span class="comment-time">${c.time}</span>
                        </div>
                        <p class="comment-text">${c.text}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <div class="add-comment-form">
                  <input type="text" placeholder="Write a comment..." class="comment-input" id="input-comment-${clip.id}" />
                  <button class="btn btn-secondary btn-sm send-comment-btn" data-clip-id="${clip.id}">Post</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
