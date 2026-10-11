import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/computers', label: 'Computers' },
    { path: '/laptops', label: 'Laptops' },
    { path: '/custom-pc', label: 'Custom PC Builder' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className={`navbar ${isHidden ? 'nav-hidden' : 'nav-visible'}`}>
      <div className="container">
        <div className="nav-content">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: var(--secondary);
          border-bottom: 1px solid var(--border);
          padding: 0;
          position: sticky;
          top: 80px;
          z-index: 999;
          transition: transform 0.3s ease-in-out;
        }
        
        .nav-visible {
          transform: translateY(0);
        }
        
        .nav-hidden {
          transform: translateY(-100%);
        }
        
        .nav-content {
          display: flex;
          justify-content: center;
        }
        
        .nav-list {
          display: flex;
          list-style: none;
          gap: 2px;
          margin: 0;
          padding: 0;
        }
        
        .nav-item {
          margin: 0;
        }
        
        .nav-link {
          display: block;
          padding: 15px 24px;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          white-space: nowrap;
        }
        
        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(14, 165, 233, 0.1);
        }
        
        .nav-link.active {
          color: var(--primary);
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 20%;
          right: 20%;
          height: 3px;
          background: var(--primary);
          border-radius: 3px 3px 0 0;
        }
        
        @media (max-width: 768px) {
          .nav-list {
            overflow-x: auto;
            padding: 0 10px;
          }
          
          .nav-link {
            padding: 12px 16px;
            font-size: 14px;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;