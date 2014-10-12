// load the things we need
var mongoose = require('mongoose');
var SchoolSubject = require('./school-subject');

// define the schema for our user model
var SubjectCourseSchema = mongoose.Schema({
    code:         {type: Number},
    units:        {type: Number},
    name:         {type: String},
    subject:      {type: mongoose.Schema.Types.ObjectId,
                   ref:  SchoolSubject.schema},
    description:  {type: String},
    requirements: {type: String}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('SubjectCourse', SubjectCourseSchema);
