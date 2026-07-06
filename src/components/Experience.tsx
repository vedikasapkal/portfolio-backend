import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Software Developer ',
      company: 'WebMinds It Solution.',
      duration: 'Jan 2026 - Present',
      desc: 'Developing scalable backend application modules using ASP.NET Core MVC framework and building interactive view layouts.'
    },
    {
      role: 'Frontend Projects Developer',
      company: 'WebMinds It Solution',
      duration: '2023',
      desc: 'Created dynamic responsive layouts and stateful UI interfaces utilizing modern React component trees and state libraries.'
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.duration}</div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;