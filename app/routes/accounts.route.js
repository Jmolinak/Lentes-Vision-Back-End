//cuentas
const express = require('express');
const { newAccount, getAccount } = require('../controllers/account.controller.js');
const router = express.Router();


router.post('/newAccount',newAccount);

router.get('/getAccounts', getAccount);

module.exports = router; 