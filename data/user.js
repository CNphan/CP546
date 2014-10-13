var mongoose = require('mongoose');
var db = require('./db-locations');

// Models
var User = require('./models/user');
var UserDetail = require('./models/user-detail');
var UserContact = require('./models/user-contact');
var UserTranscript = require('./models/user-transcript');
var UserTranscriptHistory = require('./models/user-transcript-history');

function newContact (req){
	var type  = req.type;
	var phone  = req.phone;
	var addr   = req.addr;
	var addr_2 = req.addr_2;
	var city   = req.city;
	var state  = req.state;
	var zip    = req.zip;
	var userContact = new UserContact({
        type:  type,
        phone:  phone,
        addr:   addr,
        addr_2: addr_2,
        city:   city,
        state:  state,
        zip:    zip
	});
	return userContact;
}

function newUserTranscript(req){
	var school = req.school;
	var city = req.city;
	var state = req.state;
	var gpa = req.gpa;
	var userTranscript = new UserTranscript({
        school:  school,
        city:    city,
        state:   state,
        gpa:     gpa
	});
    return userTranscript;
}

function newUserTranscriptHistory(general, college){
	var userTranscriptHistory = new UserTranscriptHistory({
		general: general,
		college: college
	});
	return userTranscriptHistory;
}

function newUserDetail(req, contact, transcripts){
	var birth = req.birth;
	var gender = req.gender;
	var userDetail = new UserDetail({
        birth:       birth,
        gender:      gender,
        contact:     contact,
        transcripts: transcripts
		
	});
	return userDetail;
}

function newUser(req){
	var email = req.email;
	var password = req.password;
	var first = req.first;
	var last = req.last;
	var type = req.type;
	var active = req.active;
	var detail = req.detail;
	var user = new User({
        email:      email,
        password:   password,
        first:      first,
        last:       last,
        user_type:  type,
        active:     active,
        detail:     detail
	});
	return user;
}

module.exports.create = function (req, cb) {
	db.open('user', function(err){
		if(err !== undefined){cb(err);}
	});
	
    var userContact = newContact(req);
	var userTranscript = newUserTranscript(req);
	var userTranscriptHistory = newUserTranscriptHistory();
	var userDetail = newUserDetail(req);
	var user = newUser(req);
	
	db.close();
};

module.exports.edit = function (cb) {
	db.open('user', function(err){
		if(err !== undefined){cb(err);}
	});
	
	
	db.close();
};

module.exports.searchObject = function (cb) {
	db.open('user', function(err){
		if(err !== undefined){cb(err);}
	});
	
	
	db.close();
};

module.exports.searchArray = function (cb) {
	db.open('user', function(err){
		if(err !== undefined){cb(err);}
	});
	
	
	db.close();
};

module.exports.admin = function (cb) {
	db.open('user', function(err){
		if(err !== undefined){cb(err);}
	});
	
	
	db.close();
};

module.exports.isUser = function (cb) {
	
};