import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsMoonStarsFill } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-column brand-info">
          <h2>Velourany<BsMoonStarsFill/></h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using it is that it has a more-or-less normal distribution of letters.</p>
          <address>
            39, Kakuma, Hong kong,<br />
            K1Z2B5
          </address>
        </div>

        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/delivery">Delivery Information</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>My Account</h3>
          <ul>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/orders">Order History</Link></li>
            <li><Link to="/wishlist">Wish List</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/returns">Returns</Link></li>
          </ul>
        </div>

        <div className="footer-column newsletter-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get new product updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Velourany<BsMoonStarsFill/> - Beauty Products Store. Powered by Shopify.</p>
      </div>
    </footer>
  );
};

export default Footer;