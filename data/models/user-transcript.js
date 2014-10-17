// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var UserTranscriptSchema = mongoose.Schema({
    school:  {type: String},
    city:    {type: String},
    state:   {type: String},
    gpa:     {type: String}
});

//get data that should be returned.
UserTranscriptSchema.methods.getData = function(){
	return {
		id: this._id,
		school: this.school,
		city: this.city,
		state: this.state,
		gpa: this.gpa
	};
};

// create the model for users and expose it to our app
module.exports = mongoose.model('UserTranscript', UserTranscriptSchema);