const express = require('express');
const mongoose = require('mongoose');

//Parser Data
const bodyParser = require('body-parser')


//Amorçage
const cors = require('cors');

// Connexion a la DB

require('dotenv').config();
const db = process.env.mongoURI;
 
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log('Connected BD'))
.catch(err => console.log(err));


// INSERTION ROUTER
const employeRoute = require('../backend/routes/employe.route')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//ENDPOINT
app.use(cors({
    origin: 'http://localhost:3000'
}));

//ENDPOINT WITH ROUTER
app.use('/employe', employeRoute)

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on ` + port )
})

