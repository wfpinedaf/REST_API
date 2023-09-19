const arma = require('../models/arma')

exports.crearArma = async (req, res) => {
let buscador = arma.find({nombre:req.body.NombreArma}).exec()
if (buscador != null) {
    res.send("Ya existe el objeto, por ende no se puede crear de nuevo")
    return
} else {
    try {
        let ListaArmas 
        ListaArmas = new arma(req.body)
        await ListaArmas.save()
        res.send(ListaArmas)
    } catch (error) {
        console.log(error)
        res.status(502).send("No se pudo crar el arma, revisa el error")
    }
    }
}

exports.obtenerArma = async (req, res) =>{
    try {
        const DataArma = await arma.find()
        res.json(DataArma)
    } catch (error) {
        console.log(error)
        res.status(502).send("No se pudo obtener el arma, revisa el error")
    }

}
exports.actualizarArma = (req, res) =>{
    res.send('Actualizando armas')
}

exports.eliminarArma = (req, res) =>{
    res.send('Eliminando armas')
}
