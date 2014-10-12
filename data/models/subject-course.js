// load the things we need
var mongoose = require('mongoose');
var SchoolSubject = require('./school-subject');

// define the schema for our user model
var SubjectCourseSchema = mongoose.Schema({
    code:         {type: String},
    units:        {type: String},
    name:         {type: String},
    subject:      {type: SchoolSubject},
    description:  {type: String},
    requirements: {type: String}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SubjectCourse', SubjectCourseSchema);
