const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formulasSchema = new Schema({
    axisLeft: {
        type: String,
        required: false
    },
    axisRight: {
        type: String,
        required: false
    },
    cylLeft: {
        type: String,
        required: false
    },
    cylRight: {
        type: String,
        required: false
    },
    dnpLeft: {
        type: String,
        required: false
    },
    dnpRight: {
        type: String,
        required: false
    },
    esfLeft: {
        type: String,
        required: false
    },
    esfRight: {
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
