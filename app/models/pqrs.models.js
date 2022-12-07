const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pqrsSchema = new Schema({
Nombre:{
    type:String,
    required:true
},
Apellido:{
    type:String,
    required:true
},
Direccion:{
    type:String,
    required:true
}
});

const pqrs = mongoose.model('pqrs', accountSchema);
module.exports = pqrs;


