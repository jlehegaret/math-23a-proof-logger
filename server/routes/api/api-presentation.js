// module dependencies
var express = require('express');
var router = express.Router();
var PresentationController = require('../../controllers/PresentationController');

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

// at "url/api/presentations" - list all
router.get('/', PresentationController.getAllPresentations);

// add a new presentation
router.post('/', PresentationController.addPresentation);

// at "url/api/presentations/presentationID" - view one presentation's info
router.get('/:presentationID', PresentationController.getPresentation);  

// update status of one presentation
router.put('/:presentationID', PresentationController.updatePresentation); 

// remove a presentation
router.delete('/:presentationID', PresentationController.deletePresentation); 

// return router
module.exports = router;