const Formulas = require('../models/formulas.models');
const uploadFromBuffer = require("../util/middlewares/files/uploadFiles");


const registrarFormula = async (req, res) => {

    try {
    const formula= req.body; 
    console.log("MArca 1")
console.log(req.user._id);
formula.paciente=req.user._id;
console.log("Antes del try carch") 
console.log(formula)
        await Formulas.create(formula);
        res.status(200).json({
            message: 'Formula Creeade',
            ok:true
        });
     
    } catch (error) {
        console.log("Cartch  Formula")
    res.status(400).json({
        err:error    
    })
        
    }
       
}

module.exports = { registrarFormula };