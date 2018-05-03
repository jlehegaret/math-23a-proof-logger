// a user is a user of the proof logger system and currently
// may have a role of "Head", "TA", or "Student".  
// "Availability" refers to when this person is available to
// listen to proof presentations.

var mongoose = require("mongoose");

var schema = mongoose.Schema({
    email: String,
    status: String,
    availability: String
});

module.exports = mongoose.model("User", schema);