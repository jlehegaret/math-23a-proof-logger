// Controllers call the service and return JSON to the client

var ProofServiceModule = require('../services/ProofService');
const ProofService = ProofServiceModule.ProofService;
var ProofListenersServiceModule = require('../services/ProofListenersService');
const ProofListenersService = ProofListenersServiceModule.ProofListenersService;


exports.getAllProofs = function (req, res, next) { 
        ProofService.list()
            .then((proofs) => {
                res.status(200);
                res.send(JSON.stringify(proofs));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.addProof = function (req, res, next) { 
        ProofService.create(req.body.proof)
            .then((proof) => {
                res.status(201);
                res.send(JSON.stringify(proof));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.getProof = function (req, res, next) { 
        ProofService.read(req.params.proofID)
            .then((proof) => {
                res.status(200);
                res.send(JSON.stringify(proof));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.updateProof = function (req, res, next) { 
        ProofService.update(req.params.proofID,
                            req.body.name)
            .then((proof) => {
                res.status(200);
                res.send(JSON.stringify(proof));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.deleteProof = function (req, res, next) { 
        ProofService.remove(req.params.proofID)
            .then((proof) => {
                res.status(200);
                res.send(JSON.stringify(proof));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.getAllProofListeners = function (req, res, next) { 
        ProofListenersService.list(req.params.proofID)
            .then((listeners) => {
                res.status(200);
                res.send(JSON.stringify(listeners));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.addProofListener = function (req, res, next) { 
        ProofListenersService.create(req.params.proofID, req.body.userID)
            .then((listener) => {
                res.status(201);
                res.send(JSON.stringify(listener));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.getProofListener = function (req, res, next) { 
        ProofListenersService.read(req.params.proofID, req.params.userID)
            .then((listener) => {
                res.status(200);
                res.send(JSON.stringify(listener));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
}; 

exports.deleteProofListener = function (req, res, next) { 
        ProofListenersService.remove(req.params.proofID, req.params.userID)
            .then((listener) => {
                res.status(200);
                res.send(JSON.stringify(listener));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
}; 