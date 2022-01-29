const express = require('express');
const router = express.Router();

const  {crearUsuario,eliminarusuario,obtenerusuarios,obtenerunusuario,actualizarusuario} = require('../controllers/usuario.controller')


router.post('/crearusuario', crearUsuario)
router.get('/obtenerusuarios', obtenerusuarios)
router.get('/obtenerunusuario/:id_person',obtenerunusuario)
router.put('/actualizarusuario/:id_person',actualizarusuario)
router.delete('/borrarusuario/:id_person',eliminarusuario)

module.exports = router;