"USE STRICT";
angularApp.factory("$model", function($db)
{
	var model      = {};
	model._primary = "id";
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

	model.delete = function()
	{
		this._query = "delete";
		var query = this._query+" from " + this._table+" "+this._condition;
		return this.run(query);
	}

	model.insert = function(fields)
	{
		this._query = "insert"
		var query = this._query+" into " +  this._table+" (";
	    Object.keys(fields).forEach(function(key) 
	    {
		    query+=key+",";
		});
	    query = query = query.substring(0, query.length - 1)+") values (";

	    Object.keys(fields).forEach(function(key) 
	    {
		    query+="'"+fields[key]+"'"+" ,";
		});
	    query = query = query.substring(0, query.length - 1)+")";
		return this.run(query);
	}

	model.update = function(fields)
	{
		this._query = "update" ;
	    var query = this._query+" "+this._table+" set ";
	    Object.keys(fields).forEach(function(key) 
	    {
		    query+=" "+key+"="+"'"+fields[key]+"'"+" ,";
		});
	    query = query = query.substring(0, query.length - 1);
	    query+= this._condition;
		return this.run(query);
	}

	model.raw = function(query)
	{
		return this.run(query);
	}

	model.where = function(condition)
	{
		this._condition += " and "+this._table+"."+condition[0]+" "+condition[1]+" '"+condition[2]+"' " ;
		return this;
	}

	model.get = function()
	{
	    var query = "select "+this._field+" from "+this._table+" "+this._condition;
	    var rows = model.run(query);
    	return rows;
    }

    model.find = function(id)
    {
    	this._condition="where "+this._primary +"="+id;
    	return this;
    }

    model.run = function(query)
    {
    	console.log(query);
    	return rows = $db.run(query);
    }

	return model;
});