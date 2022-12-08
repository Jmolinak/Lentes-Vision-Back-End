const express =require('express');
const { registrarContactenos } = require('../controllers/contactenos.controller');
const router = express.Router();
router.post('/contactenos',registrarContactenos);
module.exports=router
