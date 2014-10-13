// load the things we need
var mongoose = require('mongoose');
var UserContact = require('./user-contact');
var UserTranscriptHistory = require('./user-transcript-history');

// define the schema for our user model
var userDetailSchema = mongoose.Schema({
    birth:       {type:  Date},
    gender:      {type:  String},
    contact:     [{type: mongoose.Schema.Types.ObjectId,
                   ref:  UserContact.schema}],
    transcripts:  {type:  mongoose.Schema.Types.ObjectId,
                   ref:  UserTranscriptHistory.schema}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('UserDetail', userDetailSchema);