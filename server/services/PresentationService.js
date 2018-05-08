// provides CRUD access to presentation instances -
// when one student presents a proof to a qualified listener
// currently, there are many API calls so as to return 
//   a specific user's presentations of a specific status

mongoose = require('mongoose');
var Presentation = require('../models/presentationModel');
var UserServiceModule = require('./UserService');
const UserService = UserServiceModule.UserService;
var ProofServiceModule = require('./ProofService');
const ProofService = ProofServiceModule.ProofService;
var ListenersServiceModule = require('./ProofListenersService');
const ListenersService = ListenersServiceModule.ProofListenersService;

class PresentationService {

    // list all
    static list() {
        return Presentation.find({})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    }

    // list all re: a certain proof
    static listAllByProof(proofID) {
        if (typeof proofID === 'string') {
            proofID = mongoose.Types.ObjectId(proofID);
        }
        return Presentation.find({proof: proofID})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    }

    // list a user's presented, to-be-confirmed (aka pending) proofs
    static list_p_p(userID) {
        if (typeof userID === 'string') {
            userID = mongoose.Types.ObjectId(userID);
        }
        return Presentation.find({presenter: userID, status: 'pending'})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    }  

    // list a user's presented and confirmed proofs
    static list_p_c(userID) {
        if (typeof userID === 'string') {
            userID = mongoose.Types.ObjectId(userID);
        }
        return Presentation.find({presenter: userID, status: 'confirmed'})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    } 

    // list a user's presented and denied proofs
    static list_p_d(userID) {
        if (typeof userID === 'string') {
            userID = mongoose.Types.ObjectId(userID);
        }
        return Presentation.find({presenter: userID, status: 'denied'})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    } 

    // list a user's presented and DENIED proofs
    static list_p_d(userID) {
        if (typeof userID === 'string') {
            userID = mongoose.Types.ObjectId(userID);
        }
        return Presentation.find({presenter: userID, status: 'denied'})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    }

    // list a user's listened-to, to-be-confirmed (aka pending) proofs
    static list_l_p(userID) {
        if (typeof userID === 'string') {
            userID = mongoose.Types.ObjectId(userID);
        }
        return Presentation.find({listener: userID, status: 'pending'})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    } 

    // list a user's listened-to and confirmed proofs
    static list_l_c(userID) {
        if (typeof userID === 'string') {
            userID = mongoose.Types.ObjectId(userID);
        }
        return Presentation.find({listener: userID, status: 'confirmed'})
                           .populate('presenter listener proof')
            .then((presentations)=>{
                return presentations;
        });
    } 
  
    //  list one presentation
    static read(id) {
        return Presentation.findById(id)
                           .populate('presenter listener proof')
            .then((presentation)=>{
                return presentation;
        });
    }
    
    //  create a new presentation
    static create(presenterID, listenerID, proofID) {
        // all this may not be needed - proofs seem fine without
        if (typeof presenterID === 'string') {
            presenterID = mongoose.Types.ObjectId(presenterID);
        }
        if (typeof listenerID === 'string') {
            listenerID = mongoose.Types.ObjectId(listenerID);
        }
        if (typeof proofID === 'string') {
            proofID = mongoose.Types.ObjectId(proofID);
        }

        var currPres = new Presentation({
            'presenter' : presenterID,
            'listener'  : listenerID,
            'proof'     : proofID
        });

        return currPres.save()
                .then((presentation) => {

                    return presentation;
                });
    }
    
    //  update one presentation - only for status changes
    static update(id, status) {
        return Presentation.findById(id, 
            (err, presentation) => {
                presentation.status = status;
                presentation.save();
            }).then((presentation) => {

                // if Proof has a new qualified listener, note that,too
                if (status == "confirmed") {
                    return ListenersService.create(presentation.proof, 
                                            presentation.presenter)
                            .then((listeners) => { return presentation; });
                } else {
                    return presentation;
                }
            });
    }
    
    //  delete
    static remove(id) {
        return Presentation.remove({_id: id})
                    .then((obj)=>{
                        return obj;
                    });
    }
}

module.exports.PresentationService = PresentationService;