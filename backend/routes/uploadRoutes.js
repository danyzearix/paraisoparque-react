import express from 'express';
import multer from 'multer';
import uploadFile from '../controllers/uploadController.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();
const upload = multer({ dest: './public/uploads/' }); // Configura multer según tus necesidades

router.post('/upload', upload.single('file'), uploadFile);

export default router;
