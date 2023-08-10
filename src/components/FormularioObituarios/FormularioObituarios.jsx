import React, { useState } from 'react';
import axios from 'axios';
import "./FormularioObituarios.css"

const FormularioObituarios = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    velacion: '',
    exequias: '',
    hora: '',
    fecha: '',
    destino_final: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hacer la solicitud POST a la ruta protegida en la API
    axios.post('http://localhost:3000/admin/obituarios', formData)
      .then(response => {
        console.log('Obituario guardado:', response.data);
        // Restablecer el formulario después de guardar exitosamente
        setFormData({
          nombre: '',
          velacion: '',
          exequias: '',
          hora: '',
          fecha: '',
          destino_final: '',
        });
      })
      .catch(error => {
        console.error('Error al guardar el obituario:', error);
      });
  };

  return (
    <div className='formContainer'>
      <h2 className="text-center">OBITUARIOS</h2>
      <form id="funeraria-form" className="mt-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombres">Nombre completo:</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lugarVelacion">Lugar de Velación:</label>
          <select className="form-control" id="velacion" name="velacion" value={formData.velacion} onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="Capillas de la fé">Capillas de la fé</option>
            <option value="Los Olivos Sur">Los Olivos Sur</option>
            <option value="Los Olivos Chapinero">Los Olivos Chapinero</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exequias">Exequias:</label>
          <input type="text" className="form-control" id="exequias" name="exequias" value={formData.exequias} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <input type="time" className="form-control" id="hora" name="hora" value={formData.hora} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" className="form-control" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="destinoFinal">Destino Final:</label>
          <select className="form-control" id="destino_final" name="destino_final" value={formData.destino_final} onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="Inhumación en lote">Inhumación en lote</option>
            <option value="Cremación">Cremación</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success mt-5 mb-5">Guardar</button>
      </form>
    </div>
  );
};

export default FormularioObituarios;

