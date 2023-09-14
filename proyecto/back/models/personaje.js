const mongoose = require('mongoose')
const PersonajeSchema = mongoose.Schema({
    // aca debemos poner los datos requeridos en la BD
    nombre: {
        type:String,
        require: true
    },
    edad:{
        type:Number,
        require:true
    },
    urlImagen:{
        type:String,
        require:true
    },
    date_created:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('personaje', PersonajeSchema)
