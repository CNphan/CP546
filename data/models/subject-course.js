// load the things we need
var mongoose = require('mongoose');
var SchoolSubject = require('./subject');

// define the schema for our user model
var SubjectCourseSchema = mongoose.Schema({
    code:         {type: String},
    units:        {type: Number},
    name:         {type: String},
    subject:      {type: mongoose.Schema.Types.ObjectId,
    	           ref: 'Subject'},
    description:  {type: String},
    requirements: {type: String}
});

//db.subjectcourses.insert({code: '010', units: 3, name: 'Introduction to Information Systems', subject: ObjectId("545658a4f1832e26bc308e19"), description: 'Use information technology to master their current or future jobs and to help ensure the success of their organization.  To accomplish this goal, this text helps students to become informed users; that is, persons knowledgeable about information systems and information technology. The focus is not on merely learning the concepts of IT but rather on applying those concepts to facilitate business processes.', requirements: ''})
//db.subjectcourses.insert({code: '130', units: 3, name: 'Introduction to Data Systems', subject: ObjectId("545658a4f1832e26bc308e19"), description: 'Data system is a term used to refer to an organized collection of symbols and processes that may be used to operate on such symbols. Any organised collection of symbols and symbol-manipulating operations can be considered a data system.', requirements: ''})
//db.subjectcourses.insert({code: '235', units: 3, name: 'Data System Applications', subject: ObjectId("545658a4f1832e26bc308e19"), description: 'Learn about various data systems and how they interact with systems.  This class helps students to understand the differences in data systems and how to select a data system for implimentation', requirements: ''})
//db.subjectcourses.insert({code: '354', units: 3, name: 'System Archtecture Design', subject: ObjectId("545658a4f1832e26bc308e19"), description: 'Learn about fundimental managment systems architecture design.', requirements: ''})
//db.subjectcourses.insert({code: '010', units: 3, name: 'Introduction to Computer Information Systems', subject: ObjectId("5456580ff1832e26bc308e18"), description: 'Learn about CIS and todays technology field.', requirements: ''})
//db.subjectcourses.insert({code: '110', units: 3, name: 'Intermediate Linux Configuration', subject: ObjectId("5456580ff1832e26bc308e18"), description: 'Learn about configuring the linux kernel and the flavors of distribution for enterprise use.', requirements: ''})
//db.subjectcourses.insert({code: '225', units: 3, name: 'Advanced Data Manipulation', subject: ObjectId("5456580ff1832e26bc308e18"), description: 'Learn about manipulating data from programatic and distributed application.', requirements: ''})
//db.subjectcourses.insert({code: '351', units: 3, name: 'Entrprise Application Development', subject: ObjectId("5456580ff1832e26bc308e18"), description: 'Learn about developing enterprise level application and the different considerations that should take presidence.', requirements: ''})

//get data that should be returned.
SubjectCourseSchema.methods.getData = function(){
	return {
		id:          this._id,
	    code:        this.code,
	    units:       this.units,
	    name:        this.name,
	    subject:     this.subject,
	    description: this.description,
	    requirements:this.requirements
	};
};

// create the model for users and expose it to our app
module.exports = mongoose.model('SubjectCourse', SubjectCourseSchema);
