import React from 'react';


 export const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
      <div className='text-3xl font-bold hidden md:inline'>YHONIER ARIAS</div>
      <div className='space-x-6'>
        <a href="/" className='hover:text-yellow-400'>Inicio</a>
        <a href="/about" className='hover:text-yellow-400'>Sobre Mí</a>
        <a href="/services" className='hover:text-yellow-400'>Servicios</a>
        <a href="/projects" className='hover:text-yellow-400'>Proyectos</a>
        <a href="/contact" className='hover:text-yellow-400'>Contacto</a>
      </div>
      <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
       transform trnasition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Conectate conmigo
      </button>
      </div>
    </nav>
  );
};

