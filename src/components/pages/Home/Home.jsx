import React from "react";
import imgenPerfil from "/perfil.jpeg";

import './home.css';

const Home = () =>   {
    return(
    <div  className="home-container">
       <img src={imgenPerfil} alt="" />
       <h1>
          Soy {""}
          <span>
            Jhonier Arias </span>
            , Desarrollador Full-Stack
       </h1>
       <p>
         Me especializo en construir aplicaciones web modernas y responsivas.
       </p>
       <div>
        <button>Contactar conmigo</button>
        <button className="boton-curriculum"> Currículum </button> 
       </div>   
    </div>
    ) 
}

export default Home