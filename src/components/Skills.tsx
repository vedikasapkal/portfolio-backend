import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Frontend', skills: ['React','Angular', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Material UI'] },
    { title: 'Backend', skills: ['ASP.NET Core','ASP.NET MVC' ,'C#', 'Node.js', 'Express.js'] },
    { title: 'Database & Tools', skills: ['SQL Server', 'MongoDB', 'Git', 'RESTful APIs','MYSQL','Node.js'] }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skill-card" key={idx}>
            <h3>{cat.title}</h3>
            <div className="tags">
              {cat.skills.map((skill, sIdx) => (
                <span className="tag" key={sIdx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;