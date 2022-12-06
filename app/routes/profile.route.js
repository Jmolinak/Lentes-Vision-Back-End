const express = require('express');
const {updatePhotoProfile,getProfile} = require('../controllers/profile.controler')
const multer = require('multer');
const { authValidation } = require('../util/middlewares/authValidation');
const router = express.Router();
const upload=multer();
router.post('/updatePhotoProfile',authValidation, upload.single('photo'), updatePhotoProfile);
router.get('/getProfile',authValidation,getProfile);

module.exports = router;