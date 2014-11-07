// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var UserScheduleSchema = mongoose.Schema({
    user:    {type: mongoose.Schema.Types.ObjectId,
    	      ref: 'User'},
    session: {code:       {type: String},
    	      name:       {type: String} /*End Session*/},
    course:	 {code:       {type: String},
    		  class_name: {type: String},
    		  instructor: {first: {type: String},
    			           last:  {type: String} } /*End Instructor*/ } /*End Course*/
});



// get data that should be returned.
UserScheduleSchema.methods.getData = function(){
	return {
		id:       this._id,
        user:     this.user,
        sesseion: this.session,
        course:   this.course
	};
};

// create the model for users and expose it to our app
module.exports = mongoose.model('UserSchedule', UserScheduleSchema);