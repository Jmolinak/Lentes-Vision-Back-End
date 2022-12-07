const Formulas = require('../models/formulas.models');
const Lente = require('../models/lentesMat.model');


const registrarFormula = async (req, res) => {

    try {
        const formula = req.body;
        const lentema = formula.materialLen;
        formula.paciente = req.user._id;
        await Formulas.create(formula);
        const result = await Lente.findOne({ Nombre: lentema });
        if (!result) {
            return res.status(400).json({
                ok: false,
                data: "El Material elegido no esta registrado"
            })
        } else {
            return res.status(200).json({
                ok: true,
                data: result
            })
        }
    } catch (error) {
        res.status(400).json({
            err: error
        })

    }

}

module.exports = { registrarFormula };