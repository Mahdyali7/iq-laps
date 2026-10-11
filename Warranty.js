import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Warranty = () => {
  const [activeTab, setActiveTab] = useState('standard');

  const warrantyPlans = {
    standard: {
      name: "📦 Standard Warranty",
      duration: "1 Year",
      price: "Included",
      icon: "📦",
      color: "#3b82f6",
      features: [
        "✓ 1-year coverage from purchase date",
        "✓ Manufacturing defects coverage",
        "✓ Parts replacement for defective items",
        "✓ Labor costs included",
        "✓ Technical support via phone/email",
        "✗ Accidental damage not covered",
        "✗ Physical damage not covered",
        "✗ Water/liquid damage not covered"
      ],
      description: "Our standard warranty covers all manufacturing defects and ensures your product functions as intended for one full year."
    },
    extended: {
      name: "🛡️ Extended Warranty",
      duration: "2 Years",
      price: "50,000 IQD",
      icon: "🛡️",
      color: "#10b981",
      features: [
        "✓ 2-year coverage from purchase date",
        "✓ All Standard Warranty features",
        "✓ Accidental damage protection",
        "✓ One-time screen replacement",
        "✓ Priority technical support",
        "✓ Free pickup & delivery for repairs",
        "✓ 24-hour repair turnaround",
        "✓ Battery replacement (if applicable)"
      ],
      description: "Extended warranty provides comprehensive protection including accidental damage and faster repair services."
    },
    premium: {
      name: "🏆 Premium Warranty",
      duration: "3 Years",
      price: "80,000 IQD",
      icon: "🏆",
      color: "#8b5cf6",
      features: [
        "✓ 3-year coverage from purchase date",
        "✓ All Extended Warranty features",
        "✓ On-site technical support",
        "✓ Loaner device during repairs",
        "✓ Annual performance checkup",
        "✓ Free cleaning & maintenance",
        "✓ Data recovery service",
        "✓ Express replacement (next-day)"
      ],
      description: "Premium warranty offers the highest level of protection with on-site support and fastest replacement times."
    }
  };

  const coverageDetails = [
    {
      title: "🔧 What's Covered",
      items: [
        "Manufacturing defects",
        "Hardware failures",
        "Battery issues (if applicable)",
        "Performance degradation",
        "Software-related hardware issues",
        "Component replacement"
      ]
    },
    {
      title: "🚫 What's Not Covered",
      items: [
        "Physical damage from accidents",
        "Water or liquid damage",
        "Unauthorized modifications",
        "Normal wear and tear",
        "Cosmetic damage",
        "Lost or stolen items",
        "Damage from improper use",
        "Software issues not affecting hardware"
      ]
    },
    {
      title: "📋 Warranty Conditions",
      items: [
        "Valid only with original receipt",
        "Serial number must match",
        "Original packaging not required",
        "Warranty is non-transferable",
        "Regular maintenance required",
        "Authorized service centers only",
        "Warranty void if tampered with"
      ]
    }
  ];

  const claimSteps = [
    {
      step: 1,
      title: "Contact Support",
      description: "Call or email our warranty department with your order details",
      time: "1-2 hours",
      icon: "📞"
    },
    {
      step: 2,
      title: "Diagnosis",
      description: "Our technicians diagnose the issue remotely or in-person",
      time: "24 hours",
      icon: "🔍"
    },
    {
      step: 3,
      title: "Approval",
      description: "We approve the warranty claim and schedule repair/replacement",
      time: "1-2 days",
      icon: "✅"
    },
    {
      step: 4,
      title: "Resolution",
      description: "Repair completed or replacement shipped to your location",
      time: "3-5 days",
      icon: "🚚"
    }
  ];

  return (
    <div className="warranty-page">
      <div className="container">
        {/* Header */}
        <div className="warranty-header">
          <h1>🔧 Product Warranty</h1>
          <p className="subtitle">Comprehensive protection plans for your peace of mind</p>
        </div>

        {/* Warranty Plans Tabs */}
        <div className="plans-tabs">
          {Object.keys(warrantyPlans).map((planKey) => (
            <button
              key={planKey}
              className={`plan-tab ${activeTab === planKey ? 'active' : ''}`}
              onClick={() => setActiveTab(planKey)}
              style={{
                borderBottomColor: warrantyPlans[planKey].color,
                borderBottomWidth: activeTab === planKey ? '3px' : '0'
              }}
            >
              <span className="tab-icon">{warrantyPlans[planKey].icon}</span>
              <span className="tab-name">{warrantyPlans[planKey].name}</span>
              <span className="tab-duration">{warrantyPlans[planKey].duration}</span>
            </button>
          ))}
        </div>

        {/* Selected Plan Details */}
        <div className="selected-plan">
          <div className="plan-header">
            <div className="plan-title">
              <span className="plan-icon" style={{ color: warrantyPlans[activeTab].color }}>
                {warrantyPlans[activeTab].icon}
              </span>
              <h2>{warrantyPlans[activeTab].name}</h2>
            </div>
            <div className="plan-price">
              <div className="price-amount">{warrantyPlans[activeTab].price}</div>
              <div className="price-label">{warrantyPlans[activeTab].duration}</div>
            </div>
          </div>

          <p className="plan-description">{warrantyPlans[activeTab].description}</p>

          <div className="plan-features">
            <h3>Features & Coverage</h3>
            <ul>
              {warrantyPlans[activeTab].features.map((feature, index) => (
                <li key={index} className={feature.startsWith('✓') ? 'included' : 'excluded'}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="plan-actions">
            <button className="add-to-cart-btn">
              🛒 Add to Cart - {warrantyPlans[activeTab].price}
            </button>
            <button className="contact-btn">
              💬 Contact for Details
            </button>
          </div>
        </div>

        {/* Coverage Details Grid */}
        <div className="coverage-section">
          <h2>📋 Warranty Coverage Details</h2>
          <div className="coverage-grid">
            {coverageDetails.map((section, index) => (
              <div key={index} className="coverage-card">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Claim Process */}
        <div className="claim-process">
          <h2>⚡ Claim Process</h2>
          <p className="process-description">Simple 4-step process to get your product repaired or replaced</p>
          
          <div className="process-steps">
            {claimSteps.map((step) => (
              <div key={step.step} className="process-step">
                <div className="step-header">
                  <div className="step-number" style={{ backgroundColor: warrantyPlans[activeTab].color }}>
                    {step.step}
                  </div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                <div className="step-time">
                  <span className="time-icon">⏱️</span>
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="important-notes">
          <h3>📝 Important Notes</h3>
          <div className="notes-content">
            <div className="note">
              <h4>📄 Documentation Required</h4>
              <p>Keep your original receipt/invoice. Warranty claims require proof of purchase.</p>
            </div>
            <div className="note">
              <h4>🔍 Inspection Rights</h4>
              <p>IQ LAPS reserves the right to inspect products before approving warranty claims.</p>
            </div>
            <div className="note">
              <h4>⚖️ Legal Rights</h4>
              <p>This warranty is in addition to your statutory rights under Iraqi consumer law.</p>
            </div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="warranty-support">
          <h2>📞 Warranty Support</h2>
          <div className="support-options">
            <div className="support-option">
              <div className="option-icon">📞</div>
              <div className="option-content">
                <h4>Phone Support</h4>
                <p>+964 750 760 2123</p>
                <small>Sat - Thu: 9AM - 6PM</small>
              </div>
            </div>
            
            <div className="support-option">
              <div className="option-icon">✉️</div>
              <div className="option-content">
                <h4>Email Support</h4>
                <p>warranty@iqlaps.com</p>
                <small>Response within 24 hours</small>
              </div>
            </div>
            
            <div className="support-option">
              <div className="option-icon">📍</div>
              <div className="option-content">
                <h4>Service Center</h4>
                <p>Baghdad, Iraq</p>
                <small>Bring product for in-person service</small>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="warranty-navigation">
          <Link to="/faq" className="nav-link">
            ← FAQ & Support
          </Link>
          <Link to="/return-policy" className="nav-link">
            Return Policy →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .warranty-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 40px 0 80px;
          color: #e2e8f0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Header */
        .warranty-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .warranty-header h1 {
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
        
        /* Plans Tabs */
        .plans-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        
        .plan-tab {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 15px;
          padding: 20px 30px;
          color: #cbd5e1;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          min-width: 180px;
          text-align: center;
        }
        
        .plan-tab:hover {
          background: #334155;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .plan-tab.active {
          background: #1a202c;
          border-color: #475569;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .tab-icon {
          font-size: 2rem;
          margin-bottom: 5px;
        }
        
        .tab-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: #f1f5f9;
        }
        
        .tab-duration {
          font-size: 0.9rem;
          color: #94a3b8;
          background: #334155;
          padding: 3px 12px;
          border-radius: 15px;
        }
        
        /* Selected Plan */
        .selected-plan {
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 50px;
          border: 1px solid #334155;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .plan-title {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .plan-icon {
          font-size: 3rem;
        }
        
        .plan-title h2 {
          font-size: 2rem;
          color: #f1f5f9;
          margin: 0;
        }
        
        .plan-price {
          text-align: center;
          background: #0f172a;
          padding: 15px 25px;
          border-radius: 15px;
          border: 1px solid #334155;
        }
        
        .price-amount {
          font-size: 2.5rem;
          font-weight: 800;
          color: #f1f5f9;
          margin-bottom: 5px;
        }
        
        .price-label {
          color: #94a3b8;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .plan-description {
          color: #cbd5e1;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #334155;
        }
        
        .plan-features h3 {
          color: #f1f5f9;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        
        .plan-features ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 12px;
          margin-bottom: 30px;
        }
        
        .plan-features li {
          padding: 12px 20px;
          background: #0f172a;
          border-radius: 10px;
          border: 1px solid #334155;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .plan-features li.included {
          color: #cbd5e1;
        }
        
        .plan-features li.excluded {
          color: #94a3b8;
          text-decoration: line-through;
          opacity: 0.7;
        }
        
        .plan-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .add-to-cart-btn, .contact-btn {
          padding: 15px 30px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          flex: 1;
          min-width: 200px;
        }
        
        .add-to-cart-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .add-to-cart-btn:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        .contact-btn {
          background: #334155;
          color: #f1f5f9;
          border: 1px solid #475569;
        }
        
        .contact-btn:hover {
          background: #475569;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Coverage Section */
        .coverage-section {
          margin-bottom: 60px;
        }
        
        .coverage-section h2 {
          color: #f1f5f9;
          margin-bottom: 30px;
          font-size: 2rem;
          text-align: center;
        }
        
        .coverage-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .coverage-card {
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          padding: 30px;
          border-radius: 15px;
          border: 1px solid #334155;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        
        .coverage-card h3 {
          color: #f1f5f9;
          margin-bottom: 20px;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .coverage-card ul {
          list-style: none;
          padding: 0;
        }
        
        .coverage-card li {
          color: #cbd5e1;
          padding: 8px 0;
          border-bottom: 1px solid #334155;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .coverage-card li:last-child {
          border-bottom: none;
        }
        
        .coverage-card li:before {
          content: "•";
          color: #3b82f6;
          font-size: 1.5rem;
        }
        
        /* Claim Process */
        .claim-process {
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 50px;
          border: 1px solid #334155;
        }
        
        .claim-process h2 {
          color: #f1f5f9;
          margin-bottom: 10px;
          font-size: 2rem;
          text-align: center;
        }
        
        .process-description {
          color: #94a3b8;
          text-align: center;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }
        
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .process-step {
          background: #0f172a;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #334155;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .process-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border-color: #475569;
        }
        
        .step-header {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .step-number {
          width: 40px;
          height: 40px;
          background: #3b82f6;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
        }
        
        .step-icon {
          font-size: 2rem;
        }
        
        .process-step h4 {
          color: #f1f5f9;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        
        .process-step p {
          color: #cbd5e1;
          margin-bottom: 15px;
          line-height: 1.5;
          font-size: 0.95rem;
        }
        
        .step-time {
          color: #94a3b8;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        
        /* Important Notes */
        .important-notes {
          margin-bottom: 60px;
        }
        
        .important-notes h3 {
          color: #f1f5f9;
          margin-bottom: 30px;
          font-size: 1.8rem;
          text-align: center;
        }
        
        .notes-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }
        
        .note {
          background: #1e293b;
          padding: 25px;
          border-radius: 15px;
          border-left: 4px solid #3b82f6;
          border: 1px solid #334155;
        }
        
        .note h4 {
          color: #f1f5f9;
          margin-bottom: 10px;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .note p {
          color: #cbd5e1;
          line-height: 1.5;
        }
        
        /* Warranty Support */
        .warranty-support {
          margin-bottom: 50px;
        }
        
        .warranty-support h2 {
          color: #f1f5f9;
          margin-bottom: 30px;
          font-size: 2rem;
          text-align: center;
        }
        
        .support-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .support-option {
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          padding: 30px;
          border-radius: 15px;
          border: 1px solid #334155;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .support-option:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .option-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        
        .option-content h4 {
          color: #f1f5f9;
          margin-bottom: 10px;
          font-size: 1.3rem;
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
        
        /* Navigation */
        .warranty-navigation {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        
        .nav-link {
          padding: 15px 30px;
          background: #334155;
          color: #f1f5f9;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid #475569;
          text-align: center;
          flex: 1;
        }
        
        .nav-link:hover {
          background: #475569;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .warranty-header h1 {
            font-size: 2.5rem;
          }
          
          .plans-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .plan-tab {
            width: 100%;
            max-width: 300px;
          }
          
          .plan-header {
            flex-direction: column;
            text-align: center;
          }
          
          .plan-title {
            flex-direction: column;
            text-align: center;
          }
          
          .plan-features ul {
            grid-template-columns: 1fr;
          }
          
          .plan-actions {
            flex-direction: column;
          }
          
          .add-to-cart-btn, .contact-btn {
            width: 100%;
          }
          
          .coverage-grid {
            grid-template-columns: 1fr;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
          }
          
          .support-options {
            grid-template-columns: 1fr;
          }
          
          .warranty-navigation {
            flex-direction: column;
          }
        }
        
        @media (max-width: 480px) {
          .warranty-header h1 {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .selected-plan, .claim-process {
            padding: 25px 20px;
          }
          
          .price-amount {
            font-size: 2rem;
          }
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </div>
  );
};

export default Warranty;