const express = require('express');
const {getFormulas} = require('../controllers/reportes.controller');
const router = express.Router();


router.post('/getFormulas', getFormulas);
module.exports = router; 
