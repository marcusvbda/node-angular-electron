// "USE STRICT";
angularApp.factory("$model", function($db)
{
	var model      = {};
	model._query   = "select";
	model._table   = "";
	model._field  = "*";
	model._condition = "where 1=1";

	model.table = function(table)
	{
		this._table = table;
		
		return this;
	}

	model.select = function(field)
	{
		this._field = field ;
		return this;
	}

	model.update = function(edit_fields)
	{
		this._query = "update" ;
	    var query = this._query+" "+this._table+" set "+edit_fields;
		return this.run(query);
	}

	model.raw = function(query)
	{
		return this.run(query);
	}

	model.where = function(condition)
	{
		this._condition += " and "+condition[0]+" "+condition[1]+" '"+condition[2]+"' " ;
		return this;
	}

	model.get = function()
	{
	    var query = this._query+" "+this._field+" from "+this._table+" "+this._condition;
	    var rows = model.run(query);
    	return rows;
    }

    model.find = function(id)
    {
    	this._condition="where id="+id;
    	return this;
    }

    model.run = function(query)
    {
    	console.log(query);
    	return rows = $db.run(query);
    }

	return model;
});