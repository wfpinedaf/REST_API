const { json } = require('express')
const Videojuegos = require('../models/personaje')


exports.crearPersonaje = async (req, res) => {
    // console.log(req.body)
    try {
        let ListaPersonajes 
        ListaPersonajes = new Personaje(req.body)
        await ListaPersonajes.save()
        res.send(ListaPersonajes)
    } catch (error) {
        console.log(error)
        res.status(502).send("Not found, please check it with the System Admin")
    }

}
exports.obtenerTodosLosPesonajes = async (req, res) =>{
    try {
        const DataPersonaje = await Personaje.find()
        res.json(DataPersonaje)
    } catch (error) {
        console.log(error)
        res.status(502).send("averiado prrito")
    }
}

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
