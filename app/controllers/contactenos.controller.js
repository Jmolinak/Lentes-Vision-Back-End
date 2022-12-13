const contactenos=require('../models/contactenos.models');

const registrarContactenos = async(req,res)=>{
    try {
        const conta= req.body;
        console.log(conta);
        await contactenos.create(conta);
        return res.status(200).json({
            ok:true,
            message:'En 5 días hábiles, nos comunicaremos contigo'
        })

    } catch (error) {
       res.status(400).json({
        ok:false,
        error:error
       }) 
    }
}
module.exports={
    registrarContactenos
}