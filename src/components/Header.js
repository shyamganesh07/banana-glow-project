import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Header() {
  const { cartItemCount } = useContext(CartContext);

  return (
    <header style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ fontFamily: 'cursive', color: '#f4c430' }}>BananaGlow 🍌</h1>
      <nav>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '15px' }}>Contact</Link>
        <Link to="/cart">🛒 Cart ({cartItemCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
