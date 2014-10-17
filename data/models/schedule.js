// load the things we need
var mongoose = require('mongoose');
var User = require('./user');
var ScheduleDaily = require('./schedule-daily');

// define the schema for our user model
var ScheduleSchema = mongoose.Schema({
    session:     {type: String},
    daily:       {type: mongoose.Schema.Types.ObjectId,
                  ref:  ScheduleDaily.schema},
    instructor:  {type: mongoose.Schema.Types.ObjectId,
                  ref:  User.schema},
    start_time:  {type: Date},
    min_length:  {type: Number},
    seats:       {type: Number},
    location:    {type: String}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Schedule', ScheduleSchema);

// get data that should be returned.
module.exports.methods.getData = function(){
	return {
		session: this.session,
		daily: this.daily
	};
};