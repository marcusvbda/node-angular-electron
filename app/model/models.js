"USE STRICT";
angularApp.factory("$usuarios", function($db)
{
	var model  = new $db({
		table:"usuarios",
		primarykey:"id"
	});
	return model;
});


angularApp.factory("$caixas", function($db)
{
	var model  = new $db({
		table:"caixas",
		primarykey:"id"
	});
	return model;
});

