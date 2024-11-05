import React from 'react';
import './service.css';

const servicios = [
  {
    id: 1,
    titulo: "Diseño Web",
    descripcion: "Creando diseños web visuales atractivos y amigables con el usuario."
  },
  {
    id: 2,
    titulo: "Desarrollo Frontend",
    descripcion: "Construyendo interfaces de usuario responsivas e interactivas.",
  },
  {
    id: 3,
    titulo: "Desarrollo Backend",
    descripcion: "Desarrollando lógica del lado del servidor robusta y bases de datos.",
  },
  {
    id: 4,
    titulo: "Desarrollo Full-Stack",
    descripcion: "Combinando habilidades de desarrollo frontend y backend.",
  }
]

const Servicio = () => {
  return (
    <div className="contenedor-servicio">
      <div>
        <h2 className='titulo'>Mis Servicios</h2>
        <div className="lista-servicios">
          {servicios.map(servicio => (
            <div key={servicio.id} className="item-servicio">
              <div className="id-servicio">
                {servicio.id}
              </div>
              <h3 className="titulo-servicio">
                {servicio.titulo}
              </h3>
              <p className="descripcion-servicio">
                {servicio.descripcion}
              </p>
              <a href="" className="enlace-servicio">Leer Más</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicio;
