"USE STRICT";
angularApp.factory("$db", function()
{
	var model      = {};
	model._primary = "id";
	model._query   = "select";
	model._table   = "";
	model._field   = "*";
	model._unions  = "";
	model._condition = "where 1=1";

	model.table = function(table)
	{
		this._table = table;		
		return this;
	}

	model.select = function(fields)
	{
		this._field =" "+fields+" ";
		return this;
	}

	model.join = function(table,condition)
	{
		this._unions += " join "+table+" on "+condition[0]+condition[1]+condition[2];
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
	    var query = "select "+this._field+" from "+this._table+" "+" "+this._unions+" "+this._condition;
		this.init();
	    var rows = this.run(query);
		return rows;
	}

	model.first = function()
	{
	    var query = "select "+this._field+" from "+this._table+" "+" "+this._unions+" "+this._condition;
		this.init();
		console.log(query);
	    var rows = this.run(query);
	    if($core.isset(rows))
	    	return rows[0];
	    else
	    	return null;
	}

	model.find = function(id)
	{
		this._condition="where "+this._primary +"="+id;
		return this;
	}

	model.run = function(query)
	{
	 	var db = $db.init();
		rows = db.run(query);
		this.init();
	    return rows;
	}

	model.init = function()
	{
		this._primary = "id";
		this._query = "select";
		this._field = "*";
	    this._unions = "";
	    this._condition = "where 1=1";
	}

	model.max = function(field)
	{
		this._field = "max("+field+") as max";
		return this.first().max;
	}


	return model;
});