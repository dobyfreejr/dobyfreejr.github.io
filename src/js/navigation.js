import { navigateToPage } from './app.js';
import { loadBlogPosts } from './pages/blog.js';

export function initializeNavigation() {
  // Handle navigation clicks
  document.addEventListener('click', (e) => {
    const navItem = e.target.closest('.nav-item');
    if (navItem && navItem.dataset.page) {
      e.preventDefault();
      const page = navItem.dataset.page;
      navigateToPage(page);
      
      // Load blog posts if navigating to blog page
      if (page === 'blog') {
        setTimeout(() => loadBlogPosts(), 100);
      }
    }
    
    // Handle mobile menu toggle
    if (e.target.closest('#mobile-menu-toggle')) {
      toggleMobileMenu();
    }
    
    // Close mobile menu when clicking outside
    if (!e.target.closest('.nav') && document.querySelector('.nav-menu.active')) {
      closeMobileMenu();
    }
  });
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || 'home';
    navigateToPage(page);
    
    if (page === 'blog') {
      setTimeout(() => loadBlogPosts(), 100);
    }
  });
  
  // Load blog posts if starting on blog page
  if (window.location.pathname.includes('blog')) {
    setTimeout(() => loadBlogPosts(), 500);
  }
}

function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  const toggle = document.getElementById('mobile-menu-toggle');
  
  navMenu.classList.toggle('active');
  toggle.classList.toggle('active');
}

function closeMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  const toggle = document.getElementById('mobile-menu-toggle');
  
  navMenu.classList.remove('active');
  toggle.classList.remove('active');
}