import React from 'react';


 export const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
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

