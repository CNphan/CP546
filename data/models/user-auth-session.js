// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userAuthSessionSchema = mongoose.Schema({
    expire:      {type: Boolean},
    user:        {type: mongoose.Schema.Types.ObjectId,
                   ref: 'User'},
    token:       {type: String}
});

//get data that should be returned.
userAuthSessionSchema.methods.getData = function(){
	return {
		id:     this._id,
		expire:	this.expire,
		token:	this.token,
		user:   this.user
	};
};

// create the model for users and expose it to our app
module.exports = mongoose.model('UserAuthSession', userAuthSessionSchema);