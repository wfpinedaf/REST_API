const mongoose = require('mongoose')
const Videojuegos_Model = mongoose.Schema({
    // aca debemos poner los datos requeridos en la BD
    NombreJuego: {
        type: String,
        require: true
    },
    Plataforma: {
        type: String,
        require: true
    },
    Descripcion: {
        type: String,
        require: true
    },
    urlImagen: {
        type: String,
        require: true
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('videojuego', Videojuegos_Model)
