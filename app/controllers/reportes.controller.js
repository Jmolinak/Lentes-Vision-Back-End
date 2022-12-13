const Formulas = require('../models/formulas.models');
const Account = require('../models/accounts.model.js');
//const formulasCollection = require('../models/formulas.models');
const mongoose = require('mongoose');
const formulasCollection = require('../models/accounts.model');


const getFormulas = async (req, res) => {
console.log("En el getr Formula")
  try {

    formulasCollection.aggregate([
      {
        $lookup:{
          from:'formulas',
          localField:'_id',
          foreignField:'paciente',
          as: 'formulas'
        }
    
      },
   {
    $unwind:'$formulas'
   },
   {
    $project:{
      _id :'$formulas._id',ojoIZ:'$formulas.ojoIZ', paciente:'$fullName'
    }
   }
    ],function(error,data){
      console.log(data)
      return res.json(data)
      
    });
    console.log('Antes del greates')

console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡')

/*
    const result = await Formulas.find({}).populate({ path: 'paciente', select: 'fullName' });
    if (!result) {
      return result;
    } else {
     // console.log(result)
      return res.json(
        result
      )
    }*/
  } catch (error) {
    res.status(400).json({
      err: error
    })
  }
}
module.exports = {
  getFormulas
};