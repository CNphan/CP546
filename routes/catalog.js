module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var backURL;
	
	/* GET catalog page. */
	router.get('/', function(req, res, next) {
		res.render('catalog', { title: 'University Manager | Class Catalog', user: req.session.user });
	});

	/* GET schedule page. */
	router.get('/schedule', function (req, res, next){data.user.grant.StudentTeacher(req, res, next);}, function(req, res, next) {
		res.render('schedule', { title: 'University Manager | My Schedule', user: req.session.user });
	});

	/* GET add page. */
	router.get('/addcourse', function (req, res, next){data.user.grant.Admin(req, res, next);}, function(req, res, next) {
		res.render('addcourse', { title: 'University Manager | Add Class Schedule', user: req.session.user });
	});

	/* GET add page. */
	router.get('/addschedule', function (req, res, next){data.user.grant.Admin(req, res, next);}, function(req, res, next) {
		res.render('addschedule', { title: 'University Manager | Class Scheduled added', user: req.session.user });
	});

	return router;
};