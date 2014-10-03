module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user = data.user;
	
	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('index', { title: 'University Manager', user: user});
	});
	
	return router;
};
