const mongoose = require('mongoose')
const ArmaSchema = mongoose.Schema({
    // aca debemos poner los datos requeridos en la BD
    NombreArma: {
        type:String,
        require: true
    },
    ValorDaño:{
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

module.exports = mongoose.model('arma', ArmaSchema)
