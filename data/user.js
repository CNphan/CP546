var mongoose = require('mongoose');
var db = require('./db-locations');

var newUser = require('./functions/userNew');

// Models
var User = require('./models/user');
var UserDetail = require('./models/user-detail');
var UserContact = require('./models/user-contact');
var UserTranscript = require('./models/user-transcript');
var UserTranscriptHistory = require('./models/user-transcript-history');
var Grant = require('./functions/route-grant');

var backURL;

module.exports.grant = Grant;

module.exports.create = function (req, cb) {
	db.open('user');
	
	var userContact;
	var userGeneralTranscript;
	var userCollegeTranscripts;
	var userTranscriptHistory;
	var userDetail;
	var user;

	userGeneralTranscript = newUser.Transcript(req, '_general');
	userCollegeTranscripts = newUser.CollegeTranscripts(req);
	userTranscriptHistory = newUser.TranscriptHistory(userGeneralTranscript, userCollegeTranscripts);
	userContact = newUser.Contact(req);
	userDetail = newUser.Detail(req, userContact, userTranscriptHistory);
	user = newUser.User(req, userDetail);
};

module.exports.authenticate = function (req, res, cb) {
	db.open('user');
	
	var validPass;
	var user;
	
	User
		.findOne({email:req.body.user})
		.exec(function(err,data){
			if (err) {
				cb(err);
				return 0;
			}
			validPass = data.validPassword(req.body.password);
			if(validPass){
				user = data.getData();
				var sess = req.session;
				sess.user = user;
				console.log(req.body.remember);
				if(req.body.remember === 'on'){
					console.log('Logged in for one year.');
					sess.cookie.maxage = 365 * 24 * 60 * 60 * 1000;
				}
				cb(null);
				return user;
			}
			cb('Invalid User / Password!!! Try again.');
			return 0;
		});
};


module.exports.deauthenticate = function (req, res, cb){
	req.session.destroy(function(err) {
		if (err != undefined){cb(err);return;}
		cb(null);
		return;
	});
};


module.exports.getUser = function(email, cb){
	db.open('user');
	
	var profile = [];
	
	//search for user object
	User
		.findOne({email:email})
		.exec(function(err, user){
			if (err) {cb(err, null);return;}
			profile = user.getData();
			
			// search for detail object
			UserDetail
			.findOne({detail:user.detail._id})
			.exec(function(err, details){
				if (err) {cb(err, null);return;}
				profile.detail = [];
				profile.detail = details.getData();
				
				//search for contact objects
				var contactId = [];
				profile.detail.contact = [];
				for (n in details.contact){
					if(n == 0) {contactId.push(details.contact[n]);}
				}
				for(var i =0;i<details.contact.length; i++){
					UserContact
						.find({_id:contactId[i]})
						.exec(function(err, contact){
							if (err) {cb(err, null);return;}
							for(n in contact){
								profile.detail.contact.push(contact[n].getData());
							}
						});
				}
				
				// search for transcript history object
				if(details.transcripts){
					UserTranscriptHistory
						.findOne({_id:details.transcripts})
						.exec(function(err, history){
							if (err) {cb(err, null);return;}
							profile.detail.transcripts = history.getData();
							
							//search for college transcript objects
							var transcriptId = [];
							profile.detail.transcripts.college = [];
							for (var i = 0; i < history.college.length; i++){
								transcriptId.push(history.college[i]);
							}
							for(var i = 0; i < transcriptId.length; i++){
								UserTranscript
									.findOne({_id:transcriptId[i]})
									.exec(function(err, transcripts){
										if (err) {cb(err, null);return;}
										profile.detail.transcripts.college.push(transcripts.getData());
									});
							}
							
							// search for ge transcript object
							UserTranscript
								.findOne({_id:history.general})
								.exec(function(err, ge){
									if (err) {cb(err, null);return;}
									profile.detail.transcripts.general = ge.getData();
									
									cb(null, profile);
									return;
								});
						});
				} else {
					//console.log('running profile: ', profile.detail.transcripts);
					cb(null, profile);
					return;
				}
			 	});
		});
};

module.exports.getUserArrayByType = function (type, cb) {
	db.open('user');

	var list = [];
	
	User
		.find({type:type})
		.exec(function(err,users){
			if (err) {cb(err, null);return;}
			
			// search for detail object
			for (var i = 0; i < users.length; i++){
				list.push(users[i].getData());
			}
		    for (var i = 0; i < list.length; i++){
				UserDetail
					.findOne({_id:list[i].detail})
					.populate('transcripts contact')
					.exec(function(err, details){
						if (err) {cb(err, null);return;}
						for (var n = 0; n < users.length; n++){
							if(details._id.toString() === list[n].detail.toString()){
								list[n].detail = details.getData();
							}
						}
					});
		    }			
		    
		cb(null, list);
		return;	
	});
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
		
	backURL=req.header('Referer') || '/';
	res.redirect(backURL);{cb(err);}
	});
	
	
	db.close();
};

module.exports.isUser = function (cb) {
	
};
*/