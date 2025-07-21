export function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements for animation
  function observeElements() {
    const animatedElements = document.querySelectorAll(
      '.highlight-card, .work-item, .accomplishment-card, .project-card, .skill-category, .timeline-item, .blog-post-card'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Initial observation
  setTimeout(observeElements, 100);

  // Re-observe when navigating to new pages
  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-item')) {
      setTimeout(observeElements, 200);
    }
  });

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // Add typing effect to hero title
  function addTypingEffect() {
    const titleElement = document.querySelector('.hero-title .title-main');
    if (titleElement && !titleElement.classList.contains('typed')) {
      titleElement.classList.add('typed');
      const text = titleElement.textContent;
      titleElement.textContent = '';
      
      let i = 0;
      const typeInterval = setInterval(() => {
        titleElement.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(typeInterval);
        }
      }, 100);
    }
  }

  // Add typing effect on home page load
  if (window.location.pathname === '/' || window.location.pathname.includes('index')) {
    setTimeout(addTypingEffect, 500);
  }
}