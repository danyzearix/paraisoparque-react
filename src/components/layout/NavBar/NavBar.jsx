import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo-web.png"
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar-container'>
        <div className='nav-logo'>
            <img src={logo} alt="" width={200} />
        </div>

        <div className='nav-menu'>
            <ul className='lista-menu'>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/ObituariosGenerales">Obituarios</Link></li>
            <li><Link to="https://paraisocementerio.a2hosted.com/misas-y-eventos">Misas y Reservas</Link></li>

           
            </ul>
        </div>
    </div>
  )
}

export default NavBar