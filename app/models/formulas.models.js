const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formulasSchema = new Schema({
    ojoIZ: {
        type: String,
        required: false
    },
    ojoDER: {
        type: String,
        required: false
    },
    cilindroizq: {
        type: String,
        required: false
    },
    cilindroder: {
        type: String,
        required: false
    },
    ejeizq: {
        type: String,
        required: false
    },
    ejeder: {
        type: String,
        required: false
    },
    DNPDEr: {
        type: String,
        required: false
    },
    DNPiz: {
        type: String,
        required: false
    },
    esferaDer:{
        type: String,
        required: false
    },
    esferaIzq:{
        type: String,
        required: false
    },
    materialLen:{
        type: String,
        required: false
    },
    paciente: [{
        type: Schema.ObjectId,
        ref: "usuario",
        required: true,

    }],
    Lente: {
        type: Schema.ObjectId,
        ref: "Lentes",
        required: false,

    },
    estado:{
        type:String,
        
    }
},

    {
        versionKey: false,
        timestamps: true
    }
);

const formulas = mongoose.model('formula', formulasSchema);
module.exports = formulas;
