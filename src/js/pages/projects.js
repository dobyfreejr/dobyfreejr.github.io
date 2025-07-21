export function renderProjects() {
  return `
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Personal Projects</h1>
        <p class="page-subtitle">Cybersecurity tools and infrastructure projects I've built</p>
      </div>
    </section>
    
    <section class="projects">
      <div class="container">
        <div class="projects-grid">
          <div class="project-card featured">
            <div class="project-header">
              <div class="project-icon">🕵️</div>
              <div class="project-meta">
                <h3 class="project-title">"Winston" – Malware Analysis Toolkit</h3>
                <div class="project-status">
                  <span class="status-badge active">Active Development</span>
                </div>
              </div>
            </div>
            
            <div class="project-description">
              <p>A comprehensive Python-based toolkit designed to support SOC analysts with streamlined malware analysis and domain/IP investigation workflows.</p>
            </div>
            
            <div class="project-features">
              <h4>Key Features</h4>
              <ul>
                <li><strong>API Integrations:</strong> Built-in support for VirusTotal, WHOIS lookup, passive DNS resolution, and MalwareBazaar</li>
                <li><strong>CLI Interface:</strong> Lightweight and fast command-line tools ideal for incident response environments</li>
                <li><strong>Modular Design:</strong> Extensible architecture for adding new threat intelligence sources</li>
                <li><strong>Automated Reporting:</strong> Generate comprehensive analysis reports in multiple formats</li>
              </ul>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">VirusTotal API</span>
              <span class="tech-tag">WHOIS</span>
              <span class="tech-tag">MalwareBazaar</span>
              <span class="tech-tag">CLI</span>
              <span class="tech-tag">argparse</span>
            </div>
            
            <div class="project-actions">
              <a href="https://github.com/dobyfreejr/Winston" target="_blank" class="btn btn-primary">
                <span class="btn-icon">💻</span>
                View on GitHub
              </a>
            </div>
            
            <div class="project-diagram">
              <img src="/img/winston-diagram.png" alt="Winston Workflow Diagram" class="diagram-image" />
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">📊</div>
              <div class="project-meta">
                <h3 class="project-title">Home Network Monitoring with ELK Stack</h3>
                <div class="project-status">
                  <span class="status-badge completed">Completed</span>
                </div>
              </div>
            </div>
            
            <div class="project-description">
              <p>Designed and deployed a full ELK stack to collect, analyze, and visualize security-relevant activity across a home lab environment.</p>
            </div>
            
            <div class="project-features">
              <h4>Implementation Details</h4>
              <ul>
                <li><strong>Elasticsearch:</strong> Storing and indexing parsed network logs for rapid search and correlation</li>
                <li><strong>Logstash:</strong> Ingesting logs from firewalls, servers, and endpoint sensors with custom filters</li>
                <li><strong>Kibana:</strong> Custom dashboards for anomaly detection and performance tracking</li>
                <li><strong>Cloud Deployment:</strong> Hosted on GCP with real-time alerts via Gmail and mobile notifications</li>
              </ul>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">ELK Stack</span>
              <span class="tech-tag">Google Cloud</span>
              <span class="tech-tag">Syslog</span>
              <span class="tech-tag">Beats</span>
              <span class="tech-tag">Grok Patterns</span>
            </div>
          </div>
          
          <div class="project-card">
            <div class="project-header">
              <div class="project-icon">🎮</div>
              <div class="project-meta">
                <h3 class="project-title">Private WoW Server on Raspberry Pi 5</h3>
                <div class="project-status">
                  <span class="status-badge active">Active</span>
                </div>
              </div>
            </div>
            
            <div class="project-description">
              <p>Designed and deployed a self-hosted World of Warcraft emulation server to explore game server architecture, Linux administration, and low-resource optimization.</p>
            </div>
            
            <div class="project-features">
              <h4>Technical Achievements</h4>
              <ul>
                <li><strong>Server Configuration:</strong> Open-source emulation core with MariaDB backend and Lua scripting</li>
                <li><strong>Automation:</strong> Player bot implementation for realistic multiplayer activity simulation</li>
                <li><strong>Security:</strong> External access via firewall rules and VPN with remote monitoring</li>
                <li><strong>Performance:</strong> ARM hardware optimization for CPU, memory, and network efficiency</li>
              </ul>
            </div>
            
            <div class="project-tech">
              <span class="tech-tag">Raspberry Pi</span>
              <span class="tech-tag">MariaDB</span>
              <span class="tech-tag">Lua</span>
              <span class="tech-tag">Linux</span>
              <span class="tech-tag">VPN</span>
              <span class="tech-tag">ARM Optimization</span>
            </div>
            
            <div class="project-diagram">
              <img src="/img/wow-pi-diagram.png" alt="WoW Server Network Diagram" class="diagram-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}