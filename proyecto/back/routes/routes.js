const express = require('express')
const router = express.Router()
const ArmasController = require('../controllers/armas.controller')
const UsersController = require('../controllers/usuarios.controller')


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

// El this se podria tomar como el module de express
module.exports = router

