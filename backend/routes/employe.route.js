let mongoose = require('mongoose'),
express = require('express'),

router = express.Router();

// Employe Model
let employeSchema = require('../models/employe');

// CREATE Student
router.route('/create-employe').post((req, res, next) => {

    employeSchema.create(req.body, (error, data) => {

    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })

});



// Update HeureSup
router.route('/saveheuresup').put((req, res, next) => {


  const filter = { matricule: req.body.matricule };
  const updateHeure = { heureS: req.body.heureS };


  employeSchema.findOneAndUpdate( filter, updateHeure, (error, data) => {

    if (error) {
      return next(error)
    } else {

      res.json(data)
      res.send(console.log(data));
      
    }
  })

});

// READ Employes
router.route('/allemployes').get((req, res) => {

  employeSchema.find((error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }

  })
});

// Delete Employe 
router.route('/delete-employe').delete((req, res, next) => {

  const id = req.query.id;

  employeSchema.findByIdAndRemove( { _id: id }, (error, data) => {

    if (error) {

      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({
        message: 'Echec Delete'
      });

    } else {

      res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          message: 'Succes Delete'
        });
    }
  })

});

// Get Single Employe
router.route('/edit-employe').get((req, res) => {

  const id = req.query.id;

  employeSchema.findById({ _id : id }, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
      //res.redirect('http://localhost:3000/employes');
    }

  })

});

// Update Employe
router.route('/update-employe').put((req, res, next) => {


  const filter = { matricule: req.body.matricule };
  const updateemploye = { matricule: req.body.matricule, nom: req.body.nom, prenom: req.body.prenom, salaireB: req.body.salaireB};


  employeSchema.findOneAndUpdate( filter, updateemploye, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
      //res.redirect('http://localhost:3000/employes');
      res.send(console.log(data));

      //res.redirect('http://localhost:3000/employes');
    }
  })

});

router.route('/Getbymatricule').get((req, res) => {

  const matricule = req.query.matricule;

  employeSchema.findOne({ matricule : matricule }, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }

  })

});

module.exports = router;