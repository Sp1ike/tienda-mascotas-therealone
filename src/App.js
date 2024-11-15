// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css';

const App = () => {

  const style = {
    backgroundImage: 'url(/images/fondo.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    height: '100vh',
    margin: 0,
  };

  // Funciones para abrir las ventanas emergentes
  const openInstagram = () => {
    window.open("https://www.instagram.com/fundacionesperanzaanimalchile", "_blank", "width=600,height=600");
  };

  const openFacebook = () => {
    window.open("https://www.facebook.com/fundacionesperanzaanimalchile", "_blank", "width=600,height=600");
  };

  return (
    <Router>
      <div style={style}>
        {/* Menú de navegación */}
        <nav style={styles.navbar}>
          <Link to="/catalog" style={styles.link}>Catálogo</Link>
          <Link to="/cart" style={styles.link}>Carrito</Link>
          <Link to="/aboutus" style={styles.link}>Sobre nosotros</Link>
          <Link to="/login" style={styles.link}>Iniciar sesión</Link>
          <Link to="/register" style={styles.link}>Registrar</Link>
          <button onClick={openInstagram} style={styles.socialButton}>Instagram</button>
          <button onClick={openFacebook} style={styles.socialButton}>Facebook</button>
        </nav>

        {/* Rutas para las diferentes secciones */}
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    padding: '15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  socialButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem',
    padding: '10px',
    marginLeft: '10px',
    transition: 'color 0.3s ease',
  },
};

export default App;
