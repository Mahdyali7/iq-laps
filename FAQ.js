import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      id: 1,
      title: "📦 Orders & Shipping",
      icon: "🚚",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Shipping takes 2-5 business days for Baghdad and 3-7 business days for other cities in Iraq. All orders come with free shipping.",
          tags: ["shipping", "delivery"]
        },
        {
          q: "Is shipping really free?",
          a: "Yes! All orders are shipped FREE of charge. You only pay when you receive the order and are satisfied with your purchase.",
          tags: ["free", "shipping"]
        },
        {
          q: "Do you offer cash on delivery?",
          a: "Yes, we offer cash on delivery (COD) for all orders. You can inspect your order before making payment.",
          tags: ["payment", "cod"]
        },
        {
          q: "Can I track my order?",
          a: "Yes, once your order ships, you'll receive a tracking number via SMS and email to monitor your delivery status.",
          tags: ["tracking", "status"]
        }
      ]
    },
    {
      id: 2,
      title: "💳 Payment & Pricing",
      icon: "💰",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept cash on delivery, bank transfers, and online payments through Zain Cash and Asia Hawala.",
          tags: ["payment", "methods"]
        },
        {
          q: "Are prices inclusive of VAT?",
          a: "Yes, all prices shown on our website include VAT and any other applicable taxes.",
          tags: ["vat", "pricing"]
        },
        {
          q: "Do you offer installment plans?",
          a: "Currently, we don't offer installment plans. All payments are made in full either upfront or on delivery.",
          tags: ["installment", "finance"]
        }
      ]
    },
    {
      id: 3,
      title: "🔧 Products & Warranty",
      icon: "⚙️",
      questions: [
        {
          q: "Do products come with warranty?",
          a: "Yes, all products come with manufacturer's warranty. Warranty period varies by product and brand.",
          tags: ["warranty", "guarantee"]
        },
        {
          q: "Are products original and genuine?",
          a: "Absolutely! We only sell 100% original products from authorized distributors and suppliers.",
          tags: ["original", "genuine"]
        },
        {
          q: "Can I customize my PC build?",
          a: "Yes! Visit our PC Builder page to customize every component of your gaming or work PC.",
          tags: ["custom", "pc-builder"]
        },
        {
          q: "Do you have demo units to test?",
          a: "Yes, you can visit our showroom in Baghdad to test demo units before making a purchase.",
          tags: ["demo", "test"]
        }
      ]
    },
    {
      id: 4,
      title: "🔄 Returns & Support",
      icon: "🔄",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 7-day return policy for standard returns (5,000 IQD fee) and free replacements for defective items. See our Return Policy page for details.",
          tags: ["return", "policy"]
        },
        {
          q: "How can I contact customer support?",
          a: "You can reach us via phone (+964 750 760 2123), email (iqlaps@gmail.com), or visit our showroom in Baghdad.",
          tags: ["contact", "support"]
        },
        {
          q: "What are your working hours?",
          a: "We're open Saturday through Thursday from 9:00 AM to 6:00 PM. We're closed on Fridays.",
          tags: ["hours", "availability"]
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <div className="container">
        {/* Header */}
        <div className="faq-header">
          <h1>Frequently Asked Questions ❓</h1>
          <p className="subtitle">Find quick answers to common questions about IQ LAPS</p>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search questions..." 
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="categories-nav">
          {faqCategories.map((category) => (
            <button 
              key={category.id}
              className="category-tab"
              onClick={() => {
                const element = document.getElementById(`category-${category.id}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="faq-categories">
          {faqCategories.map((category) => (
            <div key={category.id} id={`category-${category.id}`} className="category-section">
              <div className="category-header">
                <h2>{category.icon} {category.title}</h2>
                <span className="question-count">{category.questions.length} questions</span>
              </div>
              
              <div className="questions-list">
                {category.questions.map((item, index) => (
                  <div 
                    key={index} 
                    className={`question-item ${activeIndex === `${category.id}-${index}` ? 'active' : ''}`}
                  >
                    <div 
                      className="question-header"
                      onClick={() => toggleFAQ(`${category.id}-${index}`)}
                    >
                      <h3>{item.q}</h3>
                      <span className="toggle-icon">
                        {activeIndex === `${category.id}-${index}` ? '−' : '+'}
                      </span>
                    </div>
                    <div className="question-answer">
                      <p>{item.a}</p>
                      <div className="tags">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Section */}
        <div className="quick-help">
          <h2>💡 Still Need Help?</h2>
          <p className="help-text">Can't find the answer you're looking for? Contact our support team directly.</p>
          
          <div className="contact-options">
            <div className="contact-option">
              <div className="option-icon">📞</div>
              <div className="option-content">
                <h4>Call Us</h4>
                <p>+964 750 760 2123</p>
                <small>Sat - Thu: 9AM - 6PM</small>
              </div>
            </div>
            
            <div className="contact-option">
              <div className="option-icon">✉️</div>
              <div className="option-content">
                <h4>Email Us</h4>
                <p>iqlaps@gmail.com</p>
                <small>Response within 24 hours</small>
              </div>
            </div>
            
            <div className="contact-option">
              <div className="option-icon">📍</div>
              <div className="option-content">
                <h4>Visit Us</h4>
                <p>Baghdad, Iraq</p>
                <small>Showroom available</small>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <Link to="/shipping-policy" className="nav-btn secondary">
            ← Shipping Policy
          </Link>
          <Link to="/return-policy" className="nav-btn secondary">
            Return Policy →
          </Link>
          <Link to="/contact" className="nav-btn primary">
            Contact Support
          </Link>
        </div>
      </div>

      <style jsx>{`
        .faq-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 40px 0 80px;
          color: #e2e8f0;
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Header */
        .faq-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .faq-header h1 {
          font-size: 3rem;
          color: #f1f5f9;
          margin-bottom: 10px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          margin-bottom: 30px;
        }
        
        .search-box {
          max-width: 500px;
          margin: 0 auto;
          display: flex;
          gap: 10px;
        }
        
        .search-input {
          flex: 1;
          padding: 15px 20px;
          background: #1e293b;
          border: 2px solid #334155;
          border-radius: 12px;
          color: #f1f5f9;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .search-btn {
          padding: 0 25px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .search-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
        }
        
        /* Categories Navigation */
        .categories-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 40px;
          justify-content: center;
        }
        
        .category-tab {
          padding: 12px 20px;
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 10px;
          color: #cbd5e1;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .category-tab:hover {
          background: #334155;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .tab-icon {
          font-size: 1.2rem;
        }
        
        /* FAQ Categories */
        .category-section {
          margin-bottom: 50px;
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid #334155;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 2px solid #334155;
        }
        
        .category-header h2 {
          font-size: 1.8rem;
          color: #f1f5f9;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .question-count {
          background: #3b82f6;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        /* Questions List */
        .questions-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .question-item {
          background: #0f172a;
          border-radius: 12px;
          border: 1px solid #334155;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .question-item.active {
          border-color: #3b82f6;
          box-shadow: 0 5px 20px rgba(59, 130, 246, 0.15);
        }
        
        .question-header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          background: #1a202c;
        }
        
        .question-header h3 {
          font-size: 1.1rem;
          color: #f1f5f9;
          margin: 0;
          flex: 1;
          font-weight: 500;
        }
        
        .toggle-icon {
          width: 30px;
          height: 30px;
          background: #334155;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          color: #cbd5e1;
          transition: all 0.3s ease;
        }
        
        .question-item.active .toggle-icon {
          background: #3b82f6;
          color: white;
          transform: rotate(180deg);
        }
        
        .question-answer {
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .question-item.active .question-answer {
          padding: 20px;
          max-height: 500px;
        }
        
        .question-answer p {
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        
        .tag {
          background: #334155;
          color: #94a3b8;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        /* Quick Help Section */
        .quick-help {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 20px;
          padding: 40px;
          margin: 60px 0;
          text-align: center;
          border: 1px solid #334155;
        }
        
        .quick-help h2 {
          color: #f1f5f9;
          margin-bottom: 15px;
          font-size: 2rem;
        }
        
        .help-text {
          color: #94a3b8;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }
        
        .contact-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .contact-option {
          background: #1a202c;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #334155;
          transition: all 0.3s ease;
        }
        
        .contact-option:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .option-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        
        .option-content h4 {
          color: #f1f5f9;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        
        .option-content p {
          color: #cbd5e1;
          font-size: 1.1rem;
          margin-bottom: 5px;
          font-weight: 500;
        }
        
        .option-content small {
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        /* Navigation Buttons */
        .navigation-buttons {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .nav-btn {
          padding: 15px 30px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-align: center;
          flex: 1;
          min-width: 200px;
        }
        
        .nav-btn.primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .nav-btn.primary:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        .nav-btn.secondary {
          background: #334155;
          color: #f1f5f9;
          border: 1px solid #475569;
        }
        
        .nav-btn.secondary:hover {
          background: #475569;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .faq-header h1 {
            font-size: 2.5rem;
          }
          
          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .contact-options {
            grid-template-columns: 1fr;
          }
          
          .navigation-buttons {
            flex-direction: column;
          }
          
          .nav-btn {
            min-width: 100%;
          }
          
          .category-section {
            padding: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .faq-header h1 {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .categories-nav {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 10px;
          }
          
          .category-tab {
            white-space: nowrap;
          }
          
          .quick-help {
            padding: 30px 20px;
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </div>
  );
};

export default FAQ;