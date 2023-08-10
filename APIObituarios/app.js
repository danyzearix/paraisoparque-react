const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir solicitudes desde cualquier origen
app.use(cors());

// O permitir solicitudes solo desde el origen específico donde se encuentra tu aplicación React
app.use(cors({ origin: 'http://localhost:5173' }));

// Parsear el cuerpo de las solicitudes a JSON
app.use(bodyParser.json());

// Agregar el middleware de autenticación para verificar si el usuario es administrador
// function isAdmin(req, res, next) {
//     if (req.user && req.user.isAdmin) {
//       next();
//     } else {
//       res.status(403).json({ error: 'Acceso denegado. No eres administrador.' });
//     }
//   }

// URL de conexión a MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://danydev26:i5LrJCVywJZxWbHT@paraisoapp.pjl0nxt.mongodb.net/?retryWrites=true&w=majority';

// Conectar a la base de datos MongoDB Atlas
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión a MongoDB Atlas establecida');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB Atlas:', err);
  });

// Definir el esquema de datos
const datoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        set: (value) => {
          // Aplicar formato a la primera letra de cada palabra en mayúsculas
          return value
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        },
        required: true,
      },
  velacion: String,
  exequias: String,
  hora: String,
  destino_final: String,
  fecha: Date,
});

// Crear el modelo basado en el esquema
const Dato = mongoose.model('Dato', datoSchema);

// Agregar la siguiente ruta GET para obtener todos los datos
app.get('/datos', async (req, res) => {
    try {
      const datos = await Dato.find();
      res.status(200).json(datos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los datos' });
    }
  });

// Ruta protegida para guardar los obituarios
app.post('/admin/obituarios', async (req, res) => {
    try {
      const nuevoDato = new Dato(req.body);
      await nuevoDato.save();
      res.status(201).json(nuevoDato);
    } catch (error) {
      res.status(500).json({ error: 'Error al guardar el obituario' });
    }
  });

// Ruta para guardar un nuevo dato
app.post('/datos', async (req, res) => {
  try {
    const nuevoDato = new Dato(req.body);
    await nuevoDato.save();
    res.status(201).json(nuevoDato);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el dato' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
