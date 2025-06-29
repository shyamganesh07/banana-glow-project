// src/components/ProductSlider.js
import React, { useContext } from 'react';
import './ProductSlider.css';
import ProductCard from './productCard';
import { CartContext } from '../CartContext';

import img1 from './images(1).jpeg';
import img2 from './images(2).jpeg';
import img3 from './3.jpeg';
import img4 from './4.jpeg';
import img5 from './5.jpeg';
import img6 from './6.jpeg';
import img7 from './7.jpeg';
import img8 from './8.jpeg';
import img9 from './9.jpeg';
import img10 from './10.jpeg';

const products = [
  { name: "Banana Face Powder", price: 499, image: img1 },
  { name: "Banana Glow Cream", price: 599, image: img2 },
  { name: "Banana Body Lotion", price: 399, image: img3 },
  { name: "Banana Soap Bar", price: 199, image: img4 },
  { name: "Banana Lip Balm", price: 149, image: img5 },
  { name: "Banana Moisturizer", price: 549, image: img6 },
  { name: "Banana Shampoo", price: 349, image: img7 },
  { name: "Banana Conditioner", price: 379, image: img8 },
  { name: "Banana Hair Serum", price: 459, image: img9 },
  { name: "Banana Night Cream", price: 699, image: img10 },
];

function ProductSlider() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="slider-container">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductSlider;
