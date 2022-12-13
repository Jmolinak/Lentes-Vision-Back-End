const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pqrsSchema = new Schema({
Nombre:{
    type:String,
    required:false
},
Apellido:{
    type:String,
    required:false
},
Direccion:{
    type:String,
    required:false
},
Departamento:{
    type:String,
    required:false
},
DocumentoID:{
    type:String,
    required:false
},
TipoDocIdent:{
    type: String,
    required:false
},
Correo:{
    type:String,
    required:false
},
Telefono:{
    type:String,
    required:false
},
Descripcion:{
    type:String,
    required:false
},
Fecha:{
    type:Date
},
paciente: [{
    type: Schema.ObjectId,
    ref: "usuario",
    required: false,

}]
});

const pqrs = mongoose.model('pqrs', pqrsSchema);
module.exports = pqrs;


