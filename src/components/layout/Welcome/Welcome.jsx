import imagen from '../../../../public/welcome.webp';
import icono1 from '../../../../public/urna.png';
import icono2 from '../../../../public/lotes.png';
import icono3 from '../../../../public/soluciones.png';
import './Welcome.css'; // Importa los estilos
import { Fragment } from 'react';
import ImageAccordion from '../Imageacordion/Imageacordion';
import CalendarGeneral from '../CalendarGeneral/CalendarGeneral';
import Obituarios from '../Obituarios/Obituarios';
import Misas from '../Misas/Misas';
import QuienesSomos from '../QuienesSomos/QuienesSomos';

const Welcome = () => {

  document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((imageContainer) => {
        const overlay = imageContainer.querySelector('.overlay');
        const titleOutside = imageContainer.parentNode.querySelector('.card .title:not(.title-inside)');
        const titleInside = imageContainer.querySelector('.overlay .title');

        imageContainer.addEventListener('mouseenter', () => {
            overlay.style.display = 'flex';
            titleInside.classList.remove('hidden');
        });

        imageContainer.addEventListener('mouseleave', () => {
            overlay.style.display = 'none';
            titleOutside.style.visibility = 'visible';
            titleInside.classList.add('hidden');
        });
    });
});

  return (
    <Fragment>
    <div className="welcomeContainer">
      <div className="izquierda">
        <img src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/capillafinal3-scaled.jpg" alt="Imagen de bienvenida" />
      </div>
      <div className="derecha">
        <h4 className='homeTitle'>Bienvenidos</h4>
        <p className='bigParrafo'>Nuestro corazón empresarial está basado en un servicio integral y de calidad.</p>
        <p className='midParrafo'>Somos una organización orientada a satisfacer de manera integral y responsable a las necesidades que se presentan tras la pérdida de un ser querido</p>
        
        <h3 className='homeSubtitle'>Servicios y productos</h3>
        <div className="columnas">
          <div className="columna">
            <img src={icono1} alt="Icono 1" />
            <p className='mainProducts'>Cenizarios en propiedad</p>
          </div>
          <div className="columna">
            <img src={icono2} alt="Icono 2" />
            <p className='mainProducts'>Soluciones paraiso</p>
          </div>
          <div className="columna">
            <img src={icono3} alt="Icono 3" />
            <p className='mainProducts'>Lotes en propiedad</p>
          </div>
        </div>
      </div>
    </div>
    <div className='midMargin'>
      <h1 className='genericTtitle'>PRODUCTOS</h1>
      <p className='genericSubtitle'>Productos creados pensando en tus seres queridos

</p>
      <hr class="gradient"/>
    </div>
    <div className='productsContainer'>
    
    <div className="cards-container">
      
        <div className="card">
            <div className="image-container">
                <img className='productImg' src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/IMG_3595-scaled.jpeg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden"></h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Cenizarios en Capilla</h3>
        </div>
        <div className="card">
            <div className="image-container">
                <img className='productImg' src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/IMG_5375-scaled.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Cenizarios en Muro</h3>
        </div>
        <div className="card">
            <div className="image-container">
                <img className='productImg' src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/osarios-modulo-preferencial.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Osarios en Muro</h3>
        </div>
        <div className="card">
            <div className="image-container">
                <img className='productImg' src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/arbol-cnz-camino-scaled.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Cenizarios en Tierra</h3>
        </div>
        <div className="card">
            <div className="image-container">
                <img className='productImg' src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/arbol-cenizario.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Arbol Cenizario</h3>
        </div>
        <div className="card">
            <div className="image-container">
                <img className='productImg' src="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/lotes-prop-scaled.jpg" alt="Imagen de ejemplo"/>
                <div className="overlay">
                    <h3 className="title title-inside hidden">Título de ejemplo</h3>
                </div>
            </div>
            <h3 className="homeSubtitle">Lotes en Propiedad</h3>
        </div>
        
        </div>
      </div>
      <div className="cards-container">
          <button className='greenButton'>Ver todos los productos</button>
      </div>

      <div>
      <h1 className='genericTtitle'>SERVICIOS</h1>
      <p className='genericSubtitle'>Uno de nuestros pilares es servir, te presentamos nuestro listado de servicios</p>
      <hr class="gradient"/>
    </div>

      <div className='acordionContainer'>
      <ImageAccordion imagen="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/Previcionexequial.jpg" texto="Previsión exequial" />
      <ImageAccordion imagen="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/Servicios-funerarios.jpg" texto="Servicio funerario" />
      <ImageAccordion imagen="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/06/paraiso4-scaled.jpg" texto="Soluciones integrales" />
      <ImageAccordion imagen="https://elparaisoparquecementerio.com.co/wp-content/uploads/2023/03/cremacion.jpg" texto="Servicio de cremación" />
      </div>
      <div className="cards-container">
          <button className='greenButton'>Ver todos los productos</button>
      </div>

      <div>
      <h1 className='genericTtitle'>EVENTOS Y MISAS</h1>
      <p className='genericSubtitle'>Puedes consultar nuestros eventos y misas especiales</p>
      <hr class="gradient"/>
      </div>

      <div>
        <h2></h2>
        <img src="" alt="" />
      </div>

      <div className='calendar-container'>
      <CalendarGeneral></CalendarGeneral>
      </div>

      <Obituarios></Obituarios>
      <Misas></Misas>
      <QuienesSomos></QuienesSomos>

    
    </Fragment>
  );
};

export default Welcome;
