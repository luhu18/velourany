import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section - styled as a background image container */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Velourany</h1>
          <p>Discover our story and our commitment to sustainable, high-quality beauty products.</p>
          <Link to="/contact">
            <button className="shop-now-btn">Contact Us</button>
          </Link>
        </div>
      </section>

      {/* About Content Section - this is the second part of the page */}
      <div className="about-content-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>Velourany is a premier online store dedicated to providing high-quality beauty and skincare products. Our mission is to help you discover your natural beauty and feel confident in your own skin.</p>
          <p>We believe in the power of natural ingredients and sustainable practices. Our carefully curated selection of products is sourced from ethical suppliers who share our commitment to a healthier planet and a more beautiful you.</p>
          <p>Established in 2024, Belletrny has quickly become a trusted name in the beauty industry. Our team of experts is passionate about helping you find the perfect products for your unique needs. Thank you for choosing us on your beauty journey.</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;