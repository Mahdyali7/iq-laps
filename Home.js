import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Gaming Pro PC',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop',
      category: 'Gaming'
    },
    {
      id: 2,
      name: 'UltraBook Pro',
      price: 899,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      category: 'Laptop'
    },
    {
      id: 3,
      name: 'Workstation Elite',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      category: 'Professional'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">IQ_LAPS</span>
            </h1>
            <p className="hero-subtitle">
              Premium Computers & Laptops with Best Prices in Iraq
            </p>
            <div className="hero-buttons">
              <Link to="/computers" className="btn btn-primary btn-large">
                Shop Computers
              </Link>
              <Link to="/laptops" className="btn btn-secondary btn-large">
                Shop Laptops
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid grid-3">
            {featuredProducts.map((product) => (
              <div key={product.id} className="featured-card">
                <div className="featured-image">
                  <img src={product.image} alt={product.name} />
                  <span className="category-badge">{product.category}</span>
                </div>
                <div className="featured-info">
                  <h3>{product.name}</h3>
                  <p className="price">From ${product.price}</p>
                  <Link 
                    to={`/${product.category.toLowerCase()}s`} 
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Why Choose IQ_LAPS?</h2>
          <div className="grid grid-3">
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Free Delivery</h3>
              <p>Free shipping across Iraq with cash on delivery</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>2-Year Warranty</h3>
              <p>Comprehensive warranty on all products</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Custom PC Builder</h3>
              <p>Build your dream PC with our configurator</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Build Your Dream PC</h2>
            <p>Customize every component with our PC Builder tool</p>
            <Link to="/custom-pc" className="btn btn-primary btn-large">
              Start Building
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;