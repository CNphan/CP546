module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var backURL;
	
	/* GET catalog page. */
	router.get('/', function(req, res, next) {
		data.catalog.getCurrent(function(err, id){
			if(err){
				console.log(err);
				backURL=req.header('Referer') || '/';
				res.redirect(backURL);
				next({error:err});
			} else {
				data.catalog.getCatalog(id, function(err, catalog){
					if(err){
						console.log(err);
						next({error:err});
					} else {
						console.log('You are receiving the (catalog) Object', catalog);
						res.render('catalog', { title: 'UM | Class Catalog', user: req.session.user, catalog: catalog });
					}
				});
			}
		});
	});
	

	/* GET schedule page. */
	router.get('/schedule', function (req, res, next){data.user.grant.StudentTeacher(req, res, next);}, function(req, res, next) {
		res.render('schedule', { title: 'University Manager | My Schedule', user: req.session.user });
	});

	/* GET add page. */
	router.get('/addcourse', function (req, res, next){data.user.grant.Admin(req, res, next);}, function(req, res, next) {
		data.subject.getSubjects(function (err, data){
			if(err){
				console.log(err);
				next({error:err});
			} else {
				console.log('You are receiving the (subjects) Object', data);
				res.render('addcourse', { title: 'UM | Add Class Schedule', user: req.session.user, subjects: data });
			}
		});
	});

	/* GET add page. */
	router.get('/addschedule', function (req, res, next){data.user.grant.Admin(req, res, next);}, function(req, res, next) {
		
		res.render('addschedule', { title: 'University Manager | Class Scheduled added', user: req.session.user });
	});

	return router;
};