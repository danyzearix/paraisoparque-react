import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import connectDB from './config/mongoConfig.js';
import obituariosRoutes from "./routes/obituariosRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"

//Middlewares
const app = express();
const PORT = process.env.PORT || 3000;

//Llamar funcion que conecta a la DB 
connectDB();

// Permitir solicitudes desde cualquier origen
app.use(cors());
// O permitir solicitudes solo desde el origen específico donde se encuentra tu aplicación React
app.use(cors({ origin: 'https://paraisoparque-react-dev-arte.3.us-1.fl0.io'}));
// Parsear el cuerpo de las solicitudes a JSON
app.use(bodyParser.json());

//Rutas 
app.use("/api/obituarios", obituariosRoutes)
app.use("/api", uploadRoutes);

//Ruta de registro
app.post('/register', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    console.log(req.body)

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('El usuario ya existe');
    }

    console.log('Password:', password);

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

  
    // Crear un nuevo usuario
    const user = new User({
      nombre,
      email,
      password: hashedPassword
    });

    // Guardar el usuario en la base de datos
    await user.save();

    res.status(201).send('Usuario registrado con éxito');
  } catch (error) {
    console.error('Error detalle:', error);
    res.status(500).send('Error en el servidor');
  }
});

//Ruta de login 
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Credenciales no válidas');
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Credenciales no válidas');
    }

    // Crear y enviar el token
    const token = jwt.sign({ _id: user._id }, 'tu_secreto', { expiresIn: '1h' });
    res.header('auth-token', token).send(token);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
});

//Middleware para verificar token 
function verifyToken(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Acceso denegado');

  try {
    const verified = jwt.verify(token, 'tu_secreto');
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Token inválido');
  }
}

app.use('/FormularioObituarios', verifyToken);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
