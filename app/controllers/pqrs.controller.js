const PQRS=require('../models/pqrs.models');

const registrarPQRS= async(req,res)=> {
    try {
        const pqrs = req.body;
        pqrs.paciente = req.user._id;
        await PQRS.create(pqrs);
        return res.status(200).json({
            ok: true,
            data: "PQRS Registrada con Exito"
        })
    } catch (error) {
        
    }
}
module.exports = { registrarPQRS };