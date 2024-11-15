// src/components/ProductItem.js
import React from 'react';
import { useCart } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{
      border: '1px solid #ddd', 
      padding: '16px', 
      borderRadius: '8px', 
      textAlign: 'center', 
      width: '200px',
      margin: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
      <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ fontWeight: 'bold', color: '#333' }}>Valor: ${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#1976d2', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer'
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductItem;



