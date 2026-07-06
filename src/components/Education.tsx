import React from 'react';
import '../styles/Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      
      {/* Grid container matches your projects structural setup */}
      <div className="education-cards-grid">
        
        {/* FIRST CARD */}
        <div className="edu-individual-card">
          <div className="edu-card-logo">🎓</div>
          <div className="edu-year">2023 - 2026</div>
          <h3>Bachelor of Technology in Computer Science</h3>
          <p className="edu-inst">JSPM University</p>
          <p className="edu-details">
            Specializing in Software Engineering Core Frameworks, Advanced Algorithms, and Enterprise Development Structures.
          </p>
        </div>

        {/* SECOND CARD */}
        <div className="edu-individual-card">
          <div className="edu-card-logo">🎓</div>
          <div className="edu-year">2020 - 2023</div>
          <h3>Diploma</h3>
          <p className="edu-inst">Electronics And Telecommunication</p>
          <p className="edu-details">
            Focused on foundational circuit analytics, fundamental embedded systems, and introductory programmatic execution.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;