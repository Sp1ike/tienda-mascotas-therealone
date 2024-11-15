import React from 'react';
import ProductItem from '../components/ProductItem';

const products = [
  { id: 1, name: 'Purina Pro Plan Perro Adulto Pollo y Arroz 15 kg', price: 44990, image: '/images/purina.jpg', description: 'Alimento completo para perros adultos con ingredientes de alta calidad, especialmente formulado para la digestión y el bienestar de tu mascota.' },
  { id: 2, name: 'Royal Canin Gato Adulto 10 kg', price: 41990, image: '/images/royal.jpg', description: 'Alimento seco para gatos adultos, con proteínas de alta calidad que ayudan a mantener la salud urinaria y la calidad de la piel.' },
  { id: 3, name: 'Correa para Perro PetSafe 1.8 m', price: 7990, image: '/images/correa.jpg', description: 'Correa ajustable de nylon para perros, ideal para paseos cómodos y seguros. Viene en varios colores y tiene un sistema de gancho de alta resistencia.' },
  { id: 4, name: 'Juguete Interactivo para Gatos Petstages', price: 4990, image: '/images/juguete.jpg', description: 'Juguete interactivo para gatos, con sonidos y luces que estimulan la actividad física y mental de tu mascota.' },
  { id: 5, name: 'Bozal para Perro Muzzle de Nylon (Trixie)', price: 8500, image: '/images/bozal.jpg', description: 'Bozal de nylon ajustable para perros, ideal para entrenamientos y paseos en lugares públicos, con ventilación adecuada para la comodidad de tu mascota.' },
];

const Catalog = () => {
  return (
  <div className="catalog-container">
    <h2 style={{ marginBottom: '20px', color: '#333' }}>Bienvenidos a la tienda de Fundación Esperanza Animal</h2>
    <div className="catalog-grid">
        {products.map((product) => (
           <ProductItem key={product.id} product={product} />
        ))}
     </div>
  </div>
  );
};

export default Catalog;

