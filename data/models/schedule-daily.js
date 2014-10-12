// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var scheduleDailySchema = mongoose.Schema({
    sun:     {type: Boolean},
    mon:     {type: Boolean},
    tue:     {type: Boolean},
    wed:     {type: Boolean},
    thur:    {type: Boolean},
    fri:     {type: Boolean},
    sat:     {type: Boolean}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('ScheduleDaily', scheduleDailySchema);
