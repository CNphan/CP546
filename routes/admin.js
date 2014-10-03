module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user = data.user;
	
	/* GET admin page. */
	router.get('/', function(req, res) {
		res.render('index', { title: 'University Manager | Administration', user: user });
	});
	
	return router;
};
