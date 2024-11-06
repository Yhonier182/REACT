import './App.css'
import {Navbar} from './components/Layouts/Navbar'
import {Home} from './components/pages/Home'
import {About} from './components/pages/About'
import {Servicio} from './components/pages/Service'
import {Proyectos} from './components/pages/Proyectos'
import {Contacto} from './components/pages/Contacto'
import {Footer} from './components/UI/Footer'
// import { Calculate } from './components/Calculate/calculate'


//ejemplo correcyt import {componente} from './''' etc


export const  App = () => {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Servicio />
    <Proyectos />
    <Contacto />
    <Footer />
   
    
    {/* <Calculate/> */}
    </div>
  )
}
