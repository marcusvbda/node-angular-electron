// "USE STRICT";
angularApp.factory("$db", function($http)
{
	var sqlite = require('sqlite-sync');
	var db = sqlite.connect('./storage/db.sqlite');
	return db;
});