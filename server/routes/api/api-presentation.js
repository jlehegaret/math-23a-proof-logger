// the available API paths for presentation data
// In addition to the basic CRUD functionality, 
//  there are many paths in order to provide presentations
//  of a specific status for a specific user.  We could either
//  continue to expand upon this route, or we could consolidate them
//  to provide only "all listened" or "all presented", depending
//  on customer use cases and performance

// module dependencies
var express = require('express');
var router = express.Router();
var PresentationController = require('../../controllers/PresentationController');

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

// at "url/api/presentations" - list all
router.get('/', PresentationController.getAllPresentations);

// at "url/api/presentations/presentedpending/user/userID" 
//  - list specific user's presented, still-pending presentations
router.get('/presentedpending/user/:userID', 
            PresentationController.getPresentedPending);

// at "url/api/presentations/presentedconfirmed/user/userID" 
//  - list specific user's presented & confirmed presentations
router.get('/presentedconfirmed/user/:userID', 
            PresentationController.getPresentedConfirmed);

// at "url/api/presentations/presenteddenied/user/userID" 
//  - list specific user's presented & denied presentations
router.get('/presenteddenied/user/:userID', 
            PresentationController.getPresentedDenied);

// at "url/api/presentations/listenedpending/user/userID/" 
//  - list specific user's list of pending listened-to presentations
router.get('/listenedpending/user/:userID', 
            PresentationController.getListenedPending);

// at "url/api/presentations/listenedconfirmed/user/userID" 
//  - list specific user's list of confirmed listened-to presentations
router.get('/listenedconfirmed/user/:userID', 
            PresentationController.getListenedConfirmed);

// at "url/api/presentations" - add a new presentation
router.post('/', PresentationController.addPresentation);

// at "url/api/presentations/presentationID" - view one presentation's info
router.get('/:presentationID', PresentationController.getPresentation);  

// at "url/api/presentations/presentationID" - update status of one pres.
router.put('/:presentationID', PresentationController.updatePresentation); 

// at "url/api/presentations/presentationID" - remove a presentation
router.delete('/:presentationID', PresentationController.deletePresentation); 

// return router
module.exports = router;