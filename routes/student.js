module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var backURL;
	
	/* GET home page.
	router.get('/', function(req, res) {
		res.render('student', { title: 'University Manager | Add or Drop Class', user: data.user });
	});
	 */
	
	router.get('/history', function(req, res) {
		res.render('history', { title: 'University Manager | Student\'s Class History Report', user: data.user });
	});
	
	/* GET class to schedule page. */
	router.get('/add', function(req, res) {
		res.render('addrequest', { title: 'University Manager | Add Class', user: data.user });
	});
	
	/* POST class to schedule page. */
	router.post('/add', function(req, res, next) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	/* GET drop to schedule page. */
	router.get('/drop', function(req, res) {
		res.render('drop', { title: 'University Manager | Drop Class', user: data.user });
	});
	
	/* POST drop to schedule page. */
	router.post('/drop', function(req, res, next) {
		backURL=req.header('Referer') || '/';
		res.redirect(backURL);
	});
	
	return router;
};
