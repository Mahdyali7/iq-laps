import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <h1>🚚 Shipping Policy</h1>
          <p className="subtitle">Free Delivery & Payment on Receipt</p>
        </div>
        
        <div className="policy-content">
          {/* Main Policy Box */}
          <div className="main-policy-box">
            <div className="policy-icon">🚚</div>
            <div className="policy-text">
              <h2>Free Shipping & Pay on Delivery</h2>
              <p className="highlight">
                <strong>Free shipping</strong> for all orders. You only pay 
                <strong> once you receive the order</strong> and are satisfied with your purchase.
              </p>
            </div>
          </div>
          
          {/* Detailed Description */}
          <div className="policy-details">
            <h3>How It Works:</h3>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Place Your Order</h4>
                  <p>Browse and order through our website. No payment required upfront.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Free Processing</h4>
                  <p>We process and ship your order with zero shipping charges.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Receive & Inspect</h4>
                  <p>Delivery agent brings your order. Inspect items upon delivery.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Pay on Delivery</h4>
                  <p>Only after receiving and being satisfied, you pay the delivery agent.</p>
                </div>
              </div>
            </div>
            
            <div className="key-points">
              <h3>Key Points:</h3>
              <ul>
                <li>✅ <strong>Free shipping</strong> on all orders</li>
                <li>✅ <strong>Cash on delivery</strong> available</li>
                <li>✅ <strong>No upfront payment</strong> required</li>
                <li>✅ <strong>Inspect before payment</strong></li>
                <li>✅ Delivery times: 2-5 business days (Baghdad)</li>
                <li>✅ Other cities: 3-7 business days</li>
              </ul>
            </div>
            
            <div className="note-box">
              <h4>📝 Important Note:</h4>
              <p>
                All orders are shipped <strong>FREE of charge</strong>. 
                You pay <strong>only when you receive the order</strong> 
                and are satisfied with your purchase.
              </p>
            </div>
          </div>
          
          {/* Back Button */}
          <div className="action-buttons">
            <Link to="/" className="back-btn">
              ← Back to Home
            </Link>
            <Link to="/return-policy" className="next-btn">
              View Return Policy →
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
          max-width: 1000px;
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
        
        /* Main Policy Box */
        .main-policy-box {
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 30px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-left: 5px solid #3b82f6;
          border: 1px solid #334155;
          transition: all 0.3s ease;
        }
        
        .main-policy-box:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border-color: #475569;
          transform: translateY(-2px);
        }
        
        .policy-icon {
          font-size: 4rem;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
        }
        
        .policy-text h2 {
          font-size: 2rem;
          color: #f1f5f9;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .highlight {
          font-size: 1.2rem;
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        .highlight strong {
          color: #60a5fa;
          text-shadow: 0 2px 4px rgba(96, 165, 250, 0.2);
        }
        
        /* Steps */
        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin: 40px 0;
        }
        
        .step {
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          display: flex;
          gap: 20px;
          transition: all 0.3s ease;
          border: 1px solid #334155;
        }
        
        .step:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          border-color: #475569;
        }
        
        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
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
        
        .step-content h4 {
          font-size: 1.2rem;
          color: #f1f5f9;
          margin-bottom: 10px;
          font-weight: 600;
        }
        
        .step-content p {
          color: #94a3b8;
          line-height: 1.5;
        }
        
        /* Key Points */
        .key-points {
          background: linear-gradient(145deg, #1e293b 0%, #1a202c 100%);
          padding: 30px;
          border-radius: 15px;
          margin: 40px 0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          border: 1px solid #334155;
        }
        
        .key-points h3 {
          color: #f1f5f9;
          margin-bottom: 20px;
          font-size: 1.5rem;
          font-weight: 600;
        }
        
        .key-points ul {
          list-style: none;
          padding: 0;
        }
        
        .key-points li {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          font-size: 1.1rem;
          color: #cbd5e1;
          padding: 8px 0;
          border-bottom: 1px solid #334155;
        }
        
        .key-points li:last-child {
          border-bottom: none;
        }
        
        .key-points li strong {
          color: #60a5fa;
        }
        
        /* Note Box */
        .note-box {
          background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
          border-left: 4px solid #0ea5e9;
          padding: 25px;
          border-radius: 10px;
          margin: 40px 0;
          border: 1px solid #0369a1;
          box-shadow: 0 5px 20px rgba(14, 165, 233, 0.1);
        }
        
        .note-box h4 {
          color: #7dd3fc;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.2rem;
        }
        
        .note-box p {
          color: #e0f2fe;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        .note-box strong {
          color: #bae6fd;
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
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .back-btn {
          background: linear-gradient(135deg, #475569 0%, #334155 100%);
          color: white;
        }
        
        .back-btn:hover {
          background: linear-gradient(135deg, #334155 0%, #1e293b 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        
        .next-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
        }
        
        .next-btn:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .policy-header h1 {
            font-size: 2.5rem;
          }
          
          .main-policy-box {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }
          
          .policy-icon {
            font-size: 3rem;
          }
          
          .policy-text h2 {
            font-size: 1.5rem;
          }
          
          .steps-container {
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
          
          .highlight {
            font-size: 1rem;
          }
          
          .main-policy-box,
          .step,
          .key-points {
            padding: 20px;
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

export default ShippingPolicy;