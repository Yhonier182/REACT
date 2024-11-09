import './App.css'
import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/AboutUS/About'
import { Servicio } from './components/pages/ServicesUS/Service'
import { Proyectos } from './components/pages/ProyectsUS/Proyectos'
import { Contacto } from './components/pages/ContacUS/Contacto'
import { Footer } from './components/Layouts/Footer/Footer'
// import { Calculate } from './components/Calculate/calculate'
import { Header } from './components/Layouts/Header/Header'


import { Route, Routes } from 'react-router-dom'


export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
    <Footer />
    </div>
  )
}
