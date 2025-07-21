export function renderSkills() {
  return `
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Skills & Expertise</h1>
        <p class="page-subtitle">Technical skills, accomplishments, and areas of interest</p>
      </div>
    </section>
    
    <section class="skills-overview">
      <div class="container">
        <div class="skills-grid">
          <div class="skill-category">
            <div class="category-header">
              <div class="category-icon">🛡️</div>
              <h3>Security Operations</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item">
                <span class="skill-name">SIEM Management</span>
                <div class="skill-tools">Splunk, Sentinel, Cribl</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Threat Hunting</span>
                <div class="skill-tools">Log Correlation, IOC Analysis</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Incident Response</span>
                <div class="skill-tools">Triage, Forensics, Recovery</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Endpoint Security</span>
                <div class="skill-tools">CrowdStrike Falcon, EDR</div>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <div class="category-header">
              <div class="category-icon">🔍</div>
              <h3>Analysis & Investigation</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item">
                <span class="skill-name">Packet Analysis</span>
                <div class="skill-tools">Wireshark, TCP/IP</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Malware Analysis</span>
                <div class="skill-tools">Ghidra, Assembly, Sandboxing</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Vulnerability Assessment</span>
                <div class="skill-tools">Nmap, Nessus, OpenVAS</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Traffic Analysis</span>
                <div class="skill-tools">Malcolm Framework, Zeek</div>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <div class="category-header">
              <div class="category-icon">⚙️</div>
              <h3>Automation & Development</h3>
            </div>
            <div class="skills-list">
              <div class="skill-item">
                <span class="skill-name">Scripting</span>
                <div class="skill-tools">Python, Bash, PowerShell</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">API Integration</span>
                <div class="skill-tools">VirusTotal, WHOIS, Threat Intel</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Workflow Automation</span>
                <div class="skill-tools">Tines, SOAR Platforms</div>
              </div>
              <div class="skill-item">
                <span class="skill-name">Infrastructure</span>
                <div class="skill-tools">Linux, Windows, Cloud (GCP, Azure)</div>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <div class="category-header">
              <div class="category-icon">🏆</div>
              <h3>Certifications & Training</h3>
            </div>
            <div class="certifications-grid">
              <div class="cert-item">
                <span class="cert-icon">🛡️</span>
                <span class="cert-name">CompTIA Security+</span>
                <div class="cert-date">Issued Jul 2025 • Valid until Jul 2028</div>
              </div>
              
              <div class="cert-item">
                <span class="cert-icon">🧠</span>
                <span class="cert-name">Active Defense and Cyber Deception</span>
                <div class="cert-date">Antisyphon Training • Issued Jun 2025</div>
              </div>
              
              <div class="cert-item">
                <span class="cert-icon">🌐</span>
                <span class="cert-name">Networking Basics</span>
                <div class="cert-date">Cisco • Issued Jun 2025</div>
              </div>
              
              <div class="cert-item">
                <span class="cert-icon">🧩</span>
                <span class="cert-name">Chronicle SIEMS Fundamentals</span>
                <div class="cert-date">Google • Issued Feb 2025</div>
              </div>
              
              <div class="cert-item">
                <span class="cert-icon">🛜</span>
                <span class="cert-name">Networking and Cybersecurity</span>
                <div class="cert-date">UC Davis • Issued Jan 2023</div>
              </div>
              
              <div class="cert-item">
                <span class="cert-icon">🔧</span>
                <span class="cert-name">Cribl Certified User</span>
                <div class="cert-date">Issued Jan 2025 • Expires Jan 2028</div>
              </div>
              
              <div class="cert-item">
                <span class="cert-icon">🛠️</span>
                <span class="cert-name">Level 2: Cribl Certified Admin - Stream</span>
                <div class="cert-date">Issued Jun 2025 • Expires Jun 2028</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="accomplishments">
      <div class="container">
        <h2 class="section-title">Key Accomplishments</h2>
        <div class="accomplishments-grid">
          <div class="accomplishment-card">
            <div class="accomplishment-icon">🏅</div>
            <h3>Huntress CTF Achievement</h3>
            <p>Placed <strong>87th out of 1,018 teams</strong> in the Huntress CTF competition through self-taught reverse engineering skills and advanced problem-solving techniques.</p>
          </div>
          
          <div class="accomplishment-card">
            <div class="accomplishment-icon">🛠️</div>
            <h3>Winston Toolkit Development</h3>
            <p>Designed and developed a comprehensive malware analysis toolkit for SOC environments, integrating multiple threat intelligence APIs for streamlined investigations.</p>
          </div>
          
          <div class="accomplishment-card">
            <div class="accomplishment-icon">🔄</div>
            <h3>Enterprise Migration</h3>
            <p>Successfully migrated a biotech research company from SentinelOne to CrowdStrike, securing 80+ endpoints and redesigning network topology for enhanced security.</p>
          </div>
          
          <div class="accomplishment-card">
            <div class="accomplishment-icon">📋</div>
            <h3>Process Automation</h3>
            <p>Implemented Jira Service Desk company-wide with integrated automation for ticket routing and triage, significantly improving operational efficiency.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="interests">
      <div class="container">
        <h2 class="section-title">Technical Interests & Side Projects</h2>
        <div class="interests-list">
          <div class="interest-item">
            <span class="interest-icon">🔧</span>
            <span class="interest-text">Ongoing development of Winston and other custom CLI security tools</span>
          </div>
          <div class="interest-item">
            <span class="interest-icon">🥧</span>
            <span class="interest-text">Raspberry Pi-based network appliances for monitoring and DNS filtering</span>
          </div>
          <div class="interest-item">
            <span class="interest-icon">📊</span>
            <span class="interest-text">Performance tuning with Pi-hole and Wazuh for home network security</span>
          </div>
          <div class="interest-item">
            <span class="interest-icon">🔒</span>
            <span class="interest-text">OpenVPN tunneling and internal server routing configurations</span>
          </div>
          <div class="interest-item">
            <span class="interest-icon">🤖</span>
            <span class="interest-text">ChatGPT experimentation using OpenWebUI on cloud infrastructure</span>
          </div>
          <div class="interest-item">
            <span class="interest-icon">🎯</span>
            <span class="interest-text">Traffic injection testing with BeEF and virtualized lab environments</span>
          </div>
        </div>
      </div>
    </section>
  `;
}