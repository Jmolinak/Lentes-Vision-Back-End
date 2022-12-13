const express =require('express');
const { registrarPQRS } = require('../controllers/pqrs.controller');
const { authValidation } = require('../util/middlewares/authValidation');


 const router = express.Router();

router.post('/PQRS',authValidation,registrarPQRS);

module.exports=router;