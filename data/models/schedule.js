// load the things we need
var mongoose = require('mongoose');
var User = require('./user');
var ScheduleDaily = require('./schedule-daily');

// define the schema for our user model
var ScheduleSchema = mongoose.Schema({
    session:     {type: String},
    daily:       {type: ScheduleDaily},
    instructor:  {type: User},
    start_time:  {type: Date},
    min_length:  {type: String},
    seats:       {type: String},
    location:    {type: String}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Schedule', ScheduleSchema);
