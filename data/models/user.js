// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var UserDetail   = require('./user-detail');

// define the schema for our user model
var userSchema = mongoose.Schema({
    email:      {type: String, lowercase: true, required: true, sparse: true, unique:true},
    password:   {type: String, required: true},
    first:      {type: String, required: true},
    last:       {type: String, required: true},
    user_type:  {type: String, required: true},
    active:     {type: String, required: true},
    joined:     {type: Date, default:Date.now},
    detail:     {type: mongoose.Schema.Types.ObjectId,
                 ref:  UserDetail.schema}
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);