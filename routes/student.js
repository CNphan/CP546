module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user = data.user;
	
	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('index', { title: 'University Manager | Add or Drop Class', user: user });
	});
	
	router.get('/history', function(req, res) {
		res.render('index', { title: 'University Manager | Student\'s Class History Report', user: user });
	});
	
	/* GET class to schedule page. */
	router.get('/add', function(req, res) {
		res.render('index', { title: 'University Manager | Add Class', user: user });
	});
	
	/* POST class to schedule page. */
	router.post('/add', function(req, res) {
		res.render('index', { title: 'University Manager | Class Added', user: user });
	});
	
	/* GET drop to schedule page. */
	router.get('/drop', function(req, res) {
		res.render('index', { title: 'University Manager | Drop Class', user: user });
	});
	
	/* POST drop to schedule page. */
	router.post('/drop', function(req, res) {
		res.render('index', { title: 'University Manager Class Dropped', user: user });
	});
	
	return router;
};
