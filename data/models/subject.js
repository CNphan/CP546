// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var subjectSchema = mongoose.Schema({
    code:        {type: String},
    name:        {type: String},
    description: {type: String}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Subject', subjectSchema);
