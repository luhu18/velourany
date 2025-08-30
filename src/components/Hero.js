
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">Discover Your Natural Radiance</h1>
        <p className="hero-subheadline">
          Elevate your beauty routine with our premium skincare and cosmetics.
        </p>
        <Link to="/products" className="hero-cta-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;