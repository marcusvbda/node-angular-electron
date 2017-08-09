"USE STRICT";
angularApp.factory("$users", function($model)
{
	var users = $model;
	$model._primary = "id";
	$model._table   = "users";
	return users;
});