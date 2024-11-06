import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import './contacto.css'; 

export const Contacto = () => {
  return (
    <div className="contenedor-contacto">
      <h2 className="titulo-contacto">Contacto</h2>
      <div className="contenido">

        {/* Información de contacto */}
        <div className="info-contacto">
          <h3 className="titulo-h3">Hablemos</h3>
          <p className="descripcion-contacto">
            Estoy abierto a discutir proyectos de desarrollo web u oportunidades de asociación.
          </p>
          <div className="contacto-info">
            <FaEnvelope />
            <a href="mailto:jhonier18249@gmail.com">jhonier18249@gmail.com</a>
          </div>
          <div className="contacto-info">
            <FaPhone />
            <span>+573107193875</span>
          </div>
          <div className="contacto-info">
            <FaMapMarkedAlt />
            <a href="https://maps.app.goo.gl/EseUkbuZABihRynm9" target="_blank" rel="noopener noreferrer">Ver en el mapa</a>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="formulario-contacto">
          <form action="">
            <label htmlFor="name">Tu nombre</label>
            <input type="text" placeholder='Ingrese su nombre' />
          </form>
          <form action="">
            <label htmlFor="Email">Correo Electrónico</label>
            <input type="text" placeholder='Ingrese su correo electrónico' />
          </form>
          <form action="">
            <label htmlFor="Mensaje">Mensaje</label>
            <textarea rows="5" placeholder='Ingrese su mensaje' />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

