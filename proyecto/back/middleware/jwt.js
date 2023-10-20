const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config.env' })

exports.verificarToken = (req, res, next) => {
    let token = req.headers.authorization
    console.log(token)
    if (!token) {
        return res.status(400).json({ msg: "token no encontrado" })
    }

    token = token.split(' ')
    jwt.verify(token[1], process.env.SECRET_KEY_JWT, (error, decoded) => {
        if (error) {
            return res.status(403).json({ msg: "token invalido" })
        }
        req.useerData = decoded
        next()
    })
}
