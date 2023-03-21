import React from 'react'
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
                <li>INICIO</li>
                <li>PRODUCTOS Y SERVICIOS</li>
                <li>OBITUARIOS</li>
                <li>MISAS</li>
                <li>TIENDA</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar