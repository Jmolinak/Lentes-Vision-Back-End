const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    idAccount : {
        type: Schema.ObjectId,
        ref:"usuarios",
        required:true
    },
    phone:{
        type: String,
    },
    location: {
        type:String,
    },
    photoProfile: {
        type: String,
    
    },
})

const profile = mongoose.model('profile', profileSchema);
module.exports = profile;