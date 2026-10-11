import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';

import Home from './pages/Home';
import Computers from './pages/Computers';
import Laptops from './pages/Laptops';
import CustomPC from './pages/CustomPC';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Favorites from './pages/Favorites'; 

// ✅ ALL POLICY & SUPPORT IMPORTS
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import FAQ from './pages/FAQ';
import Warranty from './pages/Warranty'; // ✅ ADD WARRANTY IMPORT

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [language, setLanguage] = useState('en');
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const toggleFavorite = (item) => {
    if (favorites.some(fav => fav.id === item.id)) {
      setFavorites(favorites.filter(fav => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <Router>
      <div className="app">
        <Header
          language={language}
          setLanguage={setLanguage}
          cartItems={cartItems}
          setShowCart={setShowCart}
        />

        <NavBar />

        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/computers" element={<Computers addToCart={addToCart} toggleFavorite={toggleFavorite} />} />
          <Route path="/laptops" element={<Laptops addToCart={addToCart} toggleFavorite={toggleFavorite} />} />
          <Route path="/custom-pc" element={<CustomPC addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />

          {/* ✅ POLICY & SUPPORT PAGES */}
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/warranty" element={<Warranty />} /> {/* ✅ WARRANTY ROUTE ADDED */}
        </Routes>

        <Footer />

        <ShoppingCart
          isOpen={showCart}
          onClose={() => setShowCart(false)}
          items={cartItems}
          setItems={setCartItems}
        />
      </div>
    </Router>
  );
}

export default App;