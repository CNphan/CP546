// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

// define the schema for our user model
var userSchema = mongoose.Schema({
    email:      {type: String, lowercase: true, required: true, sparse: true, unique:true},
    password:   {type: String, required: true},
    first:      {type: String, required: true},
    last:       {type: String, required: true},
    type:       {type: String, required: true},
    active:     {type: String, required: true},
    detail:     {type: mongoose.Schema.Types.ObjectId,
                 ref:  'UserDetail'},
    joined:     {type: Date, default: Date.now}
});

// generating a hash
userSchema.methods.generateHash = function(password) {
	var hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
	//console.log(hash);
    return hash;
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {	
	var valid = bcrypt.compareSync(password, this.password);
	//console.log(password + ' : ' + this.password, valid);
    return valid;
};

//get data that should be returned.
userSchema.methods.getData = function(){
	return {
		id: 		this._id,
	    email:      this.email,
	    first:      this.first,
	    last:       this.last,
	    type:       this.type,
	    active:     this.active,
	    detail:     [this.detail],
	    joined:     this.joined
	};
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
