// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="support-section">
      <div className="container">
        <div className="footer-content">
          
          {/* Brand & Contact Info */}
          <div className="footer-section brand-section">
            <div className="brand-info">
              <h2 className="footer-logo">IQ_LAPS</h2>
              <p className="footer-tagline">Premium Technology for Iraq</p>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <p className="contact-label">PHONE</p>
                  <p className="contact-value">+964 750 760 2123</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">EMAIL</p>
                  <p className="contact-value">iqlaps@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">LOCATION</p>
                  <p className="contact-value">Baghdad, Iraq</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🎉</span>
                <div>
                  <p className="contact-label">WORKING HOURS</p>
                  <p className="contact-value">Sat - Thu: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Shop Links - Compact */}
          <div className="footer-section compact-section">
            <h3 className="section-title">Quick Shop</h3>
            <div className="compact-links">
              <Link to="/" className="compact-link">
                <span className="compact-icon">🏠</span>
                <span className="compact-text">Home</span>
                <span className="compact-badge new">NEW</span>
              </Link>
              
              <Link to="/computers" className="compact-link">
                <span className="compact-icon">🎮</span>
                <span className="compact-text">Gaming PCs</span>
                <span className="compact-badge hot">HOT</span>
              </Link>
              
              <Link to="/laptops" className="compact-link">
                <span className="compact-icon">💻</span>
                <span className="compact-text">Laptops</span>
                <span className="compact-badge sale">SALE</span>
              </Link>
              
              <Link to="/custom-pc" className="compact-link">
                <span className="compact-icon">⚙️</span>
                <span className="compact-text">PC Builder</span>
                <span className="compact-badge custom">CUSTOM</span>
              </Link>
              
              <Link to="/best-sellers" className="compact-link">
                <span className="compact-icon">🔥</span>
                <span className="compact-text">Top Sellers</span>
                <span className="compact-badge popular">POPULAR</span>
              </Link>
              
              <Link to="/deals" className="compact-link">
                <span className="compact-icon">💰</span>
                <span className="compact-text">Deals & Offers</span>
                <span className="compact-badge discount">-20%</span>
              </Link>
            </div>
          </div>
          
          {/* Support Links - Compact */}
          <div className="footer-section compact-section">
            <h3 className="section-title">Support</h3>
            <div className="compact-links">
              <Link to="/contact" className="compact-link">
                <span className="compact-icon">📱</span>
                <span className="compact-text">Contact Us</span>
              </Link>
              
              <Link to="/faq" className="compact-link">
                <span className="compact-icon">❓</span>
                <span className="compact-text">FAQ</span>
              </Link>
              
              <Link to="/warranty" className="compact-link">
                <span className="compact-icon">🛡️</span>
                <span className="compact-text">Warranty</span>
              </Link>
              
              <Link to="/shipping-policy" className="compact-link policy-link">
                <span className="compact-icon">🚚</span>
                <div className="compact-text-group">
                  <span className="compact-text">Shipping Policy</span>
                  <span className="compact-badge free">FREE DELIVERY</span>
                </div>
              </Link>
              
              <Link to="/return-policy" className="compact-link policy-link">
                <span className="compact-icon">↩️</span>
                <div className="compact-text-group">
                  <span className="compact-text">Return Policy</span>
                  <span className="compact-badge easy">EASY RETURNS</span>
                </div>
              </Link>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} IQ_LAPS. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📸</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📺</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #fff;
          padding: 40px 0 20px;
          border-top: 1px solid #334155;
          margin-top: auto;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 30px; /* Add side padding */
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 200px; /* Add space between sections */
          margin-bottom: 50px;
        }
        
        /* Brand Section */
        .brand-section {
          flex: 1.5;
        }
        
        .brand-info {
          margin-bottom: 25px;
          text-align: left;
        }
        
        .footer-logo {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 5px;
          line-height: 1.2;
        }
        
        .footer-tagline {
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 0;
        }
        
        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 20px;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }
        
        .contact-icon {
          font-size: 18px;
          background: rgba(59, 130, 246, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .contact-label {
          color: #94a3b8;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          font-weight: 600;
        }
        
        .contact-value {
          color: #e2e8f0;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
        }
        
        /* Shop & Support Sections */
        .shop-section,
        .support-section {
          flex: 1;
          min-width: 200px;
        }
        
        /* Section Titles */
        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #3b82f6;
          text-align: left;
        }
        
        /* Compact Links */
        .compact-links {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .compact-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          text-decoration: none;
          color: #cbd5e1;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .compact-link:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #fff;
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .compact-text {
          font-size: 15px;
          font-weight: 500;
          flex: 1;
        }
        
        /* Badges for Shop */
        .compact-badge {
          font-size: 10px;
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-left: 12px;
        }
        
        .compact-badge.new {
          background: linear-gradient(45deg, #10b981, #34d399);
          color: white;
        }
        
        .compact-badge.hot {
          background: linear-gradient(45deg, #ef4444, #f87171);
          color: white;
        }
        
        .compact-badge.sale {
          background: linear-gradient(45deg, #f59e0b, #fbbf24);
          color: #1f2937;
        }
        
        .compact-badge.custom {
          background: linear-gradient(45deg, #8b5cf6, #a78bfa);
          color: white;
        }
        
        .compact-badge.popular {
          background: linear-gradient(45deg, #3b82f6, #60a5fa);
          color: white;
        }
        
        .compact-badge.discount {
          background: linear-gradient(45deg, #ec4899, #f472b6);
          color: white;
        }
        
        /* Policy Links */
        .policy-link {
          background: rgba(59, 130, 246, 0.05);
          border-left: 3px solid #3b82f6;
        }
        
        .policy-tag {
          font-size: 9px;
          padding: 3px 8px;
          border-radius: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          margin-left: 12px;
          font-style: italic;
        }
        
        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid #334155;
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }
        
        .copyright {
          color: #94a3b8;
          font-size: 14px;
        }
        
        .social-links {
          display: flex;
          gap: 12px;
        }
        
        .social-link {
          width: 38px;
          height: 38px;
          background: rgba(203, 213, 225, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-3px);
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-content {
            gap: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 30px 0 20px;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 40px;
          }
          
          .brand-section,
          .shop-section,
          .support-section {
            width: 100%;
          }
          
          .footer-logo {
            font-size: 28px;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .compact-link {
            padding: 10px 12px;
          }
          
          .compact-text {
            font-size: 14px;
          }
          
          .compact-badge {
            font-size: 9px;
            padding: 3px 8px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-item {
            gap: 12px;
          }
          
          .contact-icon {
            width: 32px;
            height: 32px;
            font-size: 16px;
          }
          
          .contact-value {
            font-size: 13px;
          }
          
          .section-title {
            font-size: 16px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;