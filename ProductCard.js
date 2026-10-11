import React from 'react';

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite, 
  onToggleDetails,
  isFavorite,
  isExpanded
}) => {
  const convertToIQD = (usdPrice) => {
    const rate = 1450;
    return (usdPrice * rate).toFixed(0);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // FIXED: Added safety check
  const handleViewDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if onToggleDetails exists and is a function
    if (onToggleDetails && typeof onToggleDetails === 'function') {
      onToggleDetails(); // Call parent function
    } else {
      console.warn('onToggleDetails is not a function. Check parent component.');
      // Optionally, you can add fallback behavior here
      // alert('View details functionality not available');
    }
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Also add safety check for onToggleFavorite
    if (onToggleFavorite && typeof onToggleFavorite === 'function') {
      onToggleFavorite(product);
    } else {
      console.warn('onToggleFavorite is not a function');
    }
  };

  const handleAddToCartClick = () => {
    // Add safety check for onAddToCart too
    if (onAddToCart && typeof onAddToCart === 'function') {
      onAddToCart(product);
    } else {
      console.warn('onAddToCart is not a function');
    }
  };

  return (
    <div className="product-card card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button 
          className="favorite-btn"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-specs">
          {product.specs && product.specs.slice(0, 3).map((spec, index) => (
            <span key={index} className="spec-tag">{spec}</span>
          ))}
        </div>

        <div className="price-container">
          <div className="price-main">
            <span className="price-usd">${product.price ? formatPrice(product.price) : '0'}</span>
            {product.originalPrice && (
              <span className="price-original">
                ${formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <div className="price-iqd">
            {product.price ? formatPrice(convertToIQD(product.price)) : '0'} IQD
          </div>
        </div>

        <div className="product-actions">
          <button 
            className="btn btn-primary add-to-cart"
            onClick={handleAddToCartClick}
          >
            Buy Now 🛒
          </button>
          <button 
            className={`btn btn-secondary view-details ${isExpanded ? 'active' : ''}`}
            onClick={handleViewDetails}
          >
            {isExpanded ? 'Hide Details' : 'View Details'}
          </button>
        </div>

        {isExpanded && product.fullSpecs && (
          <div className="product-details">
            <h4>Specifications:</h4>
            <ul>
              {product.fullSpecs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        .product-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          border: 1px solid #334155;
          background: #1e293b;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border-color: #475569;
        }
        
        .product-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        
        .favorite-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          color: white;
          z-index: 10;
        }
        
        .favorite-btn:hover {
          background: rgba(239, 68, 68, 0.8);
          transform: scale(1.1);
        }
        
        .favorite-btn:active {
          transform: scale(0.95);
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #ef4444;
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          z-index: 10;
        }
        
        .product-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        
        .product-name {
          font-size: 18px;
          margin-bottom: 10px;
          color: #f1f5f9;
          font-weight: 600;
        }
        
        .product-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 15px;
        }
        
        .spec-tag {
          background: rgba(59, 130, 246, 0.15);
          color: #60a5fa;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        
        .price-container {
          margin-bottom: 20px;
        }
        
        .price-main {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 5px;
        }
        
        .price-usd {
          font-size: 24px;
          font-weight: bold;
          color: #60a5fa;
        }
        
        .price-original {
          font-size: 16px;
          color: #94a3b8;
          text-decoration: line-through;
        }
        
        .price-iqd {
          font-size: 14px;
          color: #cbd5e1;
          font-weight: 500;
        }
        
        .product-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }
        
        .add-to-cart, .view-details {
          flex: 1;
          padding: 12px;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .add-to-cart {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          color: white;
        }
        
        .add-to-cart:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          transform: translateY(-2px);
        }
        
        .view-details {
          background: #334155;
          color: #cbd5e1;
          border: 1px solid #475569;
        }
        
        .view-details:hover {
          background: #475569;
          transform: translateY(-2px);
        }
        
        .view-details.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .product-details {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #334155;
          animation: fadeIn 0.3s ease;
        }
        
        .product-details h4 {
          margin-bottom: 10px;
          color: #f1f5f9;
          font-size: 16px;
        }
        
        .product-details ul {
          padding-left: 20px;
          margin: 0;
        }
        
        .product-details li {
          margin-bottom: 8px;
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.5;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .product-actions {
            flex-direction: column;
          }
          
          .product-name {
            font-size: 16px;
          }
          
          .price-usd {
            font-size: 20px;
          }
          
          .price-iqd {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

// Add default props to ensure component works even if parent doesn't pass all props
ProductCard.defaultProps = {
  product: {
    id: '',
    name: 'Product Name',
    price: 0,
    image: '',
    specs: [],
    fullSpecs: []
  },
  onAddToCart: () => console.log('Add to cart clicked (default)'),
  onToggleFavorite: () => console.log('Toggle favorite clicked (default)'),
  onToggleDetails: () => console.log('Toggle details clicked (default)'),
  isFavorite: false,
  isExpanded: false
};

export default ProductCard;