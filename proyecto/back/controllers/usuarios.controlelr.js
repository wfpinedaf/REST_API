const { json } = require('express')
const user = require('../models/user')
const user = require('../models/user')

exports.CreateUser = async (req, res) =>{
    try {
        let UsersList
        UsersList = new user(req.body)
        await UsersList.save()
        res.send(UsersList)
    } catch (error) {
        console.log(error)
        res.status(502).send("Unable to create the user, contact the System Admin")
    }
}

exports.GetAllUsers = async (req, res) =>{
    try {
        let UsersData = await user.find() 
        res.json(UsersData)
    } catch (error) {
        console.log(error)
        res.status(502).send("Unable to get the requested data, please reach the system admin")
    }
}

exports.GetSingleUser =async(req, res) => {
    try {
        
    } catch (let) {
        
    }
}

// router.get('/get-user/:id', UsersController.GetSingleUser)
// router.put('/update-single-user/:id', UsersController.UpdateSingleUser)
// router.delete('/delete-single-user/:id', UsersController.DeleteSingleUser)


exports.obtenerUnSoloPesonajes = async(req, res)=>{
    try{
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const personajeData = await Personaje.findById(req.params.id)
        if (!personajeData) {
            res.status(404).send("Personaje no encontrado") 
        } else{
            res.json(personajeData)
        }
        }
        else{
            res.status(418).send('El id no existe o no es correcto')
        }        
    } catch(error){
        console.log(error)
        res.status(502).send('Ups... Error, comuniquese con el ADMIN')
    }
}

exports.actualizarPesonajes = async(req, res) =>{
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const personajeData =await Personaje.findById(req.params.id)
            if (!personajeData) {
                res.status(404).send('Personaje no encontrado')
            } else{
                const {nombre, edad, urlImagen} = req.body
                personajeData.nombre= nombre
                personajeData.edad= edad
                personajeData.urlImagen= urlImagen
                let documentoActializado = await personaje.findOneAndUpdate({_id: req.params.id}, personajeData)
                res.json(documentoActializado)
            }
            
        } else{
            res.status(418).send('El Id proporcionado no existe o no es correcto')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Comuniquese con el Administrador')
    }
}

exports.eliminarPesonaje = async(req, res) =>{
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const personajeData = await Personaje.findById(req.params.id)
            if (!personajeData) {
            res.status(404).send('El id no se encuentra')
            return                
            }
           await Personaje.findOneAndRemove({_id: req.params.id})     
           res.send("Personaje Eliminado") }
           else{
            res.status(418).send('El id seleccionado no existe')
           }
    } catch (error) {
        console.log(error)
        res.status(502).send('Comuniquese con el Administrador')        
    }
}
