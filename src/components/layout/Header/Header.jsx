import React, {useContext} from 'react'
import "./Header.css"



function Header() {

  return (
    <div className='header-container'>
        <div className='icon-nav'>
        <i className="bi bi-telephone-inbound-fill"></i>
        </div>

        <div className='info-container'>
           <p>Parque cementerio: (601) 8966280 – (601) 8966281  
            <br/> Of. Admin: + 57 (601) 2564809 – Celular 24 horas: +57 3202763405</p>
        </div>

        <div>
            <button className='pay-button'> Pagos <i className="bi bi-coin"></i> </button>
        </div>
    </div>
  )
}

export default Header