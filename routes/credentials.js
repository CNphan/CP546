module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user;
	var backURL;
	
	/* POST credentials page. */
	router.post('/', function(req, res, next) {
		var user;
		data.user.authenticate(req, function(err, data){
			if(err){
				console.log(err);
				//res.send({error:err});
			} else {
				console.log('Welcome ' + data.first + ' : ' + data.last);
				user = data;
			}
		});
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
		//res.send(user);
	});

	/* POST register page. */
	router.post('/create', function(req, res, next) {
		console.log('Step ' + 1);
		data.user.create(req, function(err){
			if(err){next(err);}
		});
		res.redirect('/');
	});

	/* POST password reset page. */
	router.post('/create/reset', function(req, res) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	/* GET sign-out. */
	router.get('/signout', function(req, res) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});

	/* GET register page. */
	router.get('/register', function(req, res) {
		res.render('register', { title: 'University Manager | Register for Fall 2014', user: data.user });
	});

	/* POST register page. */
	router.post('/register', function(req, res) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	/* GET add page. */
	router.get('/add', function(req, res) {
		data.user.getUser('bclark@csu.fullerton.edu', function(err, user){
			if (err){console.log(err);}
			data.user.getUserArrayByType('pending', function (err, applicants) {
				if (err){console.log(err);}
				//console.log(applicants);
				res.render('adduser', { title: 'University Manager | Grant Credentials', user: user, applicants: applicants });
			});			
			//console.log(data);
		});

	});
	
	/* Post add page. */
	router.post('/add', function(req, res, next) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	/* GET deactivate page. */
	router.get('/deactivate', function(req, res) {
		res.render('deactivate', { title: 'University Manager | De-Activate Credentials', user: data.user });
	});
	
	/* Post deactivate page. */
	router.post('/deactivate', function(req, res, next) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	return router;
};
