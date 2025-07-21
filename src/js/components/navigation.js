export function renderNavigation(currentPage) {
  return `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <span class="brand-text">Kyle Barbre</span>
          <span class="brand-subtitle">Cybersecurity Professional</span>
        </div>
        
        <ul class="nav-menu" id="nav-menu">
          <li class="nav-item ${currentPage === 'home' ? 'active' : ''}" data-page="home">
            <a href="#" class="nav-link">
              <span class="nav-icon">🏠</span>
              <span>Home</span>
            </a>
          </li>
          <li class="nav-item ${currentPage === 'work-history' ? 'active' : ''}" data-page="work-history">
            <a href="#" class="nav-link">
              <span class="nav-icon">💼</span>
              <span>Experience</span>
            </a>
          </li>
          <li class="nav-item ${currentPage === 'skills' ? 'active' : ''}" data-page="skills">
            <a href="#" class="nav-link">
              <span class="nav-icon">⚡</span>
              <span>Skills</span>
            </a>
          </li>
          <li class="nav-item ${currentPage === 'projects' ? 'active' : ''}" data-page="projects">
            <a href="#" class="nav-link">
              <span class="nav-icon">🚀</span>
              <span>Projects</span>
            </a>
          </li>
          <li class="nav-item ${currentPage === 'blog' ? 'active' : ''}" data-page="blog">
            <a href="#" class="nav-link">
              <span class="nav-icon">📝</span>
              <span>Blog</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle">
              <span class="nav-icon">🔗</span>
              <span>Connect</span>
              <span class="dropdown-arrow">▾</span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="https://github.com/dobyfreejr" target="_blank" class="dropdown-link">
                <span class="social-icon">💻</span> GitHub
              </a></li>
              <li><a href="https://medium.com/@kylebarbre" target="_blank" class="dropdown-link">
                <span class="social-icon">✍️</span> Medium
              </a></li>
              <li><a href="https://about.me/Kyle-Barbre" target="_blank" class="dropdown-link">
                <span class="social-icon">👤</span> About Me
              </a></li>
              <li><a href="https://linkedin.com/in/kyle-barbre-81a574239" target="_blank" class="dropdown-link">
                <span class="social-icon">🔗</span> LinkedIn
              </a></li>
            </ul>
          </li>
        </ul>
        
        <button class="mobile-menu-toggle" id="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  `;
}