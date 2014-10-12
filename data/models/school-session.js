// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var schoolSessionSchema = mongoose.Schema({
    code:        {type: String},
    description: {type: String},
    start:       {type: Date},
    stop:        {type: Date}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SchoolSession', schoolSessionSchema);
