import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Logged in successfully!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert('Account created successfully!');
    }
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      location: ''
    });
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-wrapper">
          <div className="login-card card">
            <div className="login-header">
              <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
              <p className="login-subtitle">
                {isLogin ? 'Sign in to your IQ_LAPS account' : 'Join IQ_LAPS for the best shopping experience'}
              </p>
            </div>

            <div className="login-tabs">
              <button
                className={`tab-btn ${isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`tab-btn ${!isLogin ? 'active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  minLength="6"
                />
              </div>

              {!isLogin && (
                <>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required={!isLogin}
                      placeholder="Confirm your password"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+964 XXX XXX XXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location (City)</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter your city"
                    />
                  </div>
                </>
              )}

              {isLogin && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <Link to="#" className="forgot-link">
                    Forgot password?
                  </Link>
                </div>
              )}

              <button type="submit" className="btn btn-primary login-btn">
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>

              {isLogin && (
                <div className="login-divider">
                  <span>or continue with</span>
                </div>
              )}

              {isLogin && (
                <div className="social-login">
                  <button type="button" className="social-btn google">
                    <span>G</span> Google
                  </button>
                  <button type="button" className="social-btn facebook">
                    <span>f</span> Facebook
                  </button>
                </div>
              )}

              <div className="login-footer">
                <p>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    className="switch-btn"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? ' Sign Up' : ' Login'}
                  </button>
                </p>
              </div>
            </form>
          </div>

          <div className="login-benefits">
            <h3>Benefits of IQ_LAPS Account</h3>
            <ul className="benefits-list">
              <li className="benefit-item">🛒 Save your shopping cart</li>
              <li className="benefit-item">❤️ Track favorite products</li>
              <li className="benefit-item">🚚 Faster checkout process</li>
              <li className="benefit-item">📦 Order history tracking</li>
              <li className="benefit-item">🎁 Exclusive member discounts</li>
              <li className="benefit-item">📞 Priority customer support</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          padding: 40px 0 80px;
          flex: 1;
          display: flex;
          align-items: center;
        }
        
        .login-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        
        .login-card {
          padding: 40px;
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }
        
        .login-header h1 {
          margin: 0 0 10px 0;
          color: var(--text-primary);
          font-size: 2rem;
        }
        
        .login-subtitle {
          color: var(--text-secondary);
          margin: 0;
        }
        
        .login-tabs {
          display: flex;
          margin-bottom: 30px;
          border-bottom: 2px solid var(--border);
        }
        
        .tab-btn {
          flex: 1;
          padding: 15px;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
        }
        
        .tab-btn.active {
          color: var(--primary);
        }
        
        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary);
        }
        
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 14px;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px 15px;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 14px;
          transition: all 0.3s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
        }
        
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 14px;
          cursor: pointer;
        }
        
        .checkbox-label input {
          width: auto;
        }
        
        .forgot-link {
          color: var(--primary);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }
        
        .forgot-link:hover {
          color: var(--primary-dark);
        }
        
        .login-btn {
          padding: 15px;
          font-size: 16px;
          font-weight: 600;
          margin-top: 10px;
        }
        
        .login-divider {
          text-align: center;
          margin: 20px 0;
          position: relative;
        }
        
        .login-divider span {
          background: var(--card-bg);
          padding: 0 15px;
          color: var(--text-secondary);
          font-size: 14px;
          position: relative;
          z-index: 1;
        }
        
        .login-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border);
        }
        
        .social-login {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px;
          border: 1px solid var(--border);
          background: var(--background);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .social-btn:hover {
          border-color: var(--primary);
          background: var(--secondary);
        }
        
        .social-btn span {
          font-weight: bold;
          font-size: 16px;
        }
        
        .google span { color: #DB4437; }
        .facebook span { color: #4267B2; }
        
        .login-footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        
        .login-footer p {
          color: var(--text-secondary);
          margin: 0;
        }
        
        .switch-btn {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          margin-left: 5px;
          transition: color 0.3s;
        }
        
        .switch-btn:hover {
          color: var(--primary-dark);
        }
        
        .login-benefits {
          padding: 30px;
          background: var(--card-bg);
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        
        .login-benefits h3 {
          color: var(--text-primary);
          margin-bottom: 25px;
          font-size: 1.5rem;
        }
        
        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .benefit-item {
          padding: 12px 0;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border);
          font-size: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .benefit-item:last-child {
          border-bottom: none;
        }
        
        @media (max-width: 768px) {
          .login-wrapper {
            grid-template-columns: 1fr;
          }
          
          .social-login {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;