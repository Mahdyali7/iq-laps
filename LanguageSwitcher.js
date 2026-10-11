import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="language-switcher">
      <div className="language-dropdown">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-option ${language === lang.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="flag">{lang.flag}</span>
            <span className="name">{lang.name}</span>
          </button>
        ))}
      </div>

      <style jsx>{`
        .language-switcher {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 10px;
          z-index: 1000;
        }
        
        .language-dropdown {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px 0;
          min-width: 150px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          animation: fadeIn 0.2s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .language-option {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 16px;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
        }
        
        .language-option:hover {
          background: var(--secondary);
        }
        
        .language-option.active {
          background: var(--primary);
          color: white;
        }
        
        .language-option.active:hover {
          background: var(--primary-dark);
        }
        
        .flag {
          font-size: 20px;
        }
        
        .name {
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;