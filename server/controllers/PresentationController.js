// Controllers call the service and return JSON to the client

var PresentationServiceModule = require('../../services/PresentationService');
const PresentationService = PresentationServiceModule.PresentationService;

exports.getAllPresentations = function (req, res, next) { 
        PresentationService.list()
            .then((presentations) => {
                res.status(200);
                res.send(JSON.stringify(presentations));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.addPresentation = function (req, res, next) {
        PresentationService.create(req.body.presenterID, 
                                   req.body.listenerID, 
                                   req.body.proofID)
            .then((presentation) => {
                res.status(201);
                res.send(JSON.stringify(presentation));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.getPresentation = function (req, res, next) {
        PresentationService.read(req.params.presentationID)
            .then((presentation) => {
                res.status(200);
                res.send(JSON.stringify(presentation));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.updatePresentation = function (req, res, next) {
        PresentationService.update(req.params.presentationID,
                                   req.body.status)
            .then((presentation) => {
                res.status(200);
                res.send(JSON.stringify(presentation));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};

exports.deletePresentation = function (req, res, next) {
        PresentationService.remove(req.params.presentationID)
            .then((presentation) => {
                res.status(200);
                res.send(JSON.stringify(presentation));
            }).catch( (err) => {
                res.status(404);
                res.end();
            });
};
