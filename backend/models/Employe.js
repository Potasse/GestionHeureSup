const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let employeSchema = new Schema({

  matricule: {
    type: String
  },
  nom: {
    type: String
  },
  prenom: {
    type: String
  },
  salaireB: {
    type: String
  }
}, {
    collection: 'employes'
  })
module.exports = mongoose.model('Employe', employeSchema)