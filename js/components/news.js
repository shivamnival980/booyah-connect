import { state } from '../state.js';

export function renderNews() {
  const { news, newsCategoryFilter } = state;
  const categories = [
    'All Articles',
    'Gaming Opportunities',
    'Worldwide Esports',
    'Global Patch Notes',
    'Redeem Codes & Events'
  ];

  const filteredNews = news.filter(article => {
    if (!newsCategoryFilter || newsCategoryFilter === 'All Articles') return true;
    return article.category === newsCategoryFilter;
  });

  return `
    <div class="news-container">
      <div class="news-hero" style="background: linear-gradient(135deg, rgba(255, 183, 0, 0.2) 0%, rgba(13, 15, 18, 0.95) 100%), url('assets/ff_news_thumb.jpg'); background-size: cover; padding: 36px; border-radius: 16px; margin-bottom: 24px; border: 1px solid rgba(255, 183, 0, 0.3);">
        <span style="background: var(--amber-gold); color: #000; font-weight: 800; font-size: 0.75rem; padding: 4px 12px; border-radius: 12px;">🌐 OFFICIAL GARENA FREE FIRE HUB</span>
        <h1 style="font-size: 2.4rem; margin: 10px 0 6px 0; font-family: var(--font-heading);">OFFICIAL WEBSITES & GAMING OPPORTUNITIES</h1>
        <p style="color: var(--text-light); max-width: 700px;">Direct redirect links to official Garena V-Badge Creator Grants, FFWS International Esports Portals, Advance Server & Rewards Redemption!</p>
      </div>

      <div class="news-categories" style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        ${categories.map(cat => `
          <span class="cat-pill ${newsCategoryFilter === cat ? 'active' : ''}" data-action="filter-news" data-category="${cat}" style="padding: 8px 16px; border-radius: 20px; font-weight: 700; cursor: pointer; background: ${newsCategoryFilter === cat ? 'var(--primary-fire)' : 'var(--dark-surface)'}; color: #FFF; border: 1px solid rgba(255, 255, 255, 0.1);">
            ${cat}
          </span>
        `).join('')}
      </div>

      <div class="news-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 24px;">
        ${filteredNews.map(article => `
          <div class="news-card" style="background: var(--bg-card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;">
            <div style="position: relative; height: 200px; overflow: hidden;">
              <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;" />
              ${article.badge ? `
                <span style="position: absolute; top: 12px; left: 12px; background: rgba(0, 0, 0, 0.75); color: var(--amber-gold); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 800; border: 1px solid rgba(255, 183, 0, 0.4);">
                  ${article.badge}
                </span>
              ` : ''}
              <span style="position: absolute; bottom: 12px; right: 12px; background: rgba(0, 0, 0, 0.75); color: #FFF; padding: 2px 8px; border-radius: 8px; font-size: 0.7rem;">
                📅 ${article.date}
              </span>
            </div>

            <div class="news-content" style="padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="color: var(--primary-fire); font-size: 0.75rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                  ${article.category}
                </span>
                <h3 style="font-size: 1.15rem; margin: 8px 0 10px 0; color: #FFF; line-height: 1.3;">${article.title}</h3>
                <p style="font-size: 0.88rem; color: var(--text-light); line-height: 1.5; margin-bottom: 16px;">${article.summary}</p>
              </div>

              <div>
                <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 14px;">
                  ${(article.tags || []).map(t => `
                    <span style="font-size: 0.7rem; background: var(--dark-surface); color: var(--text-muted); padding: 2px 8px; border-radius: 8px;">
                      #${t}
                    </span>
                  `).join('')}
                </div>

                <!-- DIRECT REDIRECT BUTTON TO OFFICIAL GARENA WEBSITES -->
                <a href="${article.officialUrl || 'https://ff.garena.com/'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center; text-decoration: none; display: flex; align-items: center; gap: 6px;">
                  🌐 ${article.linkText || 'Visit Official Garena Site ↗'}
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
