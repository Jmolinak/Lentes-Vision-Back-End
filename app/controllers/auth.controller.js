const Account = require('../models/accounts.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const user = req.body;
    const result = await Account.findOne({ email: user.email });
    

    if (!result) {
       // console.log("Marca0");
        res.status(404).json({
            error: "usuario no Registrado",
        });
    } else {


        //console.log("Marca1");
        const isCorrectPassword = await bcrypt.compare(user.password, result.password);
        //console.log("Marca2");
        if (isCorrectPassword && result.isActive) {

            console.log("Marca3");
           
            const token = jwt.sign(
                {   _id:result._id,
                    fullName: result.fullName,
                    Rolle: result.role,
                    Email: result.email,
                },  process.env.SECRET_KEY,
            );
            res.status(200).json({
                ok:true,
                token,
                Rolle:result.role,
            })

        } else {
           // console.log("Marca4")
            res.status(403).json({
                message: "Usuario o contraseña incorrecta",
            });
        }

    }

}

module.exports = { login };