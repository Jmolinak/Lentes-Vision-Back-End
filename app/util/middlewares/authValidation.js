const jwt = require('jsonwebtoken')
const config = process.env
const authValidation = (req, res, next) => {
   //console.log(req.body);
   // console.log("En el Header")
   // console.log(req.header("token"));
    const token = req.body.token || req.header("token");
    if (!token) {

        //console.log('en el back de validacion')
        return res.status(403).send('token is required for autentication');
    }

    try {
        const decode = jwt.verify(token, config.SECRET_KEY);
        req.user =decode;
    } catch (err) {
        console.log("Error de autenticacion")
        return res.status(401).send("Invalid Token");
    }

    return next();

}
module.exports = {
    authValidation
}