// src/components/Payment.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handleFakePay = () => {
    setTimeout(() => {
      navigate('/success');
    }, 1000); // simulate processing
  };

  return (
    <div style={{
      padding: '30px',
      margin: '20px auto',
      maxWidth: '600px',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      textAlign: 'center'
    }}>
      <h2>🧾 Payment Gateway</h2>
      <p>Click below to simulate a successful payment.</p>
      <button
        onClick={handleFakePay}
        style={{
          padding: '12px 25px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#f4c430',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        ✅ Pay ₹ Now
      </button>
    </div>
  );
}

export default Payment;
