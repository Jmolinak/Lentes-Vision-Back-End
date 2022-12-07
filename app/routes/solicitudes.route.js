const express =require('express');
const {registrarPQRS}=require('../controllers/solicitudes.controller')
const router = express.Router();
router.post('/pqrs',registrarPQRS);
module.exports=router;