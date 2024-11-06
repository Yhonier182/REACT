import React from 'react';
import fotoPerfil from './../UI/Logotipo/perfil.jpeg'
import './about.css'

export const About = () => {
  return (
    <div className='about-container'>
      <h2 className='about-title'>Sobre Mí</h2>
      <div className='about-content'>
        <img src={fotoPerfil} alt="Sobre Mi" className='about-image'/>
        <div className='about-description'>
          <p>
            Soy un desarrollador full-stack apasionado con un enfoque en construir aplicaciones web modernas y responsivas.
            Con una sólida base en tecnologías tanto frontend como backend,
            me esfuerzo por crear experiencias de usuario fluidas y eficientes.
          </p>
          <div className="page-container">
            <div className="container">
              <div className="flex">
                <label htmlFor="htmlandCss" className="label-width">HTML & CSS</label>
                <div className="progress-container">
                  <div className="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-container">
            <div className="container">
              <div className="flex">
                <label htmlFor="htmlandCss" className="label-width">JAVA</label>
                <div className="progress-container">
                  <div className="progress-bar-java"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-container">
            <div className="container">
              <div className="flex">
                <label htmlFor="htmlandCss" className="label-width">Spring Boot</label>
                <div className="progress-container">
                  <div className="progress-bar-Spring"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

