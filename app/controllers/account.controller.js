
const Account = require('../models/accounts.model.js');
const bcrypt = require('bcrypt');
const { json } = require('express');
const saltRounds = 10;

const getAccount = async (req, res) => {
    /*try {
        await Account.create(req.body);
        res.status(200).json({
            message: 'User Creeade'
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
*/


    console.log("accounts/ api works");
    res.send("accounts/ api works");
};

const newAccount = async (req, res) => {
    try {
        const user = req.body;
        const passwordHash = await bcrypt.hash(user.password, saltRounds);
        

        if (passwordHash) {
            user.password = passwordHash;
        }
        await Account.create(user);
        res.status(200).json({
            message: 'User Creeade'
        });

    } catch (error) {

        if (error.code = 11000) {
            res.status(400).json({
                err: error + " Usuario Ya Existe"
            })
        } else {
            res.status(400).json({
                messageerr: error
            })

        }
    }

};

module.exports = {
    newAccount,
    getAccount,
}