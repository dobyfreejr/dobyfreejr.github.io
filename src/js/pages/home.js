export function renderHome() {
  return `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-image">
          <img src="/img/kyle3.png" alt="Kyle Barbre" class="profile-image" />
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span class="status-text">Available for opportunities</span>
          </div>
        </div>
        
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-main">Kyle Barbre</span>
            <span class="title-subtitle">Cybersecurity Professional</span>
          </h1>
          
          <p class="hero-description">
            Specialized in <strong>threat detection</strong>, <strong>SIEM engineering</strong>, and <strong>security automation</strong>. 
            I help organizations build resilient security operations through advanced log analysis, 
            threat hunting, and observability tooling like Cribl and Splunk.
          </p>
          
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">87th</span>
              <span class="stat-label">Huntress CTF Rank</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">80+</span>
              <span class="stat-label">Endpoints Secured</span>
            </div>
          </div>
          
          <div class="hero-actions">
            <a href="mailto:kyle@baysec.space" class="btn btn-primary">
              <span class="btn-icon">📧</span>
              Get In Touch
            </a>
            <a href="/Kyle_Barbre_Resume.pdf" target="_blank" class="btn btn-secondary">
              <span class="btn-icon">📄</span>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="highlights">
      <div class="container">
        <h2 class="section-title">What I Do</h2>
        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">🛡️</div>
            <h3>Threat Detection</h3>
            <p>Advanced SIEM rule development, threat hunting, and incident response using industry-leading tools and methodologies.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">📊</div>
            <h3>Log Analysis</h3>
            <p>Expert in Cribl, Splunk, and ELK stack for transforming raw security telemetry into actionable intelligence.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">⚙️</div>
            <h3>Security Automation</h3>
            <p>Building Python tools and automation pipelines to streamline SOC operations and reduce response times.</p>
          </div>
          <div class="highlight-card">
            <div class="highlight-icon">🔍</div>
            <h3>Malware Analysis</h3>
            <p>Reverse engineering and threat intelligence gathering using custom tools like Winston for comprehensive analysis.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="recent-work">
      <div class="container">
        <h2 class="section-title">Recent Work</h2>
        <div class="work-preview">
          <div class="work-item">
            <div class="work-company">Five9</div>
            <div class="work-role">SIEM Engineer (Contract)</div>
            <div class="work-period">01/2025 – Current</div>
            <p class="work-description">
              Leading SIEM rule tuning and log pipeline optimization using Cribl to reduce ingestion costs 
              while improving threat detection capabilities across multiple security surfaces.
            </p>
          </div>
          <div class="work-item">
            <div class="work-company">Techurion</div>
            <div class="work-role">System Administrator / Security Analyst</div>
            <div class="work-period">03/2024 – Current</div>
            <p class="work-description">
              Built complete security infrastructure from ground up, including Active Directory, SSO, 
              and automated incident response workflows using Tines.
            </p>
          </div>
        </div>
        <div class="work-cta">
          <button class="btn btn-outline" onclick="navigateToPage('work-history')">
            View Full Experience
          </button>
        </div>
      </div>
    </section>
  `;
}