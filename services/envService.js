// "USE STRICT";
angularApp.factory("$env", function()
{
	return require('./package.json');
});