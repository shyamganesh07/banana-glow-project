import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate, useLocation } from 'react-router-dom';

function Success() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, email, mobile, address } = state || {};

  const [orderId, setOrderId] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fakeOrderId = 'ORD' + Math.floor(100000 + Math.random() * 900000);
    const fakePaymentId = 'PAY' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(fakeOrderId);
    setPaymentId(fakePaymentId);

    setProductList(cartItems);
    setTotal(cartItems.reduce((sum, item) => sum + item.price, 0));

    clearCart();
  }, []);

  const handleDownload = () => {
    const billContent = `
      BananaGlow - Invoice

      Order ID: ${orderId}
      Payment ID: ${paymentId}

      Name: ${name}
      Email: ${email}
      Mobile: ${mobile}
      Address: ${address}

      Products:
      ${productList.map((p) => `- ${p.name}: ₹${p.price}`).join('\n')}

      Total Paid: ₹${total}

      Thank you for shopping with us! 🍌
    `;

    const blob = new Blob([billContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BananaGlow_Invoice_${orderId}.txt`;
    a.click();
  };

  return (
    <div
      style={{
        padding: '30px',
        margin: '20px auto',
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        textAlign: 'center',
        color: '#222',
        fontWeight: 'bold',
      }}
    >
      <h2>✅ Payment Successful</h2>
      <p><strong>Order ID:</strong> {orderId}</p>
      <p><strong>Payment ID:</strong> {paymentId}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Total Paid:</strong> ₹{total}</p>
      <p style={{ color: 'green' }}>
        📩 A fake invoice has been generated. Click below to download it.
      </p>

      <button
        onClick={handleDownload}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#f4c430',
          border: 'none',
          borderRadius: '10px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        📄 Download Invoice
      </button>

      <br /><br />
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '8px 16px',
          border: 'none',
          backgroundColor: '#555',
          color: '#fff',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Success;
