// load the things we need
var mongoose = require('mongoose');
var UserTranscript = require('./user-transcript');

// define the schema for our user model
var userTranscriptHistorySchema = mongoose.Schema({
    general: {type: UserTranscript},
    college: {type: UserTranscript}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('UserTranscriptHistory', userTranscriptHistorySchema);
