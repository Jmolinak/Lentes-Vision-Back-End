//se hacen todas las consultas a mongo

const uploadFromBuffer = require("../util/middlewares/files/uploadFiles");
const profile = require('../models/profiles.model');


const updatePhotoProfile = async (req, res) => {
    try {
        console.log("En el update de la foto de perfil");
        //console.log(req.file);

        const resultUploadPhoto = await uploadFromBuffer(req.file);
        if (!resultUploadPhoto) {
            return res.status(400).json({
                ok: false,
                message: 'No se pudo Obtener URL de la Foto',
            });

        }
        console.log("En el uploafresult photo")
        //console.log(resultUploadPhoto);
        const photoUpdate = await profile.findOneAndUpdate({ idAccount: req.user._id }, { photoProfile: resultUploadPhoto.url, });
        //console.log(photoUpdate);

        if (!photoUpdate) {
            //console.log("Creando la photo")
            console.log(req.user._id);
            await profile.create({
                idAccount: req.user._id,
                photoProfile: resultUploadPhoto.url,
            });
        }

        res.status(200).json({
            ok: true,
        })
        //console.log(req.user._id);
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error
        })
    }
};

const getProfile = async (req, res) => {
    console.log("En el perfil")
    try{
        
        const profil = await profile.findOne({ idAccount: req.user._id })
    if (!profil) {
       
        await profile.create({
            idAccount: req.user._id,
            photoProfile: 'https://res.cloudinary.com/det18fdki/image/upload/v1670015909/foo/icono_yophog.png',
        });
        console.log('Creando Perfil '+profile)

    }
    res.status(200).json({
        ok: true,
        data: profil
    });
    console.log(profil)
}catch(error){
    res.status(400).json({
        ok:false,
        message:error
    })
}

};


const getProfileimg = async (req, res) => {
    console.log("En el perfil")
    try{
        
        const profil = await profile.findOne({ idAccount: req.user._id })
    if (!profil) {
       
        await profile.create({
            idAccount: req.user._id,
            photoProfile: 'https://res.cloudinary.com/det18fdki/image/upload/v1670015909/foo/icono_yophog.png',
        });
        console.log('Creando Perfil '+profile)

    }
    res.status(200).json({
        ok: true,
        data: profil
    });
    console.log(profil)
}catch(error){
    res.status(400).json({
        ok:false,
        message:error
    })
}

};


module.exports = {updatePhotoProfile,getProfile};