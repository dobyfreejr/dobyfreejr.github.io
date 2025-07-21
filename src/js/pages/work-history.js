export function renderWorkHistory() {
  return `
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Work Experience</h1>
        <p class="page-subtitle">My professional journey in cybersecurity and technology</p>
      </div>
    </section>
    
    <section class="timeline">
      <div class="container">
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="timeline-marker current"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="company">Five9</h3>
                <span class="role">SIEM Engineer (Contract)</span>
                <span class="period">01/2025 – Current</span>
              </div>
              <div class="timeline-body">
                <p class="role-description">
                  Serving as a key member of the SOC engineering team, focusing on SIEM rule tuning, 
                  log pipeline efficiency, and data normalization across multiple threat surfaces.
                </p>
                <ul class="achievements">
                  <li>Architecting scalable observability workflows using Cribl to transform and route security telemetry</li>
                  <li>Reducing ingestion costs while maintaining comprehensive threat detection coverage</li>
                  <li>Developing custom detection logic for endpoints, cloud workloads, and authentication systems</li>
                  <li>Supporting incident response teams with enhanced visibility and automated alerting</li>
                </ul>
                <div class="tech-tags">
                  <span class="tech-tag">Cribl</span>
                  <span class="tech-tag">Splunk</span>
                  <span class="tech-tag">SIEM</span>
                  <span class="tech-tag">AWS S3</span>
                  <span class="tech-tag">Incident Response</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="company">Techurion</h3>
                <span class="role">System Administrator / Security Analyst</span>
                <span class="period">03/2024 – Current</span>
              </div>
              <div class="timeline-body">
                <p class="role-description">
                  Owned the complete technical infrastructure deployment for a growing startup, 
                  implementing secure-by-design principles across all systems and processes.
                </p>
                <ul class="achievements">
                  <li>Built comprehensive IT infrastructure including Active Directory, SSO, and integrated ticketing</li>
                  <li>Developed automation pipelines using Tines to unify workflows across email, alerting, and incident tracking</li>
                  <li>Provided MSSP services including malware triage, host/network analysis, and threat identification</li>
                  <li>Established endpoint hardening standards and vulnerability lifecycle management</li>
                </ul>
                <div class="tech-tags">
                  <span class="tech-tag">Active Directory</span>
                  <span class="tech-tag">Tines</span>
                  <span class="tech-tag">Jira</span>
                  <span class="tech-tag">VirusTotal</span>
                  <span class="tech-tag">OSINT</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3 class="company">EdX</h3>
                <span class="role">Cybersecurity Teaching Assistant</span>
                <span class="period">01/2023 – 04/2025</span>
              </div>
              <div class="timeline-body">
                <p class="role-description">
                  Training the next generation of cybersecurity professionals through intensive 
                  hands-on bootcamp programs designed in partnership with major universities.
                </p>
                <ul class="achievements">
                  <li>Guided students through practical labs in cloud infrastructure, Linux/Windows administration</li>
                  <li>Taught offensive security techniques using Metasploit, Burp Suite, and ethical hacking methodologies</li>
                  <li>Provided mentorship on real-world tools including Vagrant, Azure, and secure coding practices</li>
                  <li>Developed student confidence through technical debugging and career-readiness coaching</li>
                </ul>
                <div class="tech-tags">
                  <span class="tech-tag">Metasploit</span>
                  <span class="tech-tag">Burp Suite</span>
                  <span class="tech-tag">Azure</span>
                  <span class="tech-tag">Linux</span>
                  <span class="tech-tag">Ethical Hacking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}