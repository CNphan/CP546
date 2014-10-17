var mongoose = require('mongoose');
var db = require('./db-locations');

// Models
var User = require('./models/user');
var UserDetail = require('./models/user-detail');
var UserContact = require('./models/user-contact');
var UserTranscript = require('./models/user-transcript');
var UserTranscriptHistory = require('./models/user-transcript-history');

var userProfile;

function newContact (req){
	var type   = req.body.type_user;
	var phone  = req.body.phone_user;
	var addr   = req.body.addr_user;
	var addr_2 = req.body.addr2_user;
	var city   = req.body.city_user;
	var state  = req.body.state_user;
	var zip    = req.body.zip_user;
	var country= req.body.country_user;
	var userContact = new UserContact({
        type:  type,
        phone:  phone,
        addr:   addr,
        addr_2: addr_2,
        city:   city,
        state:  state,
        zip:    zip,
        country:country
	});
	userContact.save(function (err) {
        if (err){
            console.log(err);
            return err;
        }
    });
		console.log('contact id created: ' + userContact._id);
		return userContact._id;
}

function newUserTranscript(req, record){
	var school = req.body['school' + record];
	var city   = req.body['city' + record];
	var state  = req.body['state' + record];
	var gpa    = req.body['gpa' + record];
	var userTranscript = new UserTranscript({
        school:  school,
        city:    city,
        state:   state,
        gpa:     gpa
	});
    userTranscript.save(function (err) {
        if (err){
            console.log(err);
            return err;
        }
    });
		console.log('transcript id created: ' + userTranscript._id);
		return userTranscript._id;
}

function newUserTranscriptHistory(general, college){
	general = (general === undefined) ? {} : general;
	college = (college === undefined) ? [] : college;
	var userTranscriptHistory = new UserTranscriptHistory({
		general: general,
		college: college
	});
	userTranscriptHistory.save(function (err) {
        if (err){
            console.log(err);
            return err;
        }
    });
		console.log('transcript history id created: ' + userTranscriptHistory._id);
		return userTranscriptHistory._id;
}

function newUserDetail(req, contact, transcripts){
	console.log(transcripts, contact);
	var birth  = req.body.birth_user;
	var gender = req.body.gender_user;
	var userDetail = new UserDetail({
        birth:       birth,
        gender:      gender,
        contact:     contact,
        transcripts: transcripts
	});
	userDetail.save(function (err) {
        if (err){
            console.log(err);
            return err;
        }
    });
		console.log('detail id created: ' + userDetail._id);
		return userDetail._id;
}

function newUser(req, detail){
	var user = new User();
	var email    = req.body.email_user;
	var password = (req.body.password === undefined) ? user.generateHash('newaccount') : user.generateHash(req.body.password);
	var first    = req.body.first_user;
	var last     = req.body.last_user;
	var type     = (req.body.type === undefined) ? 'pending' : req.body.type;
	var active   = (req.body.active === undefined) ? false : true ;
	user = new User({
        email:      email,
        password:   password,
        first:      first,
        last:       last,
        type:       type,
        active:     active,
        detail:     detail
	});
	user.save(function (err) {
        if (err){
            console.log(err);
    		return err;
        }
    });
		console.log('user id created: ' + user._id);
		return user._id;
}

function newUserCollegeTranscripts(req){
	var userCollegeTranscript;
	var userCollegeTranscripts = [];
	var transcriptCount = req.body.transcript_college_record_number;
	if (req.body.transcript_college_record_number > 0){
        for (var i = 0; i < transcriptCount; ++i){
            userCollegeTranscript = newUserTranscript(req, '_transcript_' + i);
            userCollegeTranscripts.push(userCollegeTranscript);
        }
	} else {
		return;
	}
	return userCollegeTranscripts;
}

module.exports.create = function (req, cb) {
	var userContact, userGeneralTranscript, userCollegeTranscripts, userTranscriptHistory, userDetail, user;
	db.open('user');

	userGeneralTranscript = newUserTranscript(req, '_general');
	userCollegeTranscripts = newUserCollegeTranscripts(req);
	userTranscriptHistory = newUserTranscriptHistory(userGeneralTranscript, userCollegeTranscripts);
	userContact = newContact(req);
	userDetail = newUserDetail(req, userContact, userTranscriptHistory);
	user = newUser(req, userDetail);

	//db.close();
};

module.exports.authenticate = function (req, cb) {
	var search, validPass;
    var userValue = req.body.user;
    var passValue = req.body.password;
	db.open('user');
	
	User
		.findOne({email:userValue})
		.exec(function(err,data){
			if (err) {
				cb(err, null);
				return;
			}
			validPass = data.validPassword(passValue);
			if(validPass){
				this.userProfile = data;
				cb(null, data);
				return;
			}
			cb('Invalid User / Password!!! Try again.', null);
			return;
		});

	db.close();
};

function findUser(email){
	var profile;
	User
		.findOne({email:email})
		.exec(function(err, user){
			if (err) {return;}
			profile = user.getData();
			return profile;
		});
	return profile;
}

function findDetail(id){
	
}

function findContact(id){
	
}

function findTranscript(id){
	
}

function findTranscriptHistory(id){
	
}

module.exports.getUser = function(email, cb){
	db.open('user');
	
	var test = [];
	
	User
		.findOne({email:email})
		.exec(function(err, user){
			if (err) {cb(err, null);return;}
			test = user.getData();
			UserDetail
			.findOne({detail:user.detail._id})
			.exec(function(err, details){
				if (err) {cb(err, null);return;}
				user.detail = [];
				user.detail = details.getData();
				var contactId = [];
				for (n in details.contact){
					if(n == 0) {contactId.push(details.contact[n]);}
				}
				UserContact
						.find({_id:contactId})
						.exec(function(err, contact){
							if (err) {cb(err, null);return;}
							test.detail.contact = [];
							for(n in contact){
								test.detail.contact.push(contact[n].getData());
							}
							UserTranscriptHistory
								.findOne({_id:details.transcripts})
								.exec(function(err, history){
									if (err) {cb(err, null);return;}
									var transcriptId = [];
									transcriptId.push(history.general);
									for (var n; n < history.college.length; i++){
										transcriptId.push(history.college[n]);
									}
									test.detail.transcripts = history.getData();
									UserTranscript
										.find({_id:transcriptId})
										.exec(function(err, transcripts){
											if (err) {cb(err, null);return;}
											console.log(transcripts);
											test.detail.transcripts.general = transcripts[0].getData();
											console.log('running test: ', test.detail.transcripts.general);
											cb(null, user);
											return;
										});
								});
						});
			 	});
		});
	
	//db.close();
};

module.exports.getUserArrayByType = function (type, cb) {
	db.open('user');
	
	User
		.find({type:type})
		.lean()
		.populate('detail')
		.exec(function(err,users){
			if (err) {
				cb(err, null);
				return;
			}
			//console.log(users);
			cb(null, users);
			return;		
		});

	//db.close();
};

/*
module.exports.edit = function (cb) {
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
*/