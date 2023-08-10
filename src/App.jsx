import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import './App.css';
import Header from './components/layout/Header/Header';
import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import Servicios from './components/Servicios/Servicios';
import FormularioObituarios from './components/FormularioObituarios/FormularioObituarios';
import ObituariosGenerales from './components/ObituariosGenerales/ObituariosGenerales';


const slides = [
  {
    image: "https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/03/DJI_0501-convert.io-1.webp",
    title: 'Somos el primer parque cementerio',
    subtitle: 'Al noroccidente de Bogotá',
    button: 'En que podemos ayudarte?'
  },
  {
    image: 'https://elparaisoparquecementerio.com.co/wp-content/uploads/2022/09/Diseno-sin-titulo-27.jpg',
    title: 'Realiza tus pagos en línea',
    subtitle: 'Renovamos nuestros métodos de pago, consultalos aquí',
    button: 'Ver métodos de pago'
  },
  {
    image: 'https://elparaisoparquecementerio.com.co/wp-content/uploads/2022/09/Diseno-sin-titulo-26-1.jpg',
    title: 'Adquiere tu póliza de vida',
    subtitle: 'Creamos una solución para brindar seguridad a ti y tu familía',
    button: 'Conocer más'
  },
  {
    image: 'https://paraisocementerio.a2hosted.com/wp-content/uploads/2023/08/slide4.jpg',
    title: 'Salas de velación Paraiso',
    subtitle: 'Diseñamos un espacio para honrar a tus seres queridos',
    button: 'Conocer más'
  }
];



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home slides={slides}/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/FormularioObituarios" element={<FormularioObituarios/>} />
        <Route path="/ObituariosGenerales" element={<ObituariosGenerales/>} />

      </Routes>
    </Router>
  )
}

export default App
