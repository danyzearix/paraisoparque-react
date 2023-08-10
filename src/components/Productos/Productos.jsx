import React from 'react'
import "./Productos.css"

const Productos = () => {
  return (
    <div className="productos">
      <div className="productos-header">
        <h1 className="productos-title">Nuestros Productos</h1>
      </div>
      <div className="productos">
      <div className="productos-content">
        <div className="text-section">
          <h1 className="title">Cenizarios en Capilla</h1>
          <p className="paragraph">Espacio en madera, con capacidad para albergar desde 1 a 4 cenizas, en propiedad a perpetuidad con tapa en cristal ubicados en el sótano de la capilla, con placa memorial y asistencia religiosa durante el servicio de inhumación de las cenizas</p>
          <p className="paragraphIdent">
            <img src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/03/funerario-ico.png" width={64} className="icon"/> <span>Que ofrecemos?</span>
          </p>
          <p className="paragraphIdent">Texto mostrando sensibilidad y empatía con el cliente también indicando por qué deberían usar este servicio con paraíso.</p>
        </div>
        <div className="image-section">
        <img src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/03/DSC01895-1536x864.webp" alt="Imagen de producto" className="product-image" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productos