// lo relacionado con la autenticacion Login y Logout
const express = require('express');
const { login } = require('../controllers/auth.controller.js');
const { authValidation } = require('../util/middlewares/authValidation.js');
const router = express.Router();

router.post('/login', login);
router.post('/authVerification', authValidation, (req, res) => {
    res.status(200).json({
        ok: true,
    });
});
//router.get();
module.exports = router;