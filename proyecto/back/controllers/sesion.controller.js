require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const UserMod = require('../models/usuario')

exports.generarToken = async (req, res) => {
    const { Email, Password } = req.body

    const user = await UserMod.findOne({ Email: Email })
    if (!user) {
        return res.status(401).json({ msg: "The email is invalid" })
    }
    if (user.Password !== Password) {
        console.log(user.Password)
        return res.status(401).json({ msg: "The Email and password are invalid" })
    }
    // El payload es la informacion que vamosa almacenar en el token 
    const payload = {
        id: user._id,
        First_Name: user.First_Name,
        Last_Name: user.Last_Name
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '1h' })
    return res.status(202).json({ token: token })
}

exports.desencriptarToken = (req, res) => {
    const token = req.body.tokenUser;
    jwt.verify(token, process.env.SECRET_KEY_JWT, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'Token inválido' })
        }
        res.status(200).json({ decodedPayload: decoded })
    })
}
