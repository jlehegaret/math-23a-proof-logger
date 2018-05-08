// Controllers call the data service 
// and return JSON to the client

var UserServiceModule = require('../services/UserService');
const UserService = UserServiceModule.UserService;

exports.getAllUsers = function (req, res, next) { 
        UserService.list()
            .then((users) => {
                res.status(200);
                res.send(JSON.stringify(users));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.addUser = function (req, res, next) { 
        UserService.create(req.body.email, req.body.status)
            .then((user) => {
                res.status(201);
                res.send(JSON.stringify(user));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.getUser = function (req, res, next) { 
        UserService.read(req.params.userID)
            .then((user) => {
                res.status(200);
                res.send(JSON.stringify(user));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};  

// update a user's info
exports.updateUser = function (req, res, next) { 
        UserService.update(req.params.userID,
                            req.body.email,
                            req.body.status,
                            req.body.availability)
            .then((user) => {
                if (user) {
                    res.status(200);
                    res.send(JSON.stringify(user));
                } else {
                    res.status(404);
                    res.end();
                }
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.deleteUser = function (req, res, next) { 
        UserService.remove(req.params.userID)
            .then((user) => {
                res.status(200);
                res.send(JSON.stringify(user));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};