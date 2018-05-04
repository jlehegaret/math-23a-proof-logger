// module dependencies
var express = require('express');
var router = express.Router();
var UserController = require('../../controllers/UserController');

// route handling

// preliminary for all requests
router.use( (req, res, next) => { 
    res.set({
        'Content-Type'                  : 'application/json',
        'Access-Control-Allow-Origin'   : '*',
        'Access-Control-Allow-Methods'  : 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers'  : 'Content-Type, Access-Control-Allow-Headers'
    });
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    }
    next();
});

// at "url/api/users" - list all users
router.get('/', UserController.getAllUsers);

// add a new user
router.post('/', UserController.addUser);

// at "url/api/users/userID" - view one user's info
router.get('/:userID', UserController.getUser);  

// update a user's info
router.put('/:userID', UserController.updateUser); 

// delete a user
router.delete('/:userID', UserController.deleteUser); 


// return router
module.exports = router;