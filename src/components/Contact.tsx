import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out directly or check out my work online!
      </p>

      {/* Single grid layout that displays all cards together properly */}
      <div className="contact-cards-grid">
        
        {/* Card 1: Email */}
        <div className="contact-item-card">
          <div className="contact-item-icon">✉️</div>
          <h3>Email</h3>
          <p className="contact-item-value">vedikasapkal96@gmail.com</p>
          <a href="mailto:vedikasapkal9@gmail.com" className="contact-item-link">
            Send Email →
          </a>
        </div>

        {/* Card 2: Phone */}
        <div className="contact-item-card">
          <div className="contact-item-icon">📞</div>
          <h3>Call</h3>
          <p className="contact-item-value">+91 9699405725</p>
          <a href="tel:+919322521946" className="contact-item-link">
            Call Now →
          </a>
        </div>

        {/* Card 3: GitHub */}
        <div className="contact-item-card">
          <div className="contact-item-icon">💻</div>
          <h3>GitHub</h3>
          <p className="contact-item-value">github.com/vedikasapkal</p>
          <a 
            href="https://github.com/vedikasapkal" 
            target="_blank" 
            rel="noreferrer" 
            className="contact-item-link"
          >
            View Profile →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;