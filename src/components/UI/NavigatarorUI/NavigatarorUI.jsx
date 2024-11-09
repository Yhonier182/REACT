import React from 'react';
import { Link } from 'react-router-dom'
 
export const NavigatarorUI = () => {
  return (
   <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
      <div className='text-3xl font-bold hidden md:inline'>YHONIER ARIAS</div>
      <div className='space-x-6'>
         
         <Link to="/" className='hover:text-yellow-400'>Inicio</Link>
         <Link to="/about" className='hover:text-yellow-400'>Sobre Mí</Link>
         <Link to="/services" className='hover:text-yellow-400'>Servicios</Link>
         <Link to="/projects" className='hover:text-yellow-400'>Proyectos</Link>
         <Link to="/contact" className='hover:text-yellow-400'>Contacto</Link>
         

      </div>
      <button className="bg-gradient-to-r from-pink-400 to-orange-500 text-white hidden md:inline
       transform trnasition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Conecta conmigo
      </button>
      </div>
    </nav>
  )
}
