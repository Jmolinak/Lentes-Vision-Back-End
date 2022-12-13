const express = require('express');
const {getFormulas,getPQRS} = require('../controllers/reportes.controller');
const router = express.Router();


router.post('/getFormulas', getFormulas);
router.post('/getPQRS', getPQRS);
module.exports = router; 
