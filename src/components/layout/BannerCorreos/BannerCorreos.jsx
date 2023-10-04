import React from 'react';
import './BannerCorreos.css';

const BannerCorreos = () => {
  return (
    <div className="banner-correos-container">
      <div className="banner-column">
        <h2 className="subtituloWhite">SERVICIO AL CLIENTE</h2>
        <p className="parrafo">📧 E-mail: s.cliente@elparaisoparquecementerio.com</p>
        <button className="boton">Términos y Condiciones - Clausulado</button>
      </div>
      <div className="banner-column">
        <h2 className="subtituloWhite">PQRS</h2>
        <p className="parrafo">📧 E-mail: pqrs@elparaisoparquecementerio.com</p>
        <button className="boton">Política de tratamiento de datos de la información</button>
      </div>
    </div>
  );
};

export default BannerCorreos;
