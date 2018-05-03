// A presentation contains the event-specific information of
// one student presenting a proof to a qualified listener

var mongoose = require("mongoose");

var schema = mongoose.Schema({
    presenterID     : mongoose.Schema.Types.ObjectId,
    listenerID      : mongoose.Schema.Types.ObjectId,
    proofID         : mongoose.Schema.Types.ObjectId,
    date_presented  : { type: Date,   default:  Date.now },
    status          : { type: String, default: 'pending' }
});

module.exports = mongoose.model("Presentation", schema);