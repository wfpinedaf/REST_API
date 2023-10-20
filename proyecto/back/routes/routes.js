const express = require('express')
const router = express.Router()
const ArmasController = require('../controllers/armas.controller')
const UsersController = require('../controllers/usuarios.controller')
const SessionController = require('../controllers/sesion.controller')
const VideojuegoController = require('../controllers/videojuego.controller')
const mdJWT = require('../middleware/jwt')


router.get('/obtenerVideojuegos', VideojuegoController.GetAllVideojuegos)
router.get('/obtenerVideojuego/:id', VideojuegoController.GetSingleVideojuego)
router.post('/CrearVideojuego', VideojuegoController.CreateVideojuego)
router.put('/actaulizar-videojuego/:id', VideojuegoController.UpdateSingleVideojuego)
router.delete('/eliminarVideojuego/:id', VideojuegoController.DeleteSingleVideojuego)


router.get('/obtenerArma', ArmasController.obtenerArma)
router.post('/CrearArma', ArmasController.crearArma)
router.put('/actaulizar-arma/:id', ArmasController.actualizarArma)
router.delete('/eliminarArma/:d', ArmasController.eliminarArma)

// Router para Angular Usuarios

router.get('/get-users', UsersController.GetAllUsers)
router.get('/get-user/:id', UsersController.GetSingleUser)
router.post('/create-user', UsersController.CreateUser)
router.put('/update-single-user/:id', UsersController.UpdateSingleUser)
router.delete('/delete-single-user/:id', UsersController.DeleteSingleUser)


router.post('/ingreso', SessionController.generarToken)
router.post('/infotoken', SessionController.desencriptarToken)


module.exports = router

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGI5Yjg3MTkyZmI3MTdmNWY3YmZiNSIsIkZpcnN0X05hbWUiOiJXaWxsaWFtIiwiTGFzdF9OYW1lIjoiUGluZWRhIiwiaWF0IjoxNjk3NjkwNzIxLCJleHAiOjE2OTc2OTQzMjF9.3fobwKonkmKVcOBIALrDDPQTGn-jmSBFV2W7iffmRiw"
