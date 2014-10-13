// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var scheduleDailySchema = mongoose.Schema({
    sun:     {type: String},
    mon:     {type: String},
    tue:     {type: String},
    wed:     {type: String},
    thur:    {type: String},
    fri:     {type: String},
    sat:     {type: String}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('ScheduleDaily', scheduleDailySchema);
