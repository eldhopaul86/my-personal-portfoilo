import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      
      {/* About Section - Seamless gradient transition below Hero */}
      <section id="about" className="portfolio-section">
        <div className="section-bg-grid" />
        <div className="section-radial-top" />
        
        <div className="section-container">
          <span className="section-tag">&lt; ABOUT ME /&gt;</span>
          <h2 className="section-title">
            Passionate About Building <span className="accent-text">Modern Web Apps</span>
          </h2>
          <p className="section-description">
            I'm Eldho, a full-stack engineer focused on crafting clean, high-performance web applications. 
            From pixel-perfect frontends to scalable backend microservices, I build solutions with 
            clarity, speed, and great user experiences.
          </p>

          <div className="skills-grid">
            {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Tailwind CSS', 'REST APIs', 'Git'].map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Rhythmic flow with grid & radial blends */}
      <section id="projects" className="portfolio-section">
        <div className="section-bg-grid" />
        <div className="section-radial-both" />

        <div className="section-container">
          <span className="section-tag">&lt; PORTFOLIO /&gt;</span>
          <h2 className="section-title">
            Featured <span className="accent-text">Projects</span>
          </h2>
          <p className="section-description">
            A selection of recent applications and experiments exploring cutting-edge web architecture.
          </p>

          <div className="cards-grid">
            <div className="portfolio-card">
              <h3>Syncloud Storage</h3>
              <p>Intelligent multi-cloud backup system with automated SHA-256 deduplication, AES encryption, and real-time sync.</p>
              <div className="card-tags">
                <span className="card-tag">React</span>
                <span className="card-tag">Node.js</span>
                <span className="card-tag">IndexedDB</span>
              </div>
            </div>

            <div className="portfolio-card">
              <h3>DevPulse Analytics</h3>
              <p>Real-time developer workflow telemetry dashboard with automated anomaly detection and latency monitors.</p>
              <div className="card-tags">
                <span className="card-tag">TypeScript</span>
                <span className="card-tag">PostgreSQL</span>
                <span className="card-tag">WebSockets</span>
              </div>
            </div>

            <div className="portfolio-card">
              <h3>OmniDesign System</h3>
              <p>Modern accessibility-first design token library featuring dark/light dynamic theme switching and micro-interactions.</p>
              <div className="card-tags">
                <span className="card-tag">CSS Modules</span>
                <span className="card-tag">Vite</span>
                <span className="card-tag">Storybook</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="portfolio-section">
        <div className="section-bg-grid" />
        <div className="section-radial-both" />

        <div className="section-container">
          <span className="section-tag">&lt; CREDENTIALS /&gt;</span>
          <h2 className="section-title">
            Professional <span className="accent-text">Certifications</span>
          </h2>
          <p className="section-description">
            Continuous learning and verified technical proficiency in full-stack engineering.
          </p>

          <div className="cards-grid">
            <div className="portfolio-card">
              <h3>Full Stack Web Development</h3>
              <p>Comprehensive mastery of modern frontend frameworks, RESTful APIs, relational databases, and architectural best practices.</p>
              <div className="card-tags">
                <span className="card-tag">Full Stack</span>
                <span className="card-tag">React + Node</span>
              </div>
            </div>

            <div className="portfolio-card">
              <h3>Cloud Architecture Fundamentals</h3>
              <p>Hands-on expertise in cloud deployments, container orchestration, serverless lambdas, and high-availability setups.</p>
              <div className="card-tags">
                <span className="card-tag">AWS Cloud</span>
                <span className="card-tag">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-section">
        <div className="section-bg-grid" />
        <div className="section-radial-both" />

        <div className="section-container">
          <span className="section-tag">&lt; GET IN TOUCH /&gt;</span>
          <h2 className="section-title">
            Let's Build Something <span className="accent-text">Great</span>
          </h2>
          <p className="section-description">
            Have a project in mind, an opportunity, or just want to connect? My inbox is always open.
          </p>

          <div className="contact-card">
            <a 
              href="mailto:eldho@example.com" 
              className="btn-contact-custom"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <svg className="btn-mail-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>SEND A MESSAGE</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
