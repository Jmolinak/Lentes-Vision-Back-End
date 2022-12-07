const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lentesMatSchema = new Schema({
    Nombre: {
        type: String,
        required: false
    },
    Valor: {
        type: String,
        required: false
    },
},
   {
    versionKey: false ,
    timestamps : true
});

const Lente = mongoose.model('Lentes', lentesMatSchema);
module.exports = Lente;