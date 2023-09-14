const mongoose = require('mongoose')
require('dotenv').config({ path: 'config.env'})

const conectarDB = async() => {
try {
    mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("base de datos conectada")
} catch (error) {
    console.log(error)
    process.exit(1)
}
}

module.exports= conectarDB
