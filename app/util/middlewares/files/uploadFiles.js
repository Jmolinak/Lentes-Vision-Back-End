const cloudinary = require('cloudinary');
let streamifier = require('streamifier');
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env

cloudinary.config({
    secure: true,
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});
let uploadFromBuffer = (file) => {
    console.log(file);
    console.log("Antes de la promesa")
    return new Promise((resolve, reject) => {
        console.log("En la promesa de la promesa")
        let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
            {
                folder: "foo",//ubicacion
            },
            (error, result) => {
                if (result) {
                    console.log("En el resolve ")
                    resolve(result);
                } else {
                    reject(error);
                    console.log(error)
                    console.log("En el error ")
                }
            }
        );
        streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
    });
}
module.exports = uploadFromBuffer