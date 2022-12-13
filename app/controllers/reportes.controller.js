const Formulas = require('../models/formulas.models');
const Account = require('../models/accounts.model.js');
//const formulasCollection = require('../models/formulas.models');
const mongoose = require('mongoose');
const formulasCollection = require('../models/accounts.model');
const PQRS=require('../models/pqrs.models');


const getFormulas = async (req, res) => {
  console.log("En el getr Formula")
  try {

    formulasCollection.aggregate([
      {
        $lookup: {
          from: 'formulas',
          localField: '_id',
          foreignField: 'paciente',
          as: 'formulas'
        }

      },
      {
        $unwind: '$formulas'
      },
      {
        $project: {
          paciente: '$fullName', axisLeft: '$formulas.axisLeft', axisRight: '$formulas.axisRight', cylLeft: '$formulas.cylLeft',
          cylRight: '$formulas.cylRight', dnpLeft: '$formulas.dnpLeft', dnpRight: '$formulas.dnpRight',
          esfLeft: '$formulas.esfLeft', esfRight: '$formulas.esfRight', materialLen: '$formulas.materialLen'


        }
      }
    ], function (error, data) {
      console.log(data)
      return res.json(data)

    });
    console.log('Antes del greates')

    console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡')

  } catch (error) {
    res.status(400).json({
      err: error
    })
  }
}

const getPQRS = async (req, res) => {
try {
  console.log("En el PQRS")
  formulasCollection.aggregate([
    {
      $lookup: {
        from: 'pqrs',
        localField: '_id',
        foreignField: 'paciente',
        as: 'pqrs'
      }
    },  
  {
    $unwind: '$pqrs'
  },
  {
    $project: {
      paciente: '$fullName', Apellido: '$pqrs.Apellido', Direccion: '$pqrs.Direccion',
       Departamento: '$pqrs.Departamento', DocumentoID: '$pqrs.DocumentoID', 
       TipoDocIdent: '$pqrs.TipoDocIdent', Correo: '$pqrs.Correo',
       Telefono: '$pqrs.Telefono', Descripcion: '$pqrs.Descripcion'    }
  }
  ], function (error, data) {
    console.log(data)
    return res.json(data)

  });
} catch (error) {
  
}
}
module.exports = {
  getFormulas,
  getPQRS
};