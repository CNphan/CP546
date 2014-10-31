module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var backURL;
	
	router.get('/history', function (req, res, next){data.user.grant.StudentTeacherAdmin(req, res, next);}, function(req, res) {
		res.render('history', { title: 'University Manager | Student\'s Class History Report', user: req.session.user });
	});
	
	/* GET/POST class to schedule page. */
	router.get('/add', function (req, res, next){data.user.grant.StudentAdmin(req, res, next);}, function(req, res, next) {
		res.render('addrequest', { title: 'University Manager | Add Class', user: req.session.user });
	}).post('/add', function (req, res, next){data.user.grant.StudentAdmin(req, res, next);}, function(req, res, next) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	/* GET/POST drop to schedule page. */
	router.get('/drop', function (req, res, next){data.user.grant.StudentTeacherAdmin(req, res, next);}, function(req, res, next) {
		res.render('drop', { title: 'University Manager | Drop Class', user: req.session.user });
	}).post('/drop', function (req, res, next){data.user.grant.StudentTeacherAdmin(req, res, next);}, function(req, res, next) {
		
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	return router;
};
