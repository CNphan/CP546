// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userDetailSchema = mongoose.Schema({
    birth:       {type:   Date},
    gender:      {type:   String},
    contact:     [{type:  mongoose.Schema.Types.ObjectId,
                   ref:   'UserContact'}],
    transcripts:  {type:  mongoose.Schema.Types.ObjectId,
                   ref:   'UserTranscriptHistory'}
});

//get data that should be returned.
userDetailSchema.methods.getData = function(){
	return {
		id: this._id,
	    birth:	this.birth,
	    gender:	this.gender,
	    contact:[this.contact],
	    transcripts: [this.transcripts]
	};
};

// create the model for users and expose it to our app
module.exports = mongoose.model('UserDetail', userDetailSchema);