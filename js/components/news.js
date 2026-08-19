import { state } from '../state.js';

export function renderNews() {
  const { news } = state;

  return `
    <div class="news-container">
      <div class="news-header">
        <div>
          <h2>📰 Free Fire Official News & Meta Portal</h2>
          <p>Stay ahead with daily OB patch updates, esports tournament announcements, weapon meta tier lists, and code giveaways!</p>
        </div>
      </div>

      <!-- Categories Filter -->
      <div class="news-categories">
        <span class="cat-pill active">All Articles</span>
        <span class="cat-pill">Patch Notes</span>
        <span class="cat-pill">Esports</span>
        <span class="cat-pill">Meta Guides</span>
      </div>

      <!-- News Cards List -->
      <div class="news-grid">
        ${news.map(article => `
          <div class="news-card">
            <div class="news-image-box">
              <img src="${article.image}" alt="${article.title}" class="news-img" />
              <span class="news-category-badge">${article.category}</span>
            </div>

            <div class="news-content">
              <div class="news-meta">
                <span>By ${article.author}</span>
                <span class="dot">•</span>
                <span>${article.date}</span>
              </div>

              <h3 class="news-title">${article.title}</h3>
              <p class="news-summary">${article.summary}</p>

              <div class="news-tags">
                ${article.tags.map(t => `<span class="news-tag">#${t}</span>`).join('')}
              </div>

              <div class="news-full-body">
                <pre class="news-text-content">${article.content}</pre>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
