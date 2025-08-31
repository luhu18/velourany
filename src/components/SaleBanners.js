import React from 'react';
import { Link } from 'react-router-dom';
import './SaleBanners.css';

const SaleBanners = () => {
  return (
    <section className="sale-banners-section">
      <div className="sale-banner-item">
        <Link to="/sale/cosmetic">
          <div className="sale-banner-content">
            <img src="/assets/set.webp" alt="25% Discount Cosmetic Skin Perfectly" loading="lazy" />
            <div className="sale-banner-text">
              <span className="discount-label">25% Discount</span>
              <h2>Cosmetic Skin Perfectly</h2>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </Link>
      </div>
      <div className="sale-banner-item">
        <Link to="/sale/hydrated">
          <div className="sale-banner-content">
            <img src="/assets/sponge-2384059_1280 (1).webp" alt="30% Discount Hydrated Skin Perfectly" loading="lazy" />
            <div className="sale-banner-text">
              <span className="discount-label">30% Discount</span>
              <h2>Hydrated Skin Perfectly</h2>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SaleBanners;