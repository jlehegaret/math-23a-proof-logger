// module dependencies
var express = require('express');
var router = express.Router();
var ProofController = require('../../controllers/ProofController');

// route handling
router.use( (req, res, next) => { 
    res.set({
        'Content-Type'                  : 'application/json',
        'Access-Control-Allow-Origin'   : '*',
        'Access-Control-Allow-Methods'  : 'GET, PUT, POST, DEL, OPTIONS',
        'Access-Control-Allow-Headers'  : 'Content-Type, Access-Control-Allow-Headers'
    });
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    }
    next();
});

// at "url/api/proofs", list all proofs
router.get('/', ProofController.getAllProofs);

// add new proof
router.post('/',ProofController.addProof);

// at "url/api/proofs/proofID", view proof info
router.get('/:proofID', ProofController.getProof);  

// edit proof info (proof name only)
router.put('/:proofID', ProofController.updateProof); 

// delete a proof
router.delete('/:proofID', ProofController.deleteProof); 

// at "url/api/proofs/:proofID/listeners" - see all qualified listeners
router.get('/:proofID/listeners', ProofController.getAllProofListeners);

// add a new qualified listener
router.post('/:proofID/listeners', ProofController.addProofListener);

// at "url/api/proofs/proofID/listeners/userID" - retrieve listener's info
router.get('/:proofID/listeners/:userID', ProofController.getProofListener);  

// remove a qualified listener
router.delete('/:proofID/listeners/:userID', 
                                    ProofController.deleteProofListener); 

// return router
module.exports = router;