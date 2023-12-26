import XLSX from 'xlsx';
import Obituarios from '../models/obituariosSchema.js';

const uploadFile = async (req, res) => {
  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const results = XLSX.utils.sheet_to_json(worksheet);

    for (const data of results) {
        console.log(data);

        // Convertir la hora de decimal a formato HH:MM
        const horas = Math.floor(data.hora * 24);
        const minutos = Math.floor((data.hora * 24 * 60) % 60);
        const horaFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
  
        const formattedData = {
          nombre: data.nombre,
          velacion: data.velacion,
          exequias: data.exequias,
          hora: horaFormateada,
          destino_final: data.destino_final,
          fecha: new Date(data.fecha)
        };

      try {
        const nuevoObituario = new Obituarios(formattedData);
        // Guardar el obituario en la base de datos
        await nuevoObituario.save();
      } catch (error) {
        console.error('Error al guardar:', error);
      }
    }

    res.send('Archivo procesado y datos guardados');
  } catch (error) {
    console.error('Error al procesar el archivo:', error);
    res.status(500).send('Error al procesar el archivo');
  }
};

export default uploadFile;
