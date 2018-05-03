// provides CRUD access to the high-level class proof list -
// the list of proofs, by name, that belong to the class

var Proof = require('../models/proofModel');

class ProofService {

    // list all
    static list() {
        return Proof.find({})
            .then((proofs)=>{
                return proofs;
        });
    }
    
    //  list one
    static read(id) {
        return Proof.findById(id)
            .then((proof)=>{
                return proof;
        });
    }
    
    //  create
    static create(proofName) {
        return Proof.findOne({name : proofName})
             .then((exists) => {
                if (exists == null) {
                    var currProof = new Proof({ 'name' : proofName });
                    return currProof.save()
                        .then((proof) => {
                            return proof;
                        });
                } else {
                    return exists;
                }
            });
    }

    
    //  update
    static update(id, name) {
        return Proof.findById(id, 
            (err, proof) => {
                proof.name = name;
                proof.save();
            }).then((proof) => {
                return proof;
        });
    }
    
    //  delete
    static remove(id) {
        return Proof.remove({_id: id})
                    .then((obj)=>{
                        return obj;
                    });
    }
}

module.exports.ProofService = ProofService;