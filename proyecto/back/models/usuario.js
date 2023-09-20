const mongoose = require('mongoose')
const UsersSchema = mongoose.Schema({
    // aca debemos poner los datos requeridos en la BD
    First_Name: {
        type:String,
        require: true
    },
    Last_Name: {
        type:String,
        require: true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    date_created:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', UsersSchema)
