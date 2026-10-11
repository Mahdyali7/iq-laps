import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ language, setLanguage, cartItems, setShowCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangSwitcher, setShowLangSwitcher] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      login: 'Login / Sign Up',
      search: 'Search products...',
      welcome: 'Welcome to IQ_LAPS',
      support: 'Support'
    },
    ar: {
      login: 'تسجيل الدخول / إنشاء حساب',
      search: 'ابحث عن المنتجات...',
      welcome: 'مرحباً بكم في IQ_LAPS',
      support: 'الدعم'
    }
  };

  const t = translations[language];

  const scrollToSupport = () => {
    // If we're not on homepage, navigate to homepage first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSupportSection();
      }, 100);
    } else {
      scrollToSupportSection();
    }
  };

  const scrollToSupportSection = () => {
    // Try to find support section in footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-text">
              <h1>IQ_LAPS</h1>
              <span className="logo-subtitle">{t.welcome}</span>
            </Link>
          </div>

          <div className="header-actions">
            <div className="search-container">
              <input
                type="text"
                placeholder={t.search}
                className="search-input"
              />
              <button className="search-btn">
                <i className="search-icon">🔍</i>
              </button>
            </div>

            {/* Support Button - Only this button */}
            <button 
              className="support-btn"
              onClick={scrollToSupport}
            >
              <span className="icon">🛟</span>
              <span className="text">{t.support}</span>
            </button>

            <div 
              className="lang-container"
              onMouseEnter={() => setShowLangSwitcher(true)}
              onMouseLeave={() => setShowLangSwitcher(false)}
            >
              <button className="lang-btn">
                {language === 'en' ? 'EN 🇺🇸' : 'AR 🇸🇦'}
              </button>
              {showLangSwitcher && (
                <LanguageSwitcher 
                  language={language} 
                  setLanguage={setLanguage}
                />
              )}
            </div>

            <Link to="/favorites" className="favorite-btn">
              <span className="icon">❤️</span>
              <span className="count">{/* Favorite count */}</span>
            </Link>

            <button 
              className="cart-btn" 
              onClick={() => setShowCart(true)}
            >
              <span className="icon">🛒</span>
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </button>

            <Link to="/login" className="login-btn btn btn-primary">
              {t.login}
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          background: var(--card-bg);
          padding: 15px 0;
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .header.scrolled {
          padding: 10px 0;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(10px);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
        
        .logo-text {
          text-decoration: none;
          color: var(--text-primary);
        }
        
        .logo-text h1 {
          font-size: 28px;
          background: linear-gradient(45deg, var(--primary), #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 4px;
        }
        
        .logo-subtitle {
          font-size: 12px;
          color: var(--text-secondary);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .search-container {
          display: flex;
          background: var(--background);
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        
        .search-input {
          padding: 10px 15px;
          background: transparent;
          border: noe;
          color: var(--text-primary);
          width: 250px;
        }
        
        .search-input::placeholder {
          color: var(--text-secondary);
        }
        
        .search-btn {
          background: var(--primary);
          border: none;
          padding: 0 15px;
          cursor: pointer;
          transition: background 0.3s;
        }
        
        .search-btn:hover {
          background: var(--primary-dark);
        }
        
        /* Support Button ONLY */
        .support-btn {
          background: var(--secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          padding: 8px 15px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          font-size: 14px;
        }
        
        .support-btn:hover {
          background: #2d3748;
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        
        .support-btn .icon {
          font-size: 16px;
        }
        
        /* Language, Favorite, Cart Buttons */
        .lang-container {
          position: relative;
        }
        
        .lang-btn, .favorite-btn, .cart-btn {
          background: var(--secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          padding: 8px 15px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.3s;
        }
        
        .lang-btn:hover, .favorite-btn:hover, .cart-btn:hover {
          background: #2d3748;
          border-color: var(--primary);
        }
        
        .cart-count {
          background: var(--danger);
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          position: absolute;
          top: -8px;
          right: -8px;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 10px;
          }
          
          .header-actions {
            width: 100%;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          
          .search-container {
            order: 3;
            width: 100%;
            margin-top: 10px;
          }
          
          .search-input {
            width: 100%;
          }
          
          .support-btn .text {
            display: none;
          }
          
          .support-btn,
          .lang-btn,
          .favorite-btn,
          .cart-btn {
            padding: 8px 12px;
          }
        }
        
        @media (max-width: 480px) {
          .header-actions {
            gap: 10px;
          }
          
          .login-btn {
            font-size: 12px;
            padding: 8px 12px;
          }
          
          .support-btn {
            padding: 8px 10px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;