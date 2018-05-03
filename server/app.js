// module dependencies
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var api_presentations = require('./routes/api/api-presentation');
var api_users = require('./routes/api/api-user');
var api_proofs = require('./routes/api/api-proof');
var welcome = require('./routes/welcome');
var users = require('./routes/users');
var proofs = require('./routes/proofs');

// get environment vars
require('dotenv').config();

// create express app
var app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// connect mongoose
mongoose.connect("mongodb://" + process.env.DB_USER 
                + ":" 
                + process.env.DB_PWD
                + "@prooflogger-shard-00-00-uumrd.mongodb.net:27017,prooflogger-shard-00-01-uumrd.mongodb.net:27017,prooflogger-shard-00-02-uumrd.mongodb.net:27017/hw5?ssl=true&replicaSet=ProofLogger-shard-0&authSource=admin");

// set up templates
app.set('views', './views');
app.set('view engine', 'pug');

// route handling
app.use("/api/presentations", api_presentations);
app.use("/api/users", api_users);
app.use("/api/proofs", api_proofs);

// file not found
app.use((req, res, next)=>{
    console.log(req);
    res.status(404);
    res.send("Sorry, this file cannot be found");
});

// export express app
module.exports = app;