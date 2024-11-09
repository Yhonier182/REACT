import React from 'react';
import java from './../UI/Logotipo/java.jpg';
import inventario from './../UI/Logotipo/sistemainventario.png';
import angular from './../UI/Logotipo/angular.png';
import './proyectos.css';

const project = [
  {
    id: 1,
    name: "Sistema Inventario",
    tecnologies: "JAVA",
    imagen: inventario,
    github: "",
  },
  {
    id: 2,
    name: "Api Rest",
    tecnologies: "Spring Boot",
    imagen: java,
    github: ""
  },
  {
    id: 3,
    name: "Sistema de Compras",
    tecnologies: "Angular",
    imagen: angular,
    github: ""
  }
];

 export const Proyectos = () => {
  return (
    <div className="proyectos-container">
      <h2>Mis Proyectos</h2>
      <div className="proyectos-grid">
        {project.map((projects) => (
          <div className="proyecto-card" key={projects.id}>
            <img src={projects.imagen} alt={projects.name} />
            <h3>{projects.name}</h3>
            <p>{projects.tecnologies}</p>
            <a href={projects.github || "#"}>GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};


