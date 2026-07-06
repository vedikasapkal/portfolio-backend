import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">Portfolio<span>.</span></a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;