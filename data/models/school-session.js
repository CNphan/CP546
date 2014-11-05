// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var schoolSessionSchema = mongoose.Schema({
    code:        {type: String},
    description: {type: String},
    start:       {type: Date},
    stop:        {type: Date},
    active:      {type: Boolean}
});

//db.schoolsessions.insert({code: '2014-FALL', description: 'Fall 2014 Schedule', start: ISODate("2014-05-30T01:11:18.965Z"), stop: ISODate("2014-12-16T01:11:18.965Z"), active:true})
//db.schoolsessions.insert({code: '2014-Spring', description: 'Spring 2014 Schedule', start: ISODate("2014-01-30T01:11:18.965Z"), stop: ISODate("2014-05-01T01:11:18.965Z"), active:false})
//db.schoolsessions.insert({code: '2015-FALL', description: 'Fall 2015 Schedule', start: ISODate("2015-05-30T01:11:18.965Z"), stop: ISODate("2015-12-16T01:11:18.965Z"), active:false})
//db.schoolsessions.insert({code: '2015-Spring', description: 'Spring 2015 Schedule', start: ISODate("2015-01-30T01:11:18.965Z"), stop: ISODate("2015-05-01T01:11:18.965Z"), active:false})

//get data that should be returned.
schoolSessionSchema.methods.getData = function(){
	return {
		id:          this._id,
        code:        this.code,
        description: this.description,
        start:       this.start,
        stop:        this.stop,
        active:      this.active,
        schedule:    []
	};
};

// create the model for users and expose it to our app
module.exports = mongoose.model('SchoolSession', schoolSessionSchema);
