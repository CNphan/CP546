// load the things we need
var mongoose = require('mongoose');
var User = require('./user');
var UserContact = require('./user-contact');
var SchoolSession = require('./school-session');

// define the schema for our user model
var schoolSchema = mongoose.Schema({
    name:            {type: String},
    president:       {type: User},
    contact:         {type: UserContact},
    session_current: {type: SchoolSession},
    session_previous:{type: SchoolSession},
    session_next:    {type: SchoolSession}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('', schoolSchema);
