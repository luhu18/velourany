import React from 'react';
import { Link } from 'react-router-dom';
import './Magazine.css';

const Magazine = () => {
  const articles = [
    {
      title: 'Our New Beauty Line',
      date: '24 March 2025',
      link: '/assets/moisture.webp',
      description: 'Discover the latest innovations in skincare and makeup with our new beauty line.',
    },
    {
      title: 'Guide to Perfect Skincare',
      date: '10 March 2025',
      link: '/assets/Natural-Lip-Scrub.webp',
      description: 'A complete guide to building your perfect skincare routine, from cleansing to moisturizing.',
    },
    {
      title: 'Trending Makeup Looks',
      date: '05 March 2025',
      link: '/assets/makeups-look.webp',
      description: 'Explore the top trending makeup looks of the season and learn how to recreate them.',
    },
  ];

  return (
    <section className="magazine-section">
      <h2 className="section-title">Our Latest News</h2>
      <div className="magazine-grid">
        {articles.map((article, index) => (
          <div className="magazine-card" key={index}>
            <Link to={article.link}>
              <div className="magazine-image-container">
                <img src={article.link} alt={article.title} loading="lazy" />
              </div>
              <div className="magazine-info">
                <span className="magazine-date">{article.date}</span>
                <h3 className="magazine-title">{article.title}</h3>
                <p className="magazine-description">{article.description}</p>
                <span className="read-more">Read More &rarr;</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Magazine;