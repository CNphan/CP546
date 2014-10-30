module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	
	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('user', { title: 'University Manager | User Profile', user: req.session.user });
	});
	
	return router;
};
