

import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import './footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <div className="info-footer">
          <div className="perfil">
            <h3>Jhonier Arias</h3>
            <p>Desarrollador full-stack de Colombia, especializado en desarrollo web y software</p>
          </div>
          <div className="suscripcion">
            <form>
              <input type="email" placeholder='Ingrese su correo electrónico' />
              <button>Suscríbete</button>
            </form>
          </div>
        </div>
        <hr className="linea-separadora" />
        <div className="enlaces-footer">
          <p>&copy; {new Date().getFullYear()}</p>
          <div className="redes-sociales">
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://github.com">
              <FaGithub />
            </a>
          </div>
          <div className="politicas-footer">
            <a href="">Privacidad</a>
            <a href="">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
