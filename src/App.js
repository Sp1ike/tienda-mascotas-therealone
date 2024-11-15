// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';

const App = () => {
  // Funciones para abrir las ventanas emergentes
  const openInstagram = () => {
    window.open("https://www.instagram.com/fundacionesperanzaanimalchile", "_blank", "width=600,height=600");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/fundacionesperanzaanimalchile", "_blank", "width=600,height=600");
  };

  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav style={{ padding: '10px', display: 'flex', gap: '15px' }}>
          <Link to="/catalog">Catálogo</Link>
          <Link to="/cart">Carrito</Link>
          <Link to="/aboutus">Sobre nosotros</Link>
          <button onClick={openInstagram} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
            Instagram
          </button>
          <button onClick={openFacebook} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
            Facebook
          </button>
        </nav>

        {/* Rutas para las diferentes secciones */}
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



