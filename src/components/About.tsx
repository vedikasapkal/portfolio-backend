import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-img">
          <img 
  src={`${import.meta.env.BASE_URL}Profile.jpeg`} 
  alt="Vedika Sapkal Profile" 
  className="about-profile-pic" 
/>
        </div>
        <div className="about-text">
          <p>
            Hello! I am a software developer who loves building high-performance web applications. My passion for coding started with a simple interest in solving complex logical puzzles and configuring how applications work behind the scenes
          </p>
          <p>
            Today, I focus on creating reliable, secure backend code and matching it with clean, easy-to-use interfaces on the front end. I am always looking to learn new technologies, improve my coding habits, and build software that works smoothly for everyone
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;