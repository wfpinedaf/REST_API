const { json } = require('express')
const Videojuegos_Model = require('../models/videojuegos_model')

exports.CreateVideojuego = async (req, res) => {
    try {
        let VideojuegosList
        VideojuegosList = new Videojuegos_Model(req.body)
        await VideojuegosList.save()
        res.send(VideojuegosList)
    } catch (error) {
        console.log(error)
        res.status(502).send("Unable to create the Videojuego, contact the System Admin")
    }
}

exports.GetAllVideojuegos = async (req, res) => {
    try {
        let VideojuegosData = await Videojuegos_Model.find()
        res.json(VideojuegosData)
    } catch (error) {
        console.log(error)
        res.status(502).send("Unable to get the requested data, please reach the system admin")
    }
}

exports.GetSingleVideojuego = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const VideojuegoData = await Videojuegos_Model.findById(req.params.id)
            if (!VideojuegoData) {
                res.status(404).send("Videojuego not found")

            } else {
                res.json(VideojuegoData)
            }

        }
        else {
            res.status(418).send("Videojuego not found.")
        }
    } catch (let) {

    }
}


exports.UpdateSingleVideojuego = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const VideojuegoData = await Videojuegos_Model.findById(req.params.id)
            if (!VideojuegoData) {
                res.status(404).send('Videojuego not found')
            } else {
                const { NombreJuego, Plataforma, Descripcion, urlImagen } = req.body
                VideojuegoData.NombreJuego = NombreJuego
                VideojuegoData.Plataforma = Plataforma
                VideojuegoData.Descripcion = Descripcion
                VideojuegoData.urlImagen = urlImagen
                let updatedDoc = await Videojuegos_Model.findOneAndUpdate({ _id: req.params.id }, VideojuegoData)
                res.json(updatedDoc)
            }

        } else {
            res.status(418).send("Invalid Id")
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Contact the system Administrator')
    }
}


exports.DeleteSingleVideojuego = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const VideojuegoData = await Videojuegos_Model.findById(req.params.id)
            if (!VideojuegoData) {
                res.status(404).send('Id not found')
                return
            }
            await Videojuegos_Model.findOneAndRemove({ _id: req.params.id })
            res.send("Videojuego deleted!")
        }
        else {
            res.status(418).send("Invalid Id")
        }
    } catch (error) {
        console.log(error)
        res.status(502).send("Reach the system Admin")
    }
}
