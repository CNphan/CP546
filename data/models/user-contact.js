// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userContactSchema = mongoose.Schema({
    addr:      {type: String},
    addr_2:    {type: String},
    city:      {type: String},
    state:     {type: String},
    zip:     {type: String}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('UserContact', userContactSchema);

