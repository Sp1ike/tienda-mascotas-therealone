// src/pages/HomePage.js
import React from 'react';
import ProductItem from '../components/ProductItem';

const products = [
  { id: 1, name: 'Champion Dog Adulto', price: 12000, image: 'ruta_imagen', description: 'Alimento para Perro Adulto Carne y Pollo 15 kg' },
  { id: 2, name: 'Whiskas Gato Adulto', price: 9500, image: 'ruta_imagen', description: 'Alimento para Gato Adulto Pollo 3 kg' },
  // Agrega más productos aquí
];

const Catalog = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Bienvenidos a la tienda de Fundación Esperanza Animal</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: 'center' }}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;


