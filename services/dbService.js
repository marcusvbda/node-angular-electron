var $db = {};
$db.init = function()
{
	var sqlite = require('sqlite-sync');
	var db = sqlite.connect($env['database_dir']);
	return db;
}