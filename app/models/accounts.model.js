const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        required: true,
        default: 'User'
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    {
        versionKey: false ,
        timestamps : true
    }
   );

const accounts = mongoose.model('usuario', accountSchema);
module.exports = accounts;


