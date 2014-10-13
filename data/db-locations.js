var mongo = require('mongoose')
  , cfg = require('./../config/config');

module.exports.open = function (dbLocation) {
	mongo.connect('mongodb://' + cfg.mongo_host + ':' + cfg.mongo_port + '/' + dbLocation);
	var db = mongo.connection;
	db.on('error', console.error.bind(console, 'connection error: '));
  return db;
};