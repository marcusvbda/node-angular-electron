// "USE STRICT";
angularApp.factory("$db", function($http,$env)
{
	var sqlite = require('sqlite-sync');
	var db = sqlite.connect($env['database_dir']);
	return db;
});