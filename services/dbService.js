// "USE STRICT";
angularApp.factory("$db", function($http)
{
	var sqlite = require('sqlite-sync');
	var db = sqlite.connect($env['database_dir']);
	return db;
});