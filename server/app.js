// module dependencies
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var api_presentations = require('./routes/api/api-presentation');
var api_users = require('./routes/api/api-user');
var api_proofs = require('./routes/api/api-proof');

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
                + "@prooflogger-shard-00-00-uumrd.mongodb.net:27017,prooflogger-shard-00-01-uumrd.mongodb.net:27017,prooflogger-shard-00-02-uumrd.mongodb.net:27017/hw7?ssl=true&replicaSet=ProofLogger-shard-0&authSource=admin");

// route handling
app.use("/api/presentations", api_presentations);
app.use("/api/users", api_users);
app.use("/api/proofs", api_proofs);
app.use('/', express.static('../client/dist'));
app.use('/*', express.static('../client/dist'));

// file not found
app.use((req, res, next)=>{
    console.log("FELL PAST WILD CARD");
    res.status(404);
    res.send("Sorry, this file cannot be found");
});

// export express app
module.exports = app;