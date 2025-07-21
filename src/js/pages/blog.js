export function renderBlog() {
  return `
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Blog & Insights</h1>
        <p class="page-subtitle">Latest cybersecurity insights and technical writeups</p>
      </div>
    </section>
    
    <section class="blog">
      <div class="container">
        <div class="blog-intro">
          <p>I regularly write about cybersecurity topics, threat analysis, and technical deep-dives on Medium. Here are my latest posts:</p>
        </div>
        
        <div id="blog-posts" class="blog-posts">
          <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>Loading latest posts from Medium...</p>
          </div>
        </div>
        
        <div class="blog-cta">
          <a href="https://medium.com/@kylebarbre" target="_blank" class="btn btn-primary">
            <span class="btn-icon">✍️</span>
            Follow on Medium
          </a>
        </div>
      </div>
    </section>
  `;
}

export async function loadBlogPosts() {
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kylebarbre';
  const container = document.getElementById('blog-posts');
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.items || !data.items.length) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <h3>No posts found</h3>
          <p>Check back soon for new cybersecurity insights and technical writeups.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    
    data.items.slice(0, 6).forEach((post, index) => {
      const publishDate = new Date(post.pubDate);
      const timeAgo = getTimeAgo(publishDate);
      
      // Extract first paragraph from description
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = post.description;
      const firstParagraph = tempDiv.querySelector('p')?.textContent || post.description.substring(0, 150) + '...';
      
      const postCard = document.createElement('article');
      postCard.className = 'blog-post-card';
      postCard.innerHTML = `
        <div class="post-header">
          <div class="post-meta">
            <span class="post-date">${publishDate.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
            <span class="post-time-ago">${timeAgo}</span>
          </div>
        </div>
        
        <div class="post-content">
          <h3 class="post-title">
            <a href="${post.link}" target="_blank">${post.title}</a>
          </h3>
          <p class="post-excerpt">${firstParagraph}</p>
        </div>
        
        <div class="post-footer">
          <a href="${post.link}" target="_blank" class="read-more-link">
            Read Full Article
            <span class="link-arrow">→</span>
          </a>
        </div>
      `;
      
      container.appendChild(postCard);
    });
    
  } catch (error) {
    container.innerHTML = `
      <div class="error-state">
        <div class="error-icon">⚠️</div>
        <h3>Unable to load posts</h3>
        <p>There was an error loading the latest blog posts. Please try again later or visit Medium directly.</p>
        <a href="https://medium.com/@kylebarbre" target="_blank" class="btn btn-outline">
          Visit Medium
        </a>
      </div>
    `;
  }
}

function getTimeAgo(date) {
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}