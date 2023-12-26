import React from 'react';
import './ServiciosDia.css';

const ServiciosDia = () => {
    return (
    <div>
        <h1 className='genericTtitle'>MISAS</h1>
            <div className="servicios-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Hora</th>
                            <th>Ubicación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HOMILIA DE ENTREGA DE CENIZAS</td>
                            <td>10:00 AM</td>
                            <td>Capilla 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
        
    );
};

export default ServiciosDia;
