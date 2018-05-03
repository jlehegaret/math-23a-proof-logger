// provides CRUD access to the list of qualified listeners 
// for a given proof

var Proof = require('../models/proofModel');
var User = require('../models/userModel');

class ProofListenersService {

    // list all
    static list(proofID) {
        return Proof.findById(proofID)
            .then((proof)=>{
                var listeners = {
                    'listeners' : proof.qualifiedListeners
                };
                return listeners;
        });
    }
    
    //  list one 
    static read(proofID, listenerID) {
        console.log("Note - /proofID/listeners/listenerID doesn't check proof for user as listener, it just returns the user");
        return User.findById(listenerID)
            .then((user)=>{
                return user;
        });
    }
    
    //  add listener
    static create(proofID, listenerID) {
        return Proof.findById(proofID, 
            (err, proof) => {
                if(proof.qualifiedListeners.indexOf(listenerID) == -1) {
                    proof.qualifiedListeners.push(listenerID);
                    proof.save();
                }
            }).then((proof) => {
                return proof;
        });
    }
    
    //  delete listener
    static remove(proofID, listenerID) {
        return Proof.findById(proofID, 
            (err, proof) => {
                proof.qualifiedListeners = 
                    proof.qualifiedListeners.filter(function(el) {
                        return el != listenerID;
                    });
                proof.save();
            }).then((proof) => {
                return proof;
        });
    }
}

module.exports.ProofListenersService = ProofListenersService;