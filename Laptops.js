import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/products.css';

const Laptops = ({ addToCart, toggleFavorite }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Comprehensive list of laptops (15+ products)
  const allLaptops = [
    // Gaming Laptops (6 products)
    {
      id: 1,
      name: 'Gaming Laptop Pro',
      category: 'gaming',
      price: 1599,
      originalPrice: 1799,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
      specs: ['RTX 4070', 'i7-13700H', '16" QHD 240Hz', '16GB RAM'],
      fullSpecs: [
        'Display: 16" QHD 240Hz IPS',
        'Processor: Intel Core i7-13700H',
        'GPU: NVIDIA GeForce RTX 4070 8GB',
        'RAM: 16GB DDR5 4800MHz',
        'Storage: 1TB NVMe SSD',
        'Battery: 90Wh',
        'Weight: 2.4kg',
        'Cooling: Dual Fan Vapor Chamber'
      ],
      discount: 10,
      rating: 4.8,
      tags: ['top-seller']
    },
    {
      id: 2,
      name: 'Gaming Beast X',
      category: 'gaming',
      price: 2199,
      originalPrice: 2499,
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop',
      specs: ['RTX 4080', 'i9-13980HX', '18" 4K', '32GB RAM'],
      fullSpecs: [
        'Display: 18" 4K Mini-LED 165Hz',
        'Processor: Intel Core i9-13980HX',
        'GPU: NVIDIA GeForce RTX 4080 12GB',
        'RAM: 32GB DDR5 5600MHz',
        'Storage: 2TB NVMe SSD RAID 0',
        'Battery: 99.9Wh',
        'Keyboard: Mechanical per-key RGB'
      ],
      discount: 12,
      rating: 4.9,
      tags: ['premium']
    },
    {
      id: 3,
      name: 'AMD Gaming Laptop',
      category: 'gaming',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      specs: ['RX 7700S', 'Ryzen 9 7940HS', '16" QHD', '32GB RAM'],
      fullSpecs: [
        'Display: 16" QHD 165Hz',
        'Processor: AMD Ryzen 9 7940HS',
        'GPU: AMD Radeon RX 7700S 8GB',
        'RAM: 32GB DDR5',
        'Storage: 1TB NVMe SSD',
        'Battery: 80Wh'
      ],
      rating: 4.7
    },
    {
      id: 4,
      name: 'Budget Gaming Laptop',
      category: 'gaming',
      price: 899,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
      specs: ['RTX 4050', 'i5-13500H', '15.6" FHD', '16GB RAM'],
      fullSpecs: [
        'Display: 15.6" FHD 144Hz',
        'Processor: Intel Core i5-13500H',
        'GPU: NVIDIA GeForce RTX 4050 6GB',
        'RAM: 16GB DDR4',
        'Storage: 512GB SSD',
        'Battery: 60Wh'
      ],
      discount: 10,
      rating: 4.5,
      tags: ['budget']
    },
    {
      id: 5,
      name: 'Mini Gaming Laptop',
      category: 'gaming',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop',
      specs: ['RTX 4060', 'Ryzen 7 7840HS', '14" QHD', '16GB RAM'],
      fullSpecs: [
        'Display: 14" QHD 165Hz',
        'Processor: AMD Ryzen 7 7840HS',
        'GPU: NVIDIA GeForce RTX 4060 8GB',
        'RAM: 16GB LPDDR5',
        'Storage: 1TB NVMe SSD',
        'Weight: 1.7kg'
      ],
      rating: 4.6,
      tags: ['compact']
    },
    {
      id: 6,
      name: '4K Gaming Laptop',
      category: 'gaming',
      price: 2799,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      specs: ['RTX 4090', 'i9-14900HX', '17" 4K', '64GB RAM'],
      fullSpecs: [
        'Display: 17.3" 4K 240Hz Mini-LED',
        'Processor: Intel Core i9-14900HX',
        'GPU: NVIDIA GeForce RTX 4090 16GB',
        'RAM: 64GB DDR5',
        'Storage: 4TB NVMe SSD',
        'Cooling: Quad Fan Liquid Metal'
      ],
      rating: 5.0,
      tags: ['ultimate']
    },

    // Ultrabooks (5 products)
    {
      id: 7,
      name: 'UltraBook Air',
      category: 'ultrabook',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      specs: ['M2 Chip', '16GB RAM', '13.6" Retina', '512GB SSD'],
      fullSpecs: [
        'Display: 13.6" Liquid Retina',
        'Processor: Apple M2',
        'RAM: 16GB Unified',
        'Storage: 512GB SSD',
        'Battery: 18 hours',
        'Weight: 1.24kg',
        'Thickness: 11.3mm'
      ],
      rating: 4.8,
      tags: ['premium']
    },
    {
      id: 8,
      name: 'UltraBook Pro',
      category: 'ultrabook',
      price: 1699,
      originalPrice: 1899,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      specs: ['M3 Pro', '18GB RAM', '14.2" XDR', '1TB SSD'],
      fullSpecs: [
        'Display: 14.2" Liquid Retina XDR',
        'Processor: Apple M3 Pro',
        'RAM: 18GB Unified',
        'Storage: 1TB SSD',
        'Battery: 22 hours',
        'Weight: 1.55kg'
      ],
      discount: 10,
      rating: 4.9
    },
    {
      id: 9,
      name: 'Windows Ultrabook',
      category: 'ultrabook',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
      specs: ['i7-1360P', '16GB RAM', '13.5" OLED', '1TB SSD'],
      fullSpecs: [
        'Display: 13.5" OLED Touch',
        'Processor: Intel Core i7-1360P',
        'RAM: 16GB LPDDR5',
        'Storage: 1TB NVMe SSD',
        'Battery: 15 hours',
        'Weight: 1.1kg'
      ],
      rating: 4.7
    },
    {
      id: 10,
      name: 'Convertible Ultrabook',
      category: 'ultrabook',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      specs: ['i7-1355U', '32GB RAM', '14" 2.8K', '2TB SSD'],
      fullSpecs: [
        'Display: 14" 2.8K OLED Touch',
        'Processor: Intel Core i7-1355U',
        'RAM: 32GB LPDDR5',
        'Storage: 2TB NVMe SSD',
        'Battery: 16 hours',
        'Pen: Included Active Pen'
      ],
      rating: 4.8
    },
    {
      id: 11,
      name: 'Budget Ultrabook',
      category: 'ultrabook',
      price: 799,
      originalPrice: 899,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      specs: ['Ryzen 7 7735U', '16GB RAM', '13.3" FHD', '512GB SSD'],
      fullSpecs: [
        'Display: 13.3" FHD IPS',
        'Processor: AMD Ryzen 7 7735U',
        'RAM: 16GB LPDDR5',
        'Storage: 512GB SSD',
        'Battery: 12 hours',
        'Weight: 1.2kg'
      ],
      discount: 11,
      rating: 4.4,
      tags: ['budget']
    },

    // Business Laptops (5 products)
    {
      id: 12,
      name: 'Business Elite',
      category: 'business',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
      specs: ['i7-1360P', '32GB RAM', '14" 4K', '2TB SSD'],
      fullSpecs: [
        'Display: 14" 4K Touch',
        'Processor: Intel Core i7-1360P',
        'RAM: 32GB LPDDR5',
        'Storage: 2TB NVMe SSD',
        'Security: Fingerprint + IR Camera',
        'Warranty: 3 Years On-site'
      ],
      rating: 4.7
    },
    {
      id: 13,
      name: 'Executive Laptop',
      category: 'business',
      price: 1899,
      originalPrice: 2099,
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
      specs: ['i9-13900H', '64GB RAM', '16" 4K', '4TB SSD'],
      fullSpecs: [
        'Display: 16" 4K OLED',
        'Processor: Intel Core i9-13900H',
        'RAM: 64GB DDR5',
        'Storage: 4TB NVMe SSD',
        'Security: TPM 2.0 + Smart Card',
        'Connectivity: 5G + Wi-Fi 6E'
      ],
      discount: 9,
      rating: 4.9,
      tags: ['premium']
    },
    {
      id: 14,
      name: 'Mobile Workstation',
      category: 'business',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      specs: ['RTX 3000 Ada', 'Xeon W', '32GB ECC', '4TB SSD'],
      fullSpecs: [
        'Display: 15.6" 4K OLED',
        'Processor: Intel Xeon W-13955M',
        'GPU: NVIDIA RTX 3000 Ada 12GB',
        'RAM: 32GB DDR5 ECC',
        'Storage: 4TB NVMe SSD',
        'ISV Certified: AutoCAD, SolidWorks'
      ],
      rating: 4.9,
      tags: ['professional']
    },
    {
      id: 15,
      name: 'Travel Business Laptop',
      category: 'business',
      price: 1099,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      specs: ['i5-1345U', '16GB RAM', '13" FHD', '1TB SSD'],
      fullSpecs: [
        'Display: 13" FHD Anti-glare',
        'Processor: Intel Core i5-1345U',
        'RAM: 16GB LPDDR5',
        'Storage: 1TB NVMe SSD',
        'Weight: 970g',
        'Military Grade Durability'
      ],
      rating: 4.6,
      tags: ['compact']
    },
    {
      id: 16,
      name: 'Business Essential',
      category: 'business',
      price: 899,
      originalPrice: 999,
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
      specs: ['Ryzen 5 7530U', '8GB RAM', '15.6" FHD', '512GB SSD'],
      fullSpecs: [
        'Display: 15.6" FHD',
        'Processor: AMD Ryzen 5 7530U',
        'RAM: 8GB DDR4',
        'Storage: 512GB SSD',
        'Battery: 10 hours',
        'Ports: RJ45, HDMI, USB-C'
      ],
      discount: 10,
      rating: 4.3,
      tags: ['budget']
    },

    // Budget Laptops (4 products)
    {
      id: 17,
      name: 'Student Laptop',
      category: 'budget',
      price: 599,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      specs: ['i3-1215U', '8GB RAM', '15.6" FHD', '256GB SSD'],
      fullSpecs: [
        'Display: 15.6" FHD',
        'Processor: Intel Core i3-1215U',
        'RAM: 8GB DDR4',
        'Storage: 256GB SSD',
        'Battery: 8 hours',
        'OS: Windows 11 Home'
      ],
      rating: 4.2,
      tags: ['student']
    },
    {
      id: 18,
      name: 'Home & Office',
      category: 'budget',
      price: 699,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      specs: ['Ryzen 5 5500U', '12GB RAM', '14" FHD', '512GB SSD'],
      fullSpecs: [
        'Display: 14" FHD IPS',
        'Processor: AMD Ryzen 5 5500U',
        'RAM: 12GB DDR4',
        'Storage: 512GB SSD',
        'Battery: 9 hours'
      ],
      discount: 12,
      rating: 4.4,
      tags: ['value']
    },
    {
      id: 19,
      name: 'Chromebook Plus',
      category: 'budget',
      price: 499,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      specs: ['MediaTek Kompanio', '8GB RAM', '14" FHD', '128GB eMMC'],
      fullSpecs: [
        'Display: 14" FHD Touch',
        'Processor: MediaTek Kompanio 1380',
        'RAM: 8GB LPDDR4X',
        'Storage: 128GB eMMC',
        'Battery: 12 hours',
        'OS: Chrome OS'
      ],
      rating: 4.3
    },
    {
      id: 20,
      name: 'Basic Notebook',
      category: 'budget',
      price: 449,
      originalPrice: 549,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop',
      specs: ['Celeron N5100', '4GB RAM', '15.6" HD', '256GB SSD'],
      fullSpecs: [
        'Display: 15.6" HD',
        'Processor: Intel Celeron N5100',
        'RAM: 4GB DDR4',
        'Storage: 256GB SSD',
        'Battery: 7 hours'
      ],
      discount: 18,
      rating: 4.0,
      tags: ['entry-level']
    }
  ];

  // Filter laptops based on active filter
  useEffect(() => {
    let filtered = allLaptops;
    
    if (activeFilter !== 'all') {
      filtered = allLaptops.filter(laptop => laptop.category === activeFilter);
    }

    // Sort the filtered laptops
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
        // Featured (default)
        filtered.sort((a, b) => {
          const aFeatured = a.tags?.includes('top-seller') || a.tags?.includes('premium');
          const bFeatured = b.tags?.includes('top-seller') || b.tags?.includes('premium');
          return (bFeatured ? 1 : 0) - (aFeatured ? 1 : 0);
        });
    }

    setFilteredLaptops(filtered);
  }, [activeFilter, sortBy]);

  const getCategoryCount = (category) => {
    if (category === 'all') return allLaptops.length;
    return allLaptops.filter(laptop => laptop.category === category).length;
  };

  const handleBuyNow = (laptop) => {
    addToCart(laptop);
    alert(`${laptop.name} added to cart!`);
  };

  const handleToggleFavorite = (laptop) => {
    toggleFavorite(laptop);
    setFavorites(prev => {
      if (prev.includes(laptop.id)) {
        return prev.filter(id => id !== laptop.id);
      } else {
        return [...prev, laptop.id];
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
          <h1>Premium Laptops & Notebooks</h1>
          <p className="page-subtitle">{filteredLaptops.length} laptops available - High-performance laptops for work, gaming, and portability</p>
        </div>

        <div className="products-filter">
          <div className="filter-section">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Laptops ({getCategoryCount('all')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'gaming' ? 'active' : ''}`}
              onClick={() => setActiveFilter('gaming')}
            >
              Gaming ({getCategoryCount('gaming')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'ultrabook' ? 'active' : ''}`}
              onClick={() => setActiveFilter('ultrabook')}
            >
              Ultrabooks ({getCategoryCount('ultrabook')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'business' ? 'active' : ''}`}
              onClick={() => setActiveFilter('business')}
            >
              Business ({getCategoryCount('business')})
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'budget' ? 'active' : ''}`}
              onClick={() => setActiveFilter('budget')}
            >
              Budget ({getCategoryCount('budget')})
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
          Showing {filteredLaptops.length} of {allLaptops.length} laptops
        </div>

        <div className="products-grid grid grid-4">
          {filteredLaptops.map((laptop) => (
            <ProductCard
              key={laptop.id}
              product={laptop}
              onAddToCart={() => handleBuyNow(laptop)}
              onToggleFavorite={() => handleToggleFavorite(laptop)}
              onToggleDetails={() => handleToggleDetails(laptop.id)}
              isExpanded={expandedProductId === laptop.id}
              isFavorite={favorites.includes(laptop.id)}
            />
          ))}
        </div>

        {filteredLaptops.length === 0 && (
          <div className="no-results">
            <h3>No laptops found in this category</h3>
            <p>Try selecting a different filter or category</p>
          </div>
        )}

        <div className="products-info">
          <div className="info-card">
            <h3>🔋 Battery Life</h3>
            <p>All laptops tested for real-world battery performance. Up to 22 hours on Ultrabooks.</p>
          </div>
          <div className="info-card">
            <h3>📦 Free Accessories</h3>
            <p>Free laptop bag, mouse, and cleaning kit with every purchase.</p>
          </div>
          <div className="info-card">
            <h3>⚡ Performance</h3>
            <p>Benchmark results available for all gaming and workstation laptops.</p>
          </div>
          <div className="info-card">
            <h3>🛡️ Premium Warranty</h3>
            <p>2-3 years warranty with international coverage for business laptops.</p>
          </div>
        </div>

        <div className="category-description">
          <h3>About Our Laptops</h3>
          <div className="description-grid">
            <div>
              <h4>🎮 Gaming Laptops</h4>
              <p>High-performance gaming laptops with latest RTX graphics, high refresh rate displays, and advanced cooling systems for the ultimate gaming experience.</p>
            </div>
            <div>
              <h4>💼 Ultrabooks</h4>
              <p>Slim, lightweight laptops with premium build quality, long battery life, and powerful processors for professionals on the go.</p>
            </div>
            <div>
              <h4>🏢 Business Laptops</h4>
              <p>Secure, durable laptops with enterprise-grade security features, premium support, and professional designs for business users.</p>
            </div>
            <div>
              <h4>💰 Budget Laptops</h4>
              <p>Affordable laptops for everyday use, studying, and basic office tasks without compromising on essential features.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptops;