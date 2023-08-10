import React from 'react';
import './ImageAcordion.css';
import "../../Shared.css"

const ImageAccordion = ({ imagen, texto }) => {
  return (
    <div className="imageAccordion">
      <img src={imagen} alt={texto} />
      <div className="contenido">
        <h1>{texto}</h1>
        <button className='genericButton'>Cotizar servicio</button>
      </div>
    </div>
  );
}

export default ImageAccordion;
