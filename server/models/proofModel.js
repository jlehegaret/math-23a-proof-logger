// a proof is one item that every member of the class is supposed
// to present to a listener as part of the classwork.
// Thanks to "populate", storing the ID of a subobject here,
//   with a reference to that subobject's type, allows us to serve
//   the complete data for each subobject when the object
//   is requested!

var mongoose = require("mongoose");

var schema = mongoose.Schema({
    name                : String,
    qualifiedListeners  : [ { type: mongoose.Schema.Types.ObjectId, 
                              ref: 'User' },]
});

module.exports = mongoose.model("Proof", schema);