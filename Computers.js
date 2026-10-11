import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

const Computers = ({ addToCart, toggleFavorite }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredComputers, setFilteredComputers] = useState([]);
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [favorites, setFavorites] = useState([]); // ADDED: Favorites state

  // Comprehensive list of computers (20+ products)
  const allComputers = [
    // Gaming PCs (8 products)
    {
      id: 1,
      name: 'Gaming Beast Pro',
      category: 'gaming',
      price: 2499,
      originalPrice: 2999,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop',
      specs: ['RTX 4090', 'i9-14900K', '64GB RAM', '4TB SSD'],
      fullSpecs: [
        'Processor: Intel Core i9-14900K',
        'GPU: NVIDIA GeForce RTX 4090 24GB',
        'RAM: 64GB DDR5 6000MHz',
        'Storage: 4TB NVMe Gen4 SSD',
        'Motherboard: Z790 Gaming',
        'Power Supply: 1200W Platinum',
        'Cooling: 360mm Liquid AIO'
      ],
      discount: 16,
      rating: 4.9,
      tags: ['top-seller', 'premium']
    },
    {
      id: 2,
      name: 'Gaming Power X',
      category: 'gaming',
      price: 1899,
      originalPrice: 2199,
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
      specs: ['RTX 4080', 'i7-14700K', '32GB RAM', '2TB SSD'],
      fullSpecs: [
        'Processor: Intel Core i7-14700K',
        'GPU: NVIDIA GeForce RTX 4080 16GB',
        'RAM: 32GB DDR5 5600MHz',
        'Storage: 2TB NVMe SSD',
        'Power Supply: 850W Gold'
      ],
      discount: 13,
      rating: 4.8,
      tags: ['hot']
    },
    {
      id: 3,
      name: 'AMD Gaming Rig',
      category: 'gaming',
      price: 1799,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
      specs: ['RX 7900 XTX', 'Ryzen 9 7950X', '32GB RAM', '2TB SSD'],
      fullSpecs: [
        'Processor: AMD Ryzen 9 7950X',
        'GPU: AMD Radeon RX 7900 XTX',
        'RAM: 32GB DDR5 6000MHz',
        'Storage: 2TB NVMe SSD'
      ],
      rating: 4.7
    },
    {
      id: 4,
      name: 'Mid-Range Gaming PC',
      category: 'gaming',
      price: 1299,
      originalPrice: 1499,
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400&h=300&fit=crop',
      specs: ['RTX 4070 Ti', 'i5-14600K', '16GB RAM', '1TB SSD'],
      fullSpecs: [
        'Processor: Intel Core i5-14600K',
        'GPU: NVIDIA GeForce RTX 4070 Ti',
        'RAM: 16GB DDR5 5200MHz',
        'Storage: 1TB NVMe SSD'
      ],
      discount: 13,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Budget Gaming Starter',
      category: 'gaming',
      price: 899,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      specs: ['RTX 4060', 'Ryzen 5 7600X', '16GB RAM', '512GB SSD'],
      fullSpecs: [
        'Processor: AMD Ryzen 5 7600X',
        'GPU: NVIDIA GeForce RTX 4060',
        'RAM: 16GB DDR5 4800MHz',
        'Storage: 512GB NVMe SSD'
      ],
      discount: 10,
      rating: 4.5,
      tags: ['budget']
    },
    {
      id: 6,
      name: 'RGB Gaming Beast',
      category: 'gaming',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop',
      specs: ['RTX 4080 Super', 'i9-13900KS', '32GB RGB RAM', '2TB SSD'],
      fullSpecs: [
        'Processor: Intel Core i9-13900KS',
        'GPU: NVIDIA GeForce RTX 4080 Super',
        'RAM: 32GB RGB DDR5 6000MHz',
        'Storage: 2TB NVMe SSD',
        'RGB Lighting: Full ARGB System'
      ],
      rating: 4.8,
      tags: ['rgb', 'premium']
    },
    {
      id: 7,
      name: 'Mini ITX Gaming',
      category: 'gaming',
      price: 1699,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
      specs: ['RTX 4070', 'Ryzen 7 7800X3D', '32GB RAM', '2TB SSD'],
      fullSpecs: [
        'Processor: AMD Ryzen 7 7800X3D',
        'GPU: NVIDIA GeForce RTX 4070',
        'RAM: 32GB DDR5 5600MHz',
        'Storage: 2TB NVMe SSD',
        'Case: Mini ITX Compact'
      ],
      rating: 4.7,
      tags: ['compact']
    },
    {
      id: 8,
      name: '4K Gaming Ultimate',
      category: 'gaming',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
      specs: ['RTX 4090 Ti', 'i9-14900KS', '128GB RAM', '8TB SSD'],
      fullSpecs: [
        'Processor: Intel Core i9-14900KS',
        'GPU: NVIDIA GeForce RTX 4090 Ti',
        'RAM: 128GB DDR5 6400MHz',
        'Storage: 8TB NVMe SSD RAID 0'
      ],
      rating: 5.0,
      tags: ['ultimate', 'premium']
    },

    // Workstation PCs (6 products)
    {
      id: 9,
      name: 'Creator Workstation Pro',
      category: 'workstation',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop',
      specs: ['RTX 6000 Ada', 'Xeon W9', '256GB RAM', '8TB SSD'],
      fullSpecs: [
        'Processor: Intel Xeon W9-3495X',
        'GPU: NVIDIA RTX 6000 Ada 48GB',
        'RAM: 256GB DDR5 ECC',
        'Storage: 8TB NVMe SSD'
      ],
      rating: 4.9,
      tags: ['professional']
    },
    {
      id: 10,
      name: 'Video Editing Station',
      category: 'workstation',
      price: 2799,
      originalPrice: 3199,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      specs: ['RTX 4090', 'Threadripper PRO', '128GB RAM', '4TB SSD'],
      fullSpecs: [
        'Processor: AMD Threadripper PRO 7965WX',
        'GPU: NVIDIA GeForce RTX 4090',
        'RAM: 128GB DDR5 ECC',
        'Storage: 4TB NVMe SSD'
      ],
      discount: 12,
      rating: 4.8
    },
    {
      id: 11,
      name: '3D Rendering Beast',
      category: 'workstation',
      price: 4199,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      specs: ['Dual RTX 4090', 'Threadripper', '192GB RAM', '8TB SSD'],
      fullSpecs: [
        'Processor: AMD Threadripper 7970X',
        'GPU: Dual NVIDIA RTX 4090',
        'RAM: 192GB DDR5',
        'Storage: 8TB NVMe SSD'
      ],
      rating: 4.9,
      tags: ['professional']
    },
    {
      id: 12,
      name: 'AI Development PC',
      category: 'workstation',
      price: 5399,
      image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=400&h=300&fit=crop',
      specs: ['Dual RTX 6000', 'Xeon Platinum', '512GB RAM', '16TB SSD'],
      fullSpecs: [
        'Processor: Intel Xeon Platinum 8480+',
        'GPU: Dual NVIDIA RTX 6000 Ada',
        'RAM: 512GB DDR5 ECC',
        'Storage: 16TB NVMe SSD'
      ],
      rating: 5.0,
      tags: ['enterprise']
    },
    {
      id: 13,
      name: 'Architecture Workstation',
      category: 'workstation',
      price: 2999,
      originalPrice: 3499,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      specs: ['RTX A6000', 'i9-14900K', '64GB RAM', '4TB SSD'],
      fullSpecs: [
        'Processor: Intel Core i9-14900K',
        'GPU: NVIDIA RTX A6000 48GB',
        'RAM: 64GB DDR5',
        'Storage: 4TB NVMe SSD'
      ],
      discount: 14,
      rating: 4.7
    },
    {
      id: 14,
      name: 'Engineering Station',
      category: 'workstation',
      price: 3899,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      specs: ['RTX 5000 Ada', 'Xeon W7', '128GB RAM', '6TB SSD'],
      fullSpecs: [
        'Processor: Intel Xeon W7-2495X',
        'GPU: NVIDIA RTX 5000 Ada 32GB',
        'RAM: 128GB DDR5 ECC',
        'Storage: 6TB NVMe SSD'
      ],
      rating: 4.8
    },

    // Budget PCs (6 products)
    {
      id: 15,
      name: 'Office Basic PC',
      category: 'budget',
      price: 499,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      specs: ['i3-13100', '8GB RAM', '256GB SSD', 'Integrated'],
      fullSpecs: [
        'Processor: Intel Core i3-13100',
        'GPU: Intel UHD Graphics',
        'RAM: 8GB DDR4',
        'Storage: 256GB SSD'
      ],
      rating: 4.3,
      tags: ['value']
    },
    {
      id: 16,
      name: 'Home & Study PC',
      category: 'budget',
      price: 649,
      originalPrice: 749,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      specs: ['i5-13400', '16GB RAM', '512GB SSD', 'Integrated'],
      fullSpecs: [
        'Processor: Intel Core i5-13400',
        'GPU: Intel UHD Graphics',
        'RAM: 16GB DDR4',
        'Storage: 512GB SSD'
      ],
      discount: 13,
      rating: 4.5,
      tags: ['value']
    },
    {
      id: 17,
      name: 'Budget Gaming Entry',
      category: 'budget',
      price: 799,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      specs: ['RTX 3050', 'Ryzen 5 5600G', '16GB RAM', '512GB SSD'],
      fullSpecs: [
        'Processor: AMD Ryzen 5 5600G',
        'GPU: NVIDIA GeForce RTX 3050',
        'RAM: 16GB DDR4',
        'Storage: 512GB SSD'
      ],
      rating: 4.4,
      tags: ['budget', 'gaming']
    },
    {
      id: 18,
      name: 'Small Business PC',
      category: 'budget',
      price: 699,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      specs: ['Ryzen 5 7600', '16GB RAM', '1TB HDD', '256GB SSD'],
      fullSpecs: [
        'Processor: AMD Ryzen 5 7600',
        'GPU: Integrated Radeon',
        'RAM: 16GB DDR5',
        'Storage: 1TB HDD + 256GB SSD'
      ],
      discount: 12,
      rating: 4.4
    },
    {
      id: 19,
      name: 'Multimedia Home PC',
      category: 'budget',
      price: 899,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      specs: ['i5-13500', '32GB RAM', '1TB SSD', 'RTX 3050'],
      fullSpecs: [
        'Processor: Intel Core i5-13500',
        'GPU: NVIDIA GeForce RTX 3050',
        'RAM: 32GB DDR4',
        'Storage: 1TB SSD'
      ],
      rating: 4.6,
      tags: ['multimedia']
    },
    {
      id: 20,
      name: 'Student Budget PC',
      category: 'budget',
      price: 599,
      originalPrice: 699,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
      specs: ['Ryzen 5 5600G', '16GB RAM', '512GB SSD', 'Integrated'],
      fullSpecs: [
        'Processor: AMD Ryzen 5 5600G',
        'GPU: Radeon Vega 7',
        'RAM: 16GB DDR4',
        'Storage: 512GB SSD'
      ],
      discount: 14,
      rating: 4.5,
      tags: ['student']
    },

    // Compact PCs (4 products)
    {
      id: 21,
      name: 'Mini Gaming PC',
      category: 'compact',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop',
      specs: ['RTX 4060 Ti', 'i5-13600K', '32GB RAM', '2TB SSD'],
      fullSpecs: [
        'Processor: Intel Core i5-13600K',
        'GPU: NVIDIA GeForce RTX 4060 Ti',
        'RAM: 32GB DDR5',
        'Storage: 2TB NVMe SSD',
        'Case: Mini-ITX 10L'
      ],
      rating: 4.7,
      tags: ['compact', 'gaming']
    },
    {
      id: 22,
      name: 'Office Mini PC',
      category: 'compact',
      price: 749,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      specs: ['Ryzen 7 5700G', '16GB RAM', '1TB SSD', 'Integrated'],
      fullSpecs: [
        'Processor: AMD Ryzen 7 5700G',
        'GPU: Radeon Vega 8',
        'RAM: 16GB DDR4',
        'Storage: 1TB NVMe SSD',
        'Case: Ultra Compact 1L'
      ],
      rating: 4.6,
      tags: ['compact']
    }
  ];

  // Filter computers based on active filter
  useEffect(() => {
    let filtered = allComputers;
    
    if (activeFilter !== 'all') {
      filtered = allComputers.filter(computer => computer.category === activeFilter);
    }

    // Sort the filtered computers
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'discount':
        filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default:
        // Featured (default) - keep original order or prioritize certain tags
        filtered.sort((a, b) => {
          const aFeatured = a.tags?.includes('top-seller') || a.tags?.includes('hot');
          const bFeatured = b.tags?.includes('top-seller') || b.tags?.includes('hot');
          return (bFeatured ? 1 : 0) - (aFeatured ? 1 : 0);
        });
    }

    setFilteredComputers(filtered);
  }, [activeFilter, sortBy]);

  const getCategoryCount = (category) => {
    if (category === 'all') return allComputers.length;
    return allComputers.filter(computer => computer.category === category).length;
  };

  const handleBuyNow = (computer) => {
    addToCart(computer);
    alert(`${computer.name} added to cart!`);
  };

  const handleToggleFavorite = (computer) => {
    toggleFavorite(computer);
    // Update local state for immediate UI feedback
    setFavorites(prev => {
      if (prev.includes(computer.id)) {
        return prev.filter(id => id !== computer.id);
      } else {
        return [...prev, computer.id];
      }
    });
  };

  const handleToggleDetails = (productId) => {
    setExpandedProductId(prevId => 
      prevId === productId ? null : productId
    );
  };

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1>Gaming & Professional Computers</h1>
          <p className="page-subtitle">{filteredComputers.length} computers available - Best performance PCs for gaming, work, and creativity</p>
        </div>

        <div className="products-filter">
          <div className="filter-section">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Computers ({getCategoryCount('all')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'gaming' ? 'active' : ''}`}
              onClick={() => setActiveFilter('gaming')}
            >
              Gaming ({getCategoryCount('gaming')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'workstation' ? 'active' : ''}`}
              onClick={() => setActiveFilter('workstation')}
            >
              Workstation ({getCategoryCount('workstation')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'budget' ? 'active' : ''}`}
              onClick={() => setActiveFilter('budget')}
            >
              Budget ({getCategoryCount('budget')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'compact' ? 'active' : ''}`}
              onClick={() => setActiveFilter('compact')}
            >
              Compact ({getCategoryCount('compact')})
            </button>
          </div>
          <div className="sort-section">
            <select 
              className="sort-select" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rated</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>

        <div className="products-count">
          Showing {filteredComputers.length} of {allComputers.length} computers
        </div>

        <div className="products-grid grid grid-4">
          {filteredComputers.map((computer) => (
            <ProductCard
              key={computer.id}
              product={computer}
              onAddToCart={() => handleBuyNow(computer)}
              onToggleFavorite={() => handleToggleFavorite(computer)}
              onToggleDetails={() => handleToggleDetails(computer.id)}
              isExpanded={expandedProductId === computer.id}
              isFavorite={favorites.includes(computer.id)}
            />
          ))}
        </div>

        {filteredComputers.length === 0 && (
          <div className="no-results">
            <h3>No computers found in this category</h3>
            <p>Try selecting a different filter or category</p>
          </div>
        )}

        <div className="products-info">
          <div className="info-card">
            <h3>🛡️ Warranty Information</h3>
            <p>All computers come with 2-year warranty and free technical support</p>
          </div>
          <div className="info-card">
            <h3>🚚 Free Delivery</h3>
            <p>Free delivery across Iraq. Cash on delivery available for all orders.</p>
          </div>
          <div className="info-card">
            <h3>🔧 Customization</h3>
            <p>Need different specs? Use our Custom PC Builder tool</p>
          </div>
          <div className="info-card">
            <h3>💳 Easy Payment</h3>
            <p>Multiple payment options: Cash, Credit Card, Bank Transfer</p>
          </div>
        </div>

        <div className="category-description">
          <h3>About Our Computers</h3>
          <div className="description-grid">
            <div>
              <h4>🎮 Gaming Computers</h4>
              <p>High-performance PCs with latest RTX graphics cards, fast processors, and RGB lighting for ultimate gaming experience.</p>
            </div>
            <div>
              <h4>💼 Workstation PCs</h4>
              <p>Professional-grade computers for content creation, 3D rendering, video editing, and engineering applications.</p>
            </div>
            <div>
              <h4>💰 Budget Options</h4>
              <p>Affordable PCs for everyday use, office work, studying, and entry-level gaming.</p>
            </div>
            <div>
              <h4>📦 Compact PCs</h4>
              <p>Space-saving computers with powerful components in small form factors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computers;