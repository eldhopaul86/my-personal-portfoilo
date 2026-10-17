import { useMemo } from 'react';

function Hero() {
  const particles = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 30}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${3 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero-bg" />
      <div className="hero-bg-grid" />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* All content in one wrapper to fit viewport */}
      <div className="hero-content">
        {/* Heading with Hey, 👋 I’m ELDHO PAUL */}
        <div className="hero-top-section">
          <h1 className="hero-heading">
            <span className="hero-sub-intro">Hey, <span className="wave-emoji">👋</span> I’m</span><br />
            <span className="hero-name-display">ELDHO PAUL</span>
          </h1>
        </div>

        {/* Profile Image - Clean without bottom gradient overlay */}
        <div className="hero-image-container">
          <div className="floating-icon">⚡</div>
          <div className="floating-icon">⟨/⟩</div>
          <div className="floating-icon">◆</div>
          <div className="floating-icon">✦</div>
          <div className="floating-icon">⬡</div>
          <div className="floating-icon">⊕</div>
          
          <div className="hero-image-wrapper">
            <img src="/profile.jpg" alt="Eldho Paul - Full Stack Developer" />
          </div>
        </div>

        {/* Description */}
        <div className="hero-description-area">
          <p className="hero-tagline">
            <span className="code-tag">{'</'}</span> I BUILD FAST, SCALABLE, AND USER-FRIENDLY WEB
            APPLICATIONS USING MODERN JAVASCRIPT TECHNOLOGIES.
            MY MAIN TOOLS OF CHOICE ARE{' '}
            <span className="underline-accent">REACT</span> ON THE FRONTEND
            AND <span className="underline-accent">NODE.JS</span> ON THE BACKEND.{' '}
            <span className="code-tag">{'/>'}</span>
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-contact-custom" id="contact-btn" onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>
              <svg className="btn-mail-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>CONTACT ME</span>
            </a>

            <a href="/resume.pdf" download className="btn-download-custom" id="download-resume-btn">
              <svg className="btn-dl-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>DOWNLOAD CV</span>
              <svg className="btn-arrow-right-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
