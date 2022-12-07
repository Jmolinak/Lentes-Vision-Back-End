const pqrs = require('../models/pqrs.models');

const registrarPQRS = async (req, res) => {
    try {
        console.log("En el regidtro de PQRS")
        const solicitud = req.body;
        let date_ob = new Date();
        solicitud.fecha = date_ob.getDate();
        await pqrs.create(solicitud);
        return res.status(200).json({
            ok: true,

        })
    } catch (error) {
        res.status(400).json({
            err: error
        })
    }
}
module.exports = {
    registrarPQRS
};