
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" 
    }}>
      <div className="hero-content">
        <h1 className="hero-title font-display">A Gift That Transforms The World</h1>
        <p className="hero-subtitle">Helping rebuild lives through the gift of organ and tissue donation.</p>
        <Link to="/what-we-do" className="learn-more-btn">
          Learn More
        </Link>
        <div className="slide-indicators mt-12">
          <span className="slide-indicator active"></span>
          <span className="slide-indicator"></span>
          <span className="slide-indicator"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
