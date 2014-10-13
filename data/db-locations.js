var mongo = require('mongoose')
  , cfg = require('./../config/config');

module.exports.open = function (dbLocation, cb) {
	mongo.connect('mongodb://' + cfg.mongo_host + ':' + cfg.mongo_port + '/' + dbLocation);
	var db = mongo.connection;
	db.on('error', function(err){
		console.error.bind(console, 'CONNECTION ERROR!!!');
		console.error.bind(console, err);
		cb(err);
		return;
	});
  return db;
};


module.exports.close = function () {
	mongo.disconnect();
};
