// load the things we need
var mongoose = require('mongoose');
var db = require('./db-locations.js');


var Catalog = require('./models/school-session');
var findCatalog = require('./functions/findCatalog');
var Schedule = require('./models/schedule');
var Course = require('./models/subject-course');
var Subject = require('./models/subject');
var User = require('./user');

module.exports.create = function () {
	db.open('school');
	
	
	db.close();
};

module.exports.getCurrent = function (cb) {
	findCatalog.current(function(err, data){
		if(err){cb(err, null);return;}
		
		cb(null, data);
		return;
	});
};

module.exports.getCatalog = function (id, cb) {
	var catalog;
	var subjects = [];
	function isSubject(name){
	  for(n in subjects){
		  console.log(name.code);
		  console.log(subjects[n].code);

		  console.log(subjects[n].code == name.code);
	    if(subjects[n].code == name.code){
	      return true;
	    }
	  }
	  return false;
	}
	var getSubjects = function (schedules){
	  for(var n = 0; n < schedules.length; n++){
	    if(!isSubject(schedules[n].course.subject)){
	      subjects.push(schedules[n].course.subject);
	    }
	  }
	  return subjects;
	};
	// Find catalog object.
	db.open('school');
	Catalog
		.findOne({code:id})
		.exec(function(err, data){
			if(err){cb(err,null);return;}
			catalog = data.getData();
			
			// Find schedules assigned to catalog.
			Schedule
				.find({session:catalog.code})
				.exec(function(err, schedules){
					db.close();
					if(err){cb(err,null);return;}
					
					for(i in schedules){
						catalog.schedule[i] = schedules[i].getData();
						console.log(catalog.schedule[j]);
						console.log(schedules[i].getDays());
					}
					
					//console.log(catalog);
					db.open('school');
					for(i in schedules){
						var j = 0;
						Course
							.findOne({_id:schedules[i].course})
							.populate('subject')
							.exec(function(err, course){
								if(err){cb(err,null);return;}
								catalog.schedule[j].course = course;
								j++;
								if( j == schedules.length ){
									db.close();
									catalog.subjects = getSubjects(catalog.schedule);
									var k = 0 ;
									for(z in schedules){
										User.getUserById(catalog.schedule[z].instructor, function(err, teacher){
											catalog.schedule[k].instructor = teacher;
											
											k++;
											if( k == schedules.length ){
												//console.log(catalog.schedule);
												cb(null, catalog);
												return;
											}
										});
									}
								}
							});
					}	
					
				});
		});
};


module.exports.getCatalogList = function (start, end, cb) {
	var catalogs = [];
	db.open('school');
	
	Catalog
		.find({start:{ $gte : start, $lt:end}})
		.exec(function(err, data){
			db.close();
			if(err){cb(err,null);return;}
			for(var i = 0; i < data.length(); i++){
				catalogs.push(data[i].getData());
			}
			cb(null, catalogs);
			return;
	});
	
};