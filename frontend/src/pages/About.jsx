import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>About Shopora</h2>
      
      <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        Shopora is your one-stop destination for quality products at great prices. We are committed to providing an exceptional shopping experience with a wide range of products, secure payments, and fast delivery.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
        <div style={{ background: '#27272a', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#1DB954', marginBottom: '10px' }}>🛍️ Quality Products</h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: '1.6' }}>Curated selection of high-quality items</p>
        </div>
        <div style={{ background: '#27272a', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#1DB954', marginBottom: '10px' }}>🔒 Secure Payments</h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: '1.6' }}>Safe and secure payment options</p>
        </div>
        <div style={{ background: '#27272a', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#1DB954', marginBottom: '10px' }}>🚚 Fast Delivery</h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: '1.6' }}>Quick and reliable shipping</p>
        </div>
        <div style={{ background: '#27272a', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#1DB954', marginBottom: '10px' }}>💯 Customer Support</h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: '1.6' }}>Dedicated support team available 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default About;
