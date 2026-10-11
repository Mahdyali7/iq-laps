import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = ({ isOpen, onClose, items, setItems }) => {
  const [location, setLocation] = useState('');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.price || 0), 0);
  };

  const calculateDeliveryDays = () => {
    if (shippingMethod === 'express') return 2;
    if (shippingMethod === 'standard') return 5;
    return 7;
  };

  const convertToIQD = (usdPrice) => {
    return (usdPrice * 1450).toLocaleString();
  };

  const getShippingCost = () => {
    switch(shippingMethod) {
      case 'express': return 15.00;
      case 'economy': return 2.00;
      default: return 5.00;
    }
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = getShippingCost();
    return subtotal + shipping;
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    
    // If cart becomes empty, close modal
    if (newItems.length === 0) {
      onClose();
    }
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(index);
      return;
    }
    
    const newItems = [...items];
    const item = newItems[index];
    
    // If item already has quantity property
    if (item.quantity !== undefined) {
      item.quantity = newQuantity;
      // Recalculate price based on quantity if needed
      if (item.unitPrice) {
        item.price = item.unitPrice * newQuantity;
      }
    } else {
      // Add quantity property
      item.quantity = newQuantity;
      item.unitPrice = item.price;
      item.price = item.unitPrice * newQuantity;
    }
    
    setItems(newItems);
  };

  const handleCheckout = () => {
    if (!location.trim()) {
      alert('Please enter your delivery address');
      return;
    }

    setCheckoutLoading(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setCheckoutLoading(false);
      
      const orderSummary = {
        items: items,
        shippingAddress: location,
        shippingMethod: shippingMethod,
        shippingCost: getShippingCost(),
        total: calculateTotal(),
        deliveryDays: calculateDeliveryDays(),
        orderDate: new Date().toLocaleDateString()
      };
      
      // Store order in localStorage
      localStorage.setItem('lastOrder', JSON.stringify(orderSummary));
      
      // Clear cart
      setItems([]);
      
      // Show success message
      alert(`✅ Order placed successfully!\n\n📦 Delivery to: ${location}\n💰 Total: $${calculateTotal().toFixed(2)}\n⏰ Estimated delivery: ${calculateDeliveryDays()} days\n\nYou will pay when the products arrive.`);
      
      // Close modal
      onClose();
      
      // Navigate to home
      navigate('/');
    }, 1000);
  };

  const clearCart = () => {
    if (items.length === 0) return;
    
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setItems([]);
      onClose();
    }
  };

  return (
    <div className="cart-modal">
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="cart-header">
          <h2>🛒 Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <p>Your cart is empty</p>
              <p className="empty-cart-hint">Add some products to get started!</p>
              <Link to="/computers" className="btn btn-primary" onClick={onClose}>
                Browse Computers
              </Link>
              <Link to="/laptops" className="btn btn-secondary" onClick={onClose}>
                Browse Laptops
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span>Action</span>
              </div>
              
              <div className="cart-items">
                {items.map((item, index) => (
                  <div key={`${item.id || item.name}-${index}`} className="cart-item">
                    <div className="item-info">
                      <img 
                        src={item.image || 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=100&h=75&fit=crop'} 
                        alt={item.name} 
                        className="item-image" 
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=100&h=75&fit=crop';
                        }}
                      />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        {item.specs && Array.isArray(item.specs) && (
                          <div className="item-specs">
                            {item.specs.slice(0, 2).map((spec, i) => (
                              <span key={i} className="spec-tag">{spec}</span>
                            ))}
                          </div>
                        )}
                        {item.isCustom && (
                          <span className="custom-badge">Custom Build</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="item-unit-price">
                      ${item.unitPrice ? item.unitPrice.toFixed(2) : item.price.toFixed(2)}
                    </div>
                    
                    <div className="item-quantity">
                      <button 
                        className="quantity-btn minus"
                        onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity || 1}</span>
                      <button 
                        className="quantity-btn plus"
                        onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="item-total-price">
                      ${((item.quantity || 1) * (item.unitPrice || item.price)).toFixed(2)}
                    </div>
                    
                    <div className="item-actions">
                      <button 
                        className="remove-btn"
                        onClick={() => removeItem(index)}
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-section">
                  <h3>Delivery Information</h3>
                  <div className="form-group">
                    <label htmlFor="location">Your Location in Iraq:</label>
                    <input
                      id="location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your full address (City, District, Street)"
                      className="location-input"
                      required
                    />
                    {location && (
                      <div className="input-hint">📍 We deliver to all Iraqi cities</div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="shipping">Shipping Method:</label>
                    <div className="shipping-options">
                      {[
                        { value: 'express', label: 'Express Delivery', desc: '2-3 days', cost: '$15.00' },
                        { value: 'standard', label: 'Standard Delivery', desc: '5-7 days', cost: '$5.00' },
                        { value: 'economy', label: 'Economy Delivery', desc: '7-10 days', cost: '$2.00' }
                      ].map(option => (
                        <label key={option.value} className="shipping-option">
                          <input
                            type="radio"
                            name="shipping"
                            value={option.value}
                            checked={shippingMethod === option.value}
                            onChange={(e) => setShippingMethod(e.target.value)}
                          />
                          <div className="shipping-option-details">
                            <div className="shipping-option-name">
                              {option.label}
                              <span className="shipping-cost">{option.cost}</span>
                            </div>
                            <div className="shipping-option-desc">{option.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="summary-section">
                  <h3>Order Summary</h3>
                  <div className="price-breakdown">
                    <div className="price-row">
                      <span>Subtotal ({items.length} {items.length === 1 ? 'item' : 'items'}):</span>
                      <span>${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="price-row">
                      <span>Shipping ({shippingMethod}):</span>
                      <span>${getShippingCost().toFixed(2)}</span>
                    </div>
                    <div className="price-row discount">
                      <span>Discount (Cash Payment):</span>
                      <span className="discount-amount">− $5.00</span>
                    </div>
                    <div className="price-row tax">
                      <span>Tax (VAT 0%):</span>
                      <span>$0.00</span>
                    </div>
                    <div className="price-row total">
                      <span>Total Amount:</span>
                      <span>${(calculateTotal() - 5).toFixed(2)}</span>
                    </div>
                    <div className="price-row iqd">
                      <span>Total in IQD:</span>
                      <span>{convertToIQD(calculateTotal() - 5)} IQD</span>
                    </div>
                  </div>
                </div>

                <div className="summary-section">
                  <h3>Delivery & Payment</h3>
                  <div className="delivery-info-card">
                    <div className="info-icon">📦</div>
                    <div>
                      <strong>Estimated Delivery:</strong> {calculateDeliveryDays()} business days
                      <div className="info-detail">Free delivery across all of Iraq</div>
                    </div>
                  </div>
                  
                  <div className="payment-info-card">
                    <div className="info-icon">💳</div>
                    <div>
                      <strong>Cash on Delivery</strong>
                      <div className="info-detail">
                        Pay when you receive your order<br />
                        <small>($5 discount for cash payment)</small>
                      </div>
                    </div>
                  </div>
                  
                  <div className="warranty-info-card">
                    <div className="info-icon">🛡️</div>
                    <div>
                      <strong>Warranty Included</strong>
                      <div className="info-detail">2-3 years warranty on all products</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cart-actions">
                <button className="btn btn-secondary clear-btn" onClick={clearCart}>
                  🗑️ Clear Cart
                </button>
                <button className="btn btn-secondary" onClick={onClose}>
                  ← Continue Shopping
                </button>
                <button 
                  className={`btn btn-primary checkout-btn ${checkoutLoading ? 'loading' : ''}`}
                  onClick={handleCheckout}
                  disabled={!location.trim() || checkoutLoading}
                >
                  {checkoutLoading ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : (
                    `Proceed to Checkout ($${(calculateTotal() - 5).toFixed(2)})`
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .cart-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2000;
        }
        
        .cart-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
        }
        
        .cart-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 600px;
          background: var(--card-bg);
          display: flex;
          flex-direction: column;
          animation: slideIn 0.3s ease;
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid var(--border);
          background: var(--background);
        }
        
        .cart-header h2 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1.5rem;
        }
        
        .close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 24px;
          cursor: pointer;
          padding: 5px 10px;
          transition: all 0.3s;
          border-radius: 4px;
        }
        
        .close-btn:hover {
          color: var(--danger);
          background: rgba(239, 68, 68, 0.1);
        }
        
        .cart-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }
        
        .empty-cart {
          text-align: center;
          padding: 60px 20px;
        }
        
        .empty-cart-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.5;
        }
        
        .empty-cart p {
          margin-bottom: 10px;
          color: var(--text-secondary);
          font-size: 18px;
        }
        
        .empty-cart-hint {
          font-size: 14px;
          margin-bottom: 30px;
          color: var(--text-tertiary);
        }
        
        .empty-cart .btn {
          margin: 5px;
          min-width: 150px;
        }
        
        .cart-items-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
          gap: 15px;
          padding: 10px 15px;
          background: var(--background);
          border-radius: 8px;
          margin-bottom: 15px;
          font-weight: 600;
          color: var(--text-secondary);
          font-size: 14px;
          border: 1px solid var(--border);
        }
        
        .cart-items {
          margin-bottom: 30px;
        }
        
        .cart-item {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
          gap: 15px;
          align-items: center;
          padding: 15px;
          background: var(--background);
          border-radius: 8px;
          margin-bottom: 10px;
          border: 1px solid var(--border);
          transition: all 0.2s;
        }
        
        .cart-item:hover {
          border-color: var(--primary);
          background: rgba(14, 165, 233, 0.02);
        }
        
        .item-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .item-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid var(--border);
        }
        
        .item-details {
          flex: 1;
        }
        
        .item-details h4 {
          margin: 0 0 8px 0;
          font-size: 15px;
          color: var(--text-primary);
          line-height: 1.3;
        }
        
        .item-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 5px;
        }
        
        .spec-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
        }
        
        .custom-badge {
          display: inline-block;
          background: rgba(34, 197, 94, 0.1);
          color: #16a34a;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
        }
        
        .item-unit-price,
        .item-total-price {
          font-weight: 600;
          color: var(--primary);
          text-align: center;
        }
        
        .item-quantity {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .quantity-btn {
          width: 28px;
          height: 28px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-primary);
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .quantity-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        
        .quantity-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .quantity-value {
          min-width: 30px;
          text-align: center;
          font-weight: 600;
        }
        
        .remove-btn {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          font-size: 14px;
          margin: 0 auto;
        }
        
        .remove-btn:hover {
          background: var(--danger);
          color: white;
        }
        
        .cart-summary {
          background: var(--background);
          border-radius: 12px;
          padding: 25px;
          border: 1px solid var(--border);
          margin-bottom: 20px;
        }
        
        .summary-section {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid var(--border);
        }
        
        .summary-section:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .summary-section h3 {
          margin: 0 0 20px 0;
          color: var(--text-primary);
          font-size: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .summary-section h3:before {
          content: '';
          display: block;
          width: 4px;
          height: 20px;
          background: var(--primary);
          border-radius: 2px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-secondary);
          font-weight: 500;
        }
        
        .location-input {
          width: 100%;
          padding: 12px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .location-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }
        
        .location-input::placeholder {
          color: var(--text-tertiary);
        }
        
        .input-hint {
          font-size: 12px;
          color: var(--text-tertiary);
          margin-top: 5px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .shipping-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .shipping-option {
          display: flex;
          align-items: center;
          padding: 12px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .shipping-option:hover {
          border-color: var(--primary);
        }
        
        .shipping-option input[type="radio"] {
          margin-right: 12px;
        }
        
        .shipping-option-details {
          flex: 1;
        }
        
        .shipping-option-name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 2px;
        }
        
        .shipping-cost {
          color: var(--primary);
          font-weight: 600;
        }
        
        .shipping-option-desc {
          font-size: 12px;
          color: var(--text-tertiary);
        }
        
        .price-breakdown {
          padding: 20px;
          background: var(--card-bg);
          border-radius: 8px;
        }
        
        .price-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
          color: var(--text-primary);
        }
        
        .price-row:last-child {
          border-bottom: none;
        }
        
        .price-row.discount {
          color: var(--success);
        }
        
        .discount-amount {
          font-weight: 600;
        }
        
        .price-row.tax {
          color: var(--text-tertiary);
        }
        
        .price-row.total {
          font-weight: bold;
          font-size: 18px;
          color: var(--primary);
          border-top: 2px solid var(--border);
          padding-top: 15px;
          margin-top: 10px;
        }
        
        .price-row.iqd {
          font-size: 14px;
          color: var(--text-secondary);
          padding: 5px 0;
        }
        
        .delivery-info-card,
        .payment-info-card,
        .warranty-info-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 15px;
          background: var(--card-bg);
          border-radius: 8px;
          margin-bottom: 10px;
          border-left: 4px solid;
        }
        
        .delivery-info-card {
          border-left-color: #3b82f6;
        }
        
        .payment-info-card {
          border-left-color: #10b981;
        }
        
        .warranty-info-card {
          border-left-color: #f59e0b;
        }
        
        .info-icon {
          font-size: 20px;
          flex-shrink: 0;
        }
        
        .info-detail {
          font-size: 13px;
          color: var(--text-secondary);
          margin-top: 4px;
          line-height: 1.4;
        }
        
        .info-detail small {
          color: var(--text-tertiary);
        }
        
        .cart-actions {
          display: flex;
          gap: 15px;
          padding: 20px 0;
          border-top: 1px solid var(--border);
          margin-top: 20px;
        }
        
        .clear-btn {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .clear-btn:hover {
          background: var(--danger);
          color: white;
        }
        
        .checkout-btn {
          flex: 1;
          position: relative;
        }
        
        .checkout-btn.loading {
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
          margin-right: 8px;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 650px) {
          .cart-content {
            width: 100%;
          }
          
          .cart-items-header {
            display: none;
          }
          
          .cart-item {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          
          .item-unit-price,
          .item-total-price,
          .item-quantity,
          .item-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          
          .item-unit-price::before {
            content: 'Price: ';
            color: var(--text-secondary);
          }
          
          .item-total-price::before {
            content: 'Total: ';
            color: var(--text-secondary);
          }
          
          .item-quantity::before {
            content: 'Quantity: ';
            color: var(--text-secondary);
          }
          
          .cart-actions {
            flex-direction: column;
          }
          
          .shipping-option {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ShoppingCart;