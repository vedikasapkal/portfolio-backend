import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid-container">
        
        {/* Left Column: Professional Details & Text */}
        <div className="hero-left-content">
          <p className="hero-subtitle">Welcome to my professional space</p>
          <h1 className="hero-title">Vedika Sapkal</h1>
          
          {/* Shifting Professional Titles */}
          <div className="animated-title-container">
            <h2 className="hero-tagline animate-text">Full Stack Developer</h2>
            <h2 className="hero-tagline animate-text">Software Engineer</h2>
            <h2 className="hero-tagline animate-text">Backend Specialist</h2>
          </div>

          <p className="hero-desc">
            An innovative Software Engineer dedicated to designing, developing, and deploying scalable web systems. Specializing in crafting highly secure, reliable enterprise architectures with "C#" and "ASP.NET Core", paired with responsive, intuitive user interfaces built using "React" and "TypeScript".
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Explore Projects</a>
            <a 
  href="/resume-backend.pdf" 
  download="Vedika_Sapkal_Resume.pdf" 
  className="btn btn-secondary"
>
  Download CV
</a>
          </div>
        </div>

        {/* Right Column: Visual Profile Display */}
        <div className="hero-right-image-container">
          <div className="profile-image-frame">
            <img src="/Profile.jpeg" alt="Vedika Sapkal" className="hero-profile-pic" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;