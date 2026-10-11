import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone Support',
      details: ['+964 750 760 2123', '+964 786 027 5069'],
      hours: '9AM - 12PM (Sat - Thu)'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['iqlaps@gmail.com', 'iqlaps@gmail.com'],
      response: 'Response within 24 hours'
    },
    {
      icon: '📍',
      title: 'Visit Our Store',
      details: ['Baghdad, Al-Mansour', 'Near Baghdad Mall'],
      hours: '9AM - 12PM Daily'
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p className="page-subtitle">Get in touch with our support team</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="contact-detail">{detail}</p>
                  ))}
                  {(info.hours || info.response) && (
                    <p className="contact-hours">
                      {info.hours || info.response}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <div className="contact-form-card card">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
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
                </div>

                <div className="form-row">
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
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="custom">Custom PC Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-page {
          padding: 40px 0 80px;
          flex: 1;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 50px;
          margin-top: 40px;
        }
        
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .contact-card {
          background: var(--card-bg);
          padding: 25px;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: all 0.3s;
        }
        
        .contact-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
        
        .contact-icon {
          font-size: 32px;
          margin-bottom: 15px;
        }
        
        .contact-card h3 {
          margin: 0 0 15px 0;
          color: var(--text-primary);
          font-size: 18px;
        }
        
        .contact-detail {
          margin: 5px 0;
          color: var(--text-secondary);
          font-size: 14px;
        }
        
        .contact-hours {
          margin: 10px 0 0 0;
          color: var(--primary);
          font-size: 13px;
          font-weight: 500;
        }
        
        .contact-form-card {
          padding: 30px;
        }
        
        .contact-form-card h2 {
          margin: 0 0 30px 0;
          color: var(--text-primary);
          font-size: 1.75rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          margin-bottom: 8px;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 14px;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px 15px;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 14px;
          transition: all 0.3s;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
        }
        
        .form-group textarea {
          resize: vertical;
        }
        
        .submit-btn {
          padding: 15px 30px;
          font-size: 16px;
          font-weight: 600;
          margin-top: 10px;
        }
        
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;