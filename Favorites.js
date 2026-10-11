import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites-page">
      <div className="container">
        <div className="page-header">
          <h1>Your Favorites ❤️</h1>
          <p className="page-subtitle">Your saved products for later purchase</p>
        </div>

        {favorites.length === 0 ? (
          <div className="empty-favorites">
            <div className="empty-icon">❤️</div>
            <h2>No favorites yet</h2>
            <p>Start adding products to your favorites by clicking the heart icon</p>
            <div className="empty-actions">
              <Link to="/computers" className="btn btn-primary">
                Browse Computers
              </Link>
              <Link to="/laptops" className="btn btn-secondary">
                Browse Laptops
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="favorites-header">
              <div className="favorites-count">
                <span className="count-number">{favorites.length}</span>
                <span className="count-text">items in favorites</span>
              </div>
              <div className="favorites-actions">
                <button className="btn btn-secondary">
                  Clear All
                </button>
              </div>
            </div>

            <div className="favorites-grid grid grid-4">
              {favorites.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => alert(`Added ${product.name} to cart`)}
                  onToggleFavorite={() => toggleFavorite(product)}
                  isFavorite={true}
                />
              ))}
            </div>

            <div className="favorites-footer">
              <div className="footer-actions">
                <Link to="/" className="btn btn-secondary">
                  Continue Shopping
                </Link>
                <button className="btn btn-primary">
                  Add All to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .favorites-page {
          padding: 40px 0 80px;
          flex: 1;
        }
        
        .empty-favorites {
          text-align: center;
          padding: 60px 20px;
          background: var(--card-bg);
          border-radius: 16px;
          border: 2px dashed var(--border);
          margin-top: 40px;
        }
        
        .empty-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }
        
        .empty-favorites h2 {
          color: var(--text-primary);
          margin-bottom: 15px;
          font-size: 1.75rem;
        }
        
        .empty-favorites p {
          color: var(--text-secondary);
          max-width: 400px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        
        .empty-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .favorites-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 25px;
          background: var(--card-bg);
          border-radius: 12px;
          margin: 40px 0 30px;
          border: 1px solid var(--border);
        }
        
        .favorites-count {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .count-number {
          font-size: 28px;
          font-weight: bold;
          color: var(--primary);
          background: rgba(14, 165, 233, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .count-text {
          color: var(--text-primary);
          font-size: 18px;
          font-weight: 500;
        }
        
        .favorites-grid {
          margin-bottom: 40px;
        }
        
        .favorites-footer {
          padding: 30px;
          background: var(--card-bg);
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        
        .footer-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        @media (max-width: 768px) {
          .favorites-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .footer-actions {
            flex-direction: column;
            gap: 15px;
          }
          
          .footer-actions .btn {
            width: 100%;
          }
          
          .empty-actions {
            flex-direction: column;
          }
          
          .empty-actions .btn {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Favorites;