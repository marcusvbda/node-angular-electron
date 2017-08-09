"USE STRICT";
angularApp.factory("$usuarios", function($model)
{
	var usuarios = $model;
	$model._primary = "id";
	$model._table   = "usuarios";
	return usuarios;
});