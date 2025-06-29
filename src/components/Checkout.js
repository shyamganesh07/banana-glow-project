// src/components/Checkout.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Proceeding to Payment Gateway...');
    navigate('/payment');
  };

  return (
    <div style={{
      padding: '30px',
      margin: '20px auto',
      maxWidth: '600px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      color: '#222'
    }}>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>• {item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', margin: '8px 0' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', margin: '8px 0' }}
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          required
          rows={4}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', margin: '8px 0' }}
        ></textarea>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#f4c430', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
          Proceed to Pay
        </button>
      </form>
    </div>
  );
}

export default Checkout;
