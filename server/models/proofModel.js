// a proof is one item that every member of the class is supposed
// to present to a listener as part of the classwork.

var mongoose = require("mongoose");

var schema = mongoose.Schema({
    name                : String,
    qualifiedListeners  : [ { type: mongoose.Schema.Types.ObjectId, 
                              ref: 'User' },]
});

module.exports = mongoose.model("Proof", schema);