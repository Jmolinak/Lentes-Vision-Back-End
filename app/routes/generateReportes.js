const express = require('express');
const {getFormulas,getPQRS,getContactenos} = require('../controllers/reportes.controller');
const router = express.Router();


router.post('/getFormulas', getFormulas);
router.post('/getPQRS', getPQRS);
router.post('/getContactenos', getContactenos);
module.exports = router; 
