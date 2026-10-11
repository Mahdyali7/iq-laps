import React from 'react';
import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1>↩️ Return Policy</h1>
          <p className="subtitle">Easy Returns & Free Replacements</p>
        </div>
        
        <div className="policy-content">
          {/* Two Policy Boxes Side by Side */}
          <div className="policy-boxes">
            {/* Standard Returns */}
            <div className="policy-box return-box">
              <div className="box-header">
                <span className="box-icon">↩️</span>
                <h2>Standard Returns</h2>
              </div>
              <div className="fee-display">
                <div className="fee-label">Return</div>
                <div className="fee-amount">5,000 IQD</div>
                <div className="fee-description">Pickup & Processing</div>
              </div>
              <div className="box-content">
                <h3>Applicable For:</h3>
                <ul>
                  <li>✓ Change of mind</li>
                  <li>✓ Wrong size ordered</li>
                  <li>✓ Item not as expected</li>
                  <li>✓ Non-defective returns</li>
                </ul>
                <p className="policy-text">
                  <strong>If you want to return an order, pay a delivery fee of 5,000 IQD.</strong>
                  This covers pickup and processing of your return.
                </p>
              </div>
            </div>
            
            {/* Free Replacements */}
            <div className="policy-box replacement-box">
              <div className="box-header">
                <span className="box-icon">🔄</span>
                <h2>Defective Items</h2>
              </div>
              <div className="fee-display">
                <div className="fee-label">Replacement</div>
                <div className="fee-amount free">FREE</div>
                <div className="fee-description">No Charge</div>
              </div>
              <div className="box-content">
                <h3>Applicable For:</h3>
                <ul>
                  <li>✓ Broken items</li>
                  <li>✓ Manufacturing defects</li>
                  <li>✓ Wrong item delivered</li>
                  <li>✓ Damaged during delivery</li>
                </ul>
                <p className="policy-text">
                  <strong>If the order contains a broken or defective item, it can be replaced.</strong>
                  Free replacement at no additional cost.
                </p>
              </div>
            </div>
          </div>
          
          {/* Process Steps */}
          <div className="process-section">
            <h3>Return Process</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Contact Support</h4>
                  <p>Call or email within 7 days of delivery</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Schedule Pickup</h4>
                  <p>We arrange pickup (fee applies for standard returns)</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Inspection</h4>
                  <p>Items inspected within 1-2 business days</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Resolution</h4>
                  <p>Refund or replacement processed within 3-5 days</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Important Conditions */}
          <div className="conditions-section">
            <h3>Important Conditions</h3>
            <div className="conditions-grid">
              <div className="condition-card">
                <div className="condition-icon">⏰</div>
                <h4>Time Limit</h4>
                <p>Returns must be initiated within 7 days of delivery</p>
              </div>
              
              <div className="condition-card">
                <div className="condition-icon">🏷️</div>
                <h4>Original Condition</h4>
                <p>Items must be in original packaging with all tags</p>
              </div>
              
              <div className="condition-card">
                <div className="condition-icon">📦</div>
                <h4>Packaging</h4>
                <p>Original box and accessories must be included</p>
              </div>
              
              <div className="condition-card">
                <div className="condition-icon">💰</div>
                <h4>Refund Method</h4>
                <p>Refunds issued to original payment method</p>
              </div>
            </div>
          </div>
          
          {/* Summary Box */}
          <div className="summary-box">
            <h4>📋 Policy Summary:</h4>
            <div className="summary-content">
              <p><strong>Standard Returns:</strong> 5,000 IQD for pickup and processing</p>
              <p><strong>Defective Items:</strong> Free replacement with no additional charges</p>
              <p><strong>Return Window:</strong> 7 days from delivery date</p>
              <p><strong>Refund Time:</strong> 3-5 business days after inspection</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <Link to="/shipping-policy" className="back-btn">
              ← View Shipping Policy
            </Link>
            <Link to="/" className="next-btn">
              Back to Home →
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .policy-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 40px 0;
          color: #e2e8f0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .policy-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .policy-header h1 {
          font-size: 3rem;
          color: #f1f5f9;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          font-weight: 500;
        }
        
        /* Policy Boxes */
        .policy-boxes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .policy-box {
          background: #1e293b;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid #334155;
          transition: all 0.3s ease;
        }
        
        .policy-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border-color: #475569;
        }
        
        .return-box {
          border-top: 5px solid #ef4444;
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
        }
        
        .replacement-box {
          border-top: 5px solid #10b981;
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
        }
        
        .box-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .box-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        .box-header h2 {
          font-size: 1.8rem;
          color: #f1f5f9;
          margin: 0;
          font-weight: 600;
        }
        
        /* Fee Display */
        .fee-display {
          background: #0f172a;
          border-radius: 15px;
          padding: 25px;
          text-align: center;
          margin: 25px 0;
          border: 1px solid #334155;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .fee-label {
          font-size: 0.9rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        
        .fee-amount {
          font-size: 3rem;
          font-weight: 800;
          color: #ef4444;
          margin: 10px 0;
          text-shadow: 0 2px 10px rgba(239, 68, 68, 0.3);
        }
        
        .fee-amount.free {
          color: #10b981;
          text-shadow: 0 2px 10px rgba(16, 185, 129, 0.3);
        }
        
        .fee-description {
          font-size: 0.9rem;
          color: #cbd5e1;
        }
        
        /* Box Content */
        .box-content h3 {
          color: #f1f5f9;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
        
        .box-content ul {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
        }
        
        .box-content li {
          color: #cbd5e1;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .policy-text {
          color: #cbd5e1;
          line-height: 1.6;
          font-size: 1.1rem;
          padding: 15px;
          background: #0f172a;
          border-radius: 10px;
          border-left: 4px solid #3b82f6;
          border: 1px solid #334155;
        }
        
        .policy-text strong {
          color: #f1f5f9;
        }
        
        /* Process Steps */
        .process-section {
          background: #1e293b;
          padding: 40px;
          border-radius: 20px;
          margin: 40px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid #334155;
        }
        
        .process-section h3 {
          color: #f1f5f9;
          margin-bottom: 30px;
          font-size: 1.8rem;
          text-align: center;
        }
        
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 25px;
        }
        
        .process-step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        
        .process-step .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .process-step h4 {
          color: #f1f5f9;
          margin-bottom: 5px;
          font-size: 1.2rem;
        }
        
        .process-step p {
          color: #94a3b8;
          line-height: 1.5;
          font-size: 0.95rem;
        }
        
        /* Conditions */
        .conditions-section {
          margin: 50px 0;
        }
        
        .conditions-section h3 {
          color: #f1f5f9;
          margin-bottom: 30px;
          font-size: 1.8rem;
        }
        
        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }
        
        .condition-card {
          background: #1e293b;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #334155;
        }
        
        .condition-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          border-color: #475569;
        }
        
        .condition-icon {
          font-size: 2rem;
          margin-bottom: 15px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        .condition-card h4 {
          color: #f1f5f9;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        
        .condition-card p {
          color: #cbd5e1;
          line-height: 1.5;
          font-size: 0.95rem;
        }
        
        /* Summary Box */
        .summary-box {
          background: linear-gradient(135deg, #0f172a 0%, #1a202c 100%);
          border-left: 4px solid #0ea5e9;
          padding: 30px;
          border-radius: 15px;
          margin: 40px 0;
          border: 1px solid #334155;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        }
        
        .summary-box h4 {
          color: #7dd3fc;
          margin-bottom: 20px;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .summary-content p {
          color: #cbd5e1;
          margin-bottom: 10px;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        .summary-content strong {
          color: #7dd3fc;
        }
        
        /* Action Buttons */
        .action-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
          gap: 20px;
        }
        
        .back-btn, .next-btn {
          padding: 15px 30px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          text-align: center;
        }
        
        .back-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .back-btn:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        .next-btn {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        
        .next-btn:hover {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .policy-header h1 {
            font-size: 2.5rem;
          }
          
          .policy-boxes {
            grid-template-columns: 1fr;
          }
          
          .fee-amount {
            font-size: 2.5rem;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .conditions-grid {
            grid-template-columns: 1fr;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .back-btn, .next-btn {
            width: 100%;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          .policy-header h1 {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .policy-box {
            padding: 20px;
          }
          
          .box-header h2 {
            font-size: 1.5rem;
          }
          
          .fee-display {
            padding: 20px;
          }
          
          .process-section {
            padding: 25px;
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

export default ReturnPolicy;