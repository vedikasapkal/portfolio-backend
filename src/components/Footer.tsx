import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/vedikasapkal" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/vedikasapkal" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Vedika Sapkal. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;