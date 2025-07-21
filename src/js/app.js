import { renderHome } from './pages/home.js';
import { renderWorkHistory } from './pages/work-history.js';
import { renderSkills } from './pages/skills.js';
import { renderProjects } from './pages/projects.js';
import { renderBlog } from './pages/blog.js';
import { renderNavigation } from './components/navigation.js';
import { renderFooter } from './components/footer.js';

export function initializeApp() {
  const app = document.getElementById('app');
  
  // Get current page from URL or default to home
  const currentPage = getCurrentPage();
  
  // Render the app structure
  app.innerHTML = `
    <canvas id="matrixCanvas"></canvas>
    ${renderNavigation(currentPage)}
    <main id="main-content">
      ${renderCurrentPage(currentPage)}
    </main>
    ${renderFooter()}
  `;
}

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('work-history')) return 'work-history';
  if (path.includes('skills')) return 'skills';
  if (path.includes('projects')) return 'projects';
  if (path.includes('blog')) return 'blog';
  return 'home';
}

function renderCurrentPage(page) {
  switch (page) {
    case 'work-history':
      return renderWorkHistory();
    case 'skills':
      return renderSkills();
    case 'projects':
      return renderProjects();
    case 'blog':
      return renderBlog();
    default:
      return renderHome();
  }
}

export function navigateToPage(page) {
  const mainContent = document.getElementById('main-content');
  const navItems = document.querySelectorAll('.nav-item');
  
  // Update active nav item
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === page) {
      item.classList.add('active');
    }
  });
  
  // Render new page content
  mainContent.innerHTML = renderCurrentPage(page);
  
  // Update URL without page reload
  const newUrl = page === 'home' ? '/' : `/${page}.html`;
  window.history.pushState({ page }, '', newUrl);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}