module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user = data.user;
	var backURL;
	
	/* POST credentials page. */
	router.post('/', function(req, res, next) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	/* GET register page. */
	router.get('/register', function(req, res) {
		res.render('register', { title: 'University Manager | Register for Fall 2014', user: user });
	});
	
	/* GET add page. */
	router.get('/add', function(req, res) {
		res.render('adduser', { title: 'University Manager | Grant Credentials', user: user });
	});
	
	/* Post add page. */
	router.post('/add', function(req, res, next) {
		next();
	});
	
	/* GET deactivate page. */
	router.get('/deactivate', function(req, res) {
		res.render('deactivate', { title: 'University Manager | De-Activate Credentials', user: user });
	});
	
	/* Post deactivate page. */
	router.post('/deactivate', function(req, res, next) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	return router;
};
