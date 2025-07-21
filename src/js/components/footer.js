export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Contact</h3>
          <p>
            <a href="mailto:kyle@baysec.space" class="footer-link">
              <span class="contact-icon">📧</span>
              kyle@baysec.space
            </a>
          </p>
        </div>
        
        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links">
            <a href="https://github.com/dobyfreejr" target="_blank" class="social-link" aria-label="GitHub">
              <span class="social-icon">💻</span>
              <span>GitHub</span>
            </a>
            <a href="https://medium.com/@kylebarbre" target="_blank" class="social-link" aria-label="Medium">
              <span class="social-icon">✍️</span>
              <span>Medium</span>
            </a>
            <a href="https://about.me/Kyle-Barbre" target="_blank" class="social-link" aria-label="About Me">
              <span class="social-icon">👤</span>
              <span>About</span>
            </a>
            <a href="https://linkedin.com/in/kyle-barbre-81a574239" target="_blank" class="social-link" aria-label="LinkedIn">
              <span class="social-icon">🔗</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Built With</h3>
          <p class="tech-stack">
            <span class="tech-item">HTML5</span>
            <span class="tech-item">CSS3</span>
            <span class="tech-item">JavaScript</span>
            <span class="tech-item">Vite</span>
          </p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Kyle Barbre. All rights reserved.</p>
        <p class="footer-note">Hosted on GitHub Pages • Secured with ❤️</p>
      </div>
    </footer>
  `;
}