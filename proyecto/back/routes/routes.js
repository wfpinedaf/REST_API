const express = require('express')
const router = express.Router()
const personajesController = require('../controllers/personajes.controller')
const ArmasController = require('../controllers/armas.controller')

router.get('/obtener-Personaje', personajesController.obtenerTodosLosPesonajes)
router.get('/buscar-Personaje/:id', personajesController.obtenerUnSoloPesonajes)
router.post('/CrearPersonaje', personajesController.crearPersonaje)
router.put('/actualiza-Personaje/:id', personajesController.actualizarPesonajes)
router.delete('/eliminar-personaje/:id', personajesController.eliminarPesonaje)


router.get('/obtenerArma', ArmasController.obtenerArma)
router.post('/CrearArma', ArmasController.crearArma)
router.put('/', ArmasController.actualizarArma)
router.delete('/eliminarArma', ArmasController.eliminarArma)


// El this se podria tomar como el module de express
module.exports = router

