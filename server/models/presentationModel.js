// A presentation contains the event-specific information of
// one student presenting a proof to a qualified listener

var mongoose = require("mongoose");

var schema = mongoose.Schema({
    presenter     : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    listener      : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    proof         : { type: mongoose.Schema.Types.ObjectId, ref: 'Proof' },
    date_presented  : { type: Date,   default:  Date.now },
    status          : { type: String, default: 'pending' }
});

module.exports = mongoose.model("Presentation", schema);