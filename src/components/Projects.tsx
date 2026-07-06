import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Developer Hub Platform',
      desc: 'A stateful web application featuring customized item feeds, structural blog layouts, and modular UI components built with responsive material styling elements.',
      tags: ['React', 'Material UI', 'TypeScript'],
      link: 'https://github.com/vedikasapkal'
    },
    {
      title: 'Enterprise Management System',
      desc: 'A secure backend web infrastructure leveraging custom controller actions, dedicated model-view configurations, routing maps, and a persistent SQL Server layer.',
      tags: ['ASP.NET Core', 'C#', 'SQL Server'],
      link: 'https://github.com/vedikasapkal'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-header">📁</div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="project-tags">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx}>{tag}</span>
              ))}
            </div>
            <a 
              href={proj.link} 
              target="_blank" 
              rel="noreferrer" 
              className="project-link"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* GitHub Profile Call to Action Button */}
      <div className="github-cta-container">
        <a 
          href="https://github.com/vedikasapkal" 
          target="_blank" 
          rel="noreferrer" 
          className="btn btn-github"
        >
          View All Code on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;