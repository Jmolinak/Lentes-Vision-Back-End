const express =require('express');
const { registrarFormula } = require('../controllers/formulas.controller');
const { authValidation } = require('../util/middlewares/authValidation');


 const router = express.Router();

router.post('/RegistrarFormula',authValidation,registrarFormula);

module.exports=router;