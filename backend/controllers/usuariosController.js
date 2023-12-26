import Usuarios from "../models/usersSchema.js";

const registrarUsuarios = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        console.log(req.body)
    
        // Verificar si el usuario ya existe
        const existingUser = await Usuarios.findOne({ email });
        if (existingUser) {
          return res.status(400).send('El usuario ya existe');
        }
    
        console.log('Password:', password);
    
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(password, 12);
    
      
        // Crear un nuevo usuario
        const usuario = new Usuario({
          nombre,
          email,
          password: hashedPassword
        });
    
        // Guardar el usuario en la base de datos
        await usuario.save();
    
        res.status(201).send('Usuario registrado con éxito');
      } catch (error) {
        console.error('Error detalle:', error);
        res.status(500).send('Error en el servidor');
      }
    
};

const loginUsuarios = async(req, res) => {
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
};

export {registrarUsuarios, loginUsuarios};