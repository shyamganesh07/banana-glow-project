// src/components/Cart.js
import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.address) {
      alert("Please fill all fields.");
      return;
    }
    navigate('/success');
  };

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}{" "}
              <button onClick={() => removeFromCart(index)} className="remove-btn">
                Remove
              </button>
            </li>
          ))}
        </ul>
        <h3>Total: ₹{total}</h3>

        <hr />
        <h4>Enter Shipping Details</h4>
        <form className="cart-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Full Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          <button type="button" onClick={handlePayment} className="pay-btn">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cart;
