import { Fragment, useState } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import NavBar from './components/layout/NavBar/NavBar';
import Home from './components/Home/Home';


const slides = [
  {
    image: "https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/03/DJI_0501-convert.io-1.webp",
    title: 'Somos el primer parque cementerio',
    subtitle: 'Al noroccidente de Bogotá',
    button: 'En que podemos ayudarte?'
  },
  {
    image: 'https://elparaisoparquecementerio.com.co/wp-content/uploads/2022/09/Diseno-sin-titulo-26-1.jpg',
    title: 'Realiza tus pagos en línea',
    subtitle: 'Renovamos nuestros métodos de pago, consultalos aquí',
    button: 'Ver métodos de pago'
  },
  {
    image: 'https://elparaisoparquecementerio.com.co/wp-content/uploads/2022/09/Diseno-sin-titulo-27.jpg',
    title: 'Adquiere tu póliza de vida',
    subtitle: 'Creamos una solución para brindar seguridad a ti y tu familía',
    button: 'Conocer más'
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Header/>
      <NavBar/>
      <Home slides={slides}/>
    </Fragment>
  )
}

export default App
