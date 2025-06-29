import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    navigate('/success', {
      state: {
        name,
        email,
        mobile,
        address,
      },
    });
  };

  return (
    <div style={{ padding: '30px', maxWidth: '700px', margin: 'auto' }}>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.name} - ₹{item.price}{' '}
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    marginLeft: '10px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>

          <hr />
          <h4>Enter Shipping Details</h4>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <textarea
            placeholder="Full Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ padding: '10px', width: '100%', height: '100px', marginBottom: '10px' }}
          ></textarea>

          <button
            onClick={handlePayment}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#f4c430',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
