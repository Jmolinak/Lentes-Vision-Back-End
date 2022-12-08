const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactenosSchema= new Schema({
Nombre:{
    type:String,
    required:false//debe ser true
},
Apellido:{
    type:String,
    required:false//obligatorio
},
Correo:{
    type:String,
    required:false// si es obligatorio
},
Telefono:{
    type:Number,
    required:false//es requerido
},
Comentarios:{
    type:String,
    required:false
}
});

const contactenos= mongoose.model('Contactenos',contactenosSchema);
module.exports=contactenos;