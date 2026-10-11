import React from 'react';

const CustomPCPart = ({ part, isSelected, onSelect, category }) => {
  const convertToIQD = (usdPrice) => {
    return (usdPrice * 1450).toFixed(0);
  };

  return (
    <div 
      className={`custom-part ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(part, category)}
    >
      <div className="part-image">
        <div className="image-placeholder">
          {getCategoryIcon(category)}
        </div>
        {part.badge && (
          <span className="part-badge">{part.badge}</span>
        )}
      </div>

      <div className="part-info">
        <h4 className="part-name">{part.name}</h4>
        <p className="part-specs">{part.specs}</p>
        <div className="part-meta">
          <span className="part-brand">{part.brand}</span>
          {part.rating && (
            <span className="part-rating">⭐ {part.rating}</span>
          )}
        </div>
      </div>

      <div className="part-price">
        <div className="price-usd">${part.price}</div>
        <div className="price-iqd">{convertToIQD(part.price)} IQD</div>
      </div>

      <div className="part-select">
        <div className="select-indicator">
          {isSelected ? '✓' : '+'}
        </div>
      </div>

      <style jsx>{`
        .custom-part {
          display: grid;
          grid-template-columns: 60px 1fr auto auto;
          gap: 15px;
          padding: 15px;
          background: var(--background);
          border: 2px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s;
          align-items: center;
        }
        
        .custom-part:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        
        .custom-part.selected {
          border-color: var(--primary);
          background: rgba(14, 165, 233, 0.05);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }
        
        .part-image {
          position: relative;
          width: 60px;
          height: 60px;
        }
        
        .image-placeholder {
          width: 100%;
          height: 100%;
          background: var(--card-bg);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        
        .part-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--danger);
          color: white;
          font-size: 10px;
          padding: 3px 6px;
          border-radius: 4px;
          font-weight: bold;
        }
        
        .part-info {
          flex: 1;
          min-width: 0;
        }
        
        .part-name {
          margin: 0 0 5px 0;
          font-size: 14px;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .part-specs {
          margin: 0 0 8px 0;
          font-size: 12px;
          color: var(--text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.4;
        }
        
        .part-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
        }
        
        .part-brand {
          color: var(--primary);
          font-weight: 500;
          padding: 2px 6px;
          background: rgba(14, 165, 233, 0.1);
          border-radius: 4px;
        }
        
        .part-rating {
          color: var(--warning);
        }
        
        .part-price {
          text-align: right;
          min-width: 100px;
        }
        
        .price-usd {
          font-size: 16px;
          font-weight: bold;
          color: var(--primary);
          margin-bottom: 4px;
        }
        
        .price-iqd {
          font-size: 11px;
          color: var(--text-secondary);
        }
        
        .part-select {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .select-indicator {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--border);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          transition: all 0.3s;
        }
        
        .custom-part.selected .select-indicator {
          background: var(--primary);
          color: white;
        }
        
        @media (max-width: 768px) {
          .custom-part {
            grid-template-columns: 50px 1fr;
            grid-template-rows: auto auto;
          }
          
          .part-price, .part-select {
            grid-column: 2;
            justify-self: start;
          }
          
          .part-price {
            text-align: left;
            margin-top: 10px;
          }
          
          .part-select {
            justify-self: end;
            margin-top: -25px;
          }
        }
      `}</style>
    </div>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    cpu: '⚡',
    gpu: '🎮',
    ram: '🧠',
    storage: '💾',
    motherboard: '🔌',
    psu: '⚡',
    case: '🖥️',
    cooling: '❄️'
  };
  return icons[category] || '🖥️';
};

export default CustomPCPart;