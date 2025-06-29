// src/components/About.js
import React from 'react';

function About() {
  return (
    <div style={{
      padding: '30px',
      margin: '20px auto',
      maxWidth: '600px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      color: '#222'
    }}>
      <h2>About Us</h2>
      <p>
        Welcome to <strong>BananaGlow</strong>! 🍌✨  
        We create premium banana-based cosmetic products that are natural, effective, and eco-friendly.  
        Our goal is to bring the goodness of nature into your skincare routine, one product at a time.
      </p>
    </div>
  );
}

export default About;
