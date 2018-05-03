// provides CRUD access to user accounts -
// a user's contact info, status, and availability

mongoose = require('mongoose');
var User = require('../models/userModel');

class UserService {

    // list all
    static list() {
        return User.find({})
            .then((users)=>{
                return users;
        });
    }

    // total count of users
    static count() {
        return User.find({})
            .then((users)=>{
                return users.length;
        });
    }
    
    //  list one
    static read(id) {
        return User.findById(id)
            .then((user)=>{
                return user;
        });
    }

    //  list one by email
    static readByEmail(email) {
        return User.findOne({email:email})
            .then((user)=>{
                return user;
        });
    }
    
    //  create
    static create(email, status) {
        return User.findOne({email : email})
                   .then((exists) =>  {
            if (exists == null) {
                var currUser = new User({
                    'email'     : email,
                    'status'    : status
                });
                return currUser.save()
                        .then((user) => {
                            return user;
                        });
            } else {
                return exists;
            }
        });

    }
    
    //  update
    static update(id, email, status, availability) {
        if (typeof id === 'string') {
            id = mongoose.Types.ObjectId(id);
        }
        return User.findById(id, (err, user) => {
            user.email = email;
            user.status = status;
            user.availability = availability;
            user.save()
                .then((user) => {
                    return user;
                });
        });
    }
    
    //  delete
    static remove(id) {
        if (typeof id === 'string') {
            id = mongoose.Types.ObjectId(id);
        }
        return User.remove({_id: id})
                    .then((obj)=>{
                        return obj;
                    });
    }
}

module.exports.UserService = UserService;