module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user = data.user;
	
	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('user', { title: 'University Manager | User Profile', user: user });
	});
	
	return router;
};
