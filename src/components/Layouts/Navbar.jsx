import React from 'react';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">YHONIER ARIAS</div>
      <div className="navbar-links">
        <a href="/">Inicio</a>
        <a href="/about">Sobre Mí</a>
        <a href="/services">Servicios</a>
        <a href="/projects">Proyectos</a>
        <a href="/contact">Contacto</a>
      </div>
      <button className="connect-button">Conectate conmigo</button>
    </nav>
  );
};

export default Navbar;
