import React from 'react';
import './Contact.css';

const ContactPage = () => {
  return (
    <>
      
      <section className="hero-section">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      
      <div className="contact-content-section">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Our Office</h3>
            <p>kakuma</p>
            <p>Email: info@Velourany.com</p>
            <p>Phone: 254112879207</p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;