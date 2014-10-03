module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user = data.user;
	
	/* POST credentials page. */
	router.post('/', function(req, res) {
		res.render('index', { title: 'University Manager | You Logged In', user: user });
	});
	
	/* GET register page. */
	router.get('/register', function(req, res) {
		res.render('index', { title: 'University Manager | Register for Fall 2014', user: user });
	});
	
	/* GET add page. */
	router.get('/add', function(req, res) {
		res.render('index', { title: 'University Manager | Grant Credentials', user: user });
	});
	
	/* Post add page. */
	router.post('/add', function(req, res) {
		res.render('index', { title: 'University Manager | Credentials Granted', user: user });
	});
	
	/* GET deactivate page. */
	router.get('/deactivate', function(req, res) {
		res.render('index', { title: 'University Manager | De-Activate Credentials', user: user });
	});
	
	/* Post deactivate page. */
	router.post('/deactivate', function(req, res) {
		res.render('index', { title: 'University Manager | Credentials De-Activated', user: user });
	});
	
	return router;
};
