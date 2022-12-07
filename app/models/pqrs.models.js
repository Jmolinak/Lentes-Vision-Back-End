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
},
Departamento:{
    type:String,
    required:true
},
DocumentoID:{
    type:String,
    required:true
},
TipoDocIdent:{
    type: String,
    required:true
},
Correo:{
    type:String,
    required:true
},
Telefono:{
    type:String,
    required:false
},
Descripcion:{
    type:String,
    required:true
}
});

const pqrs = mongoose.model('pqrs', accountSchema);
module.exports = pqrs;


