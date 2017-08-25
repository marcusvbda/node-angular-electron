"USE STRICT";
angularApp.factory("$db", function()
{
	var model = function model(config) 
	{
		this._primary = config.primarykey;
		this._query   = "select";
		this._table   = config.table;
		this._field   = "*";
		this._unions  = "";
		this._condition = "where 1=1";

		// $db.table('mytable')  equivalente a $model
		this.table = function(table)
		{
			this._table = table;		
			return this;
		}

		// $model.select("id,nome,endereco")  
		this.select = function(fields)
		{
			this._field =" "+fields+" ";
			return this;
		}

		// $model1.join($model2,["key_model1","=","key_model2"]);
		this.join = function(model,condition)
		{
			this._unions += " join "+model._table+" on "+this._table+"."+condition[0]+condition[1]+model._table+"."+condition[2];
			// console.log(this._unions);
			return this;
		}

		// $model.where(condition).delete();
		this.delete = function()
		{
			this._query = "delete";
			var query = this._query+" from " + this._table+" "+this._condition;
			return this.run(query);
		}

		// $model.insert({});		
		this.insert = function(fields)
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

		// $model.where(condition).update({});	
		this.update = function(fields)
		{
			this._query = "update" ;
		    var query = this._query+" "+this._table+" set ";
		    Object.keys(fields).forEach(function(key) 
		    {
			    query+=" "+key+"="+"'"+fields[key]+"'"+" ,";
			});
		    query = query = query.substring(0, query.length - 1);
		    query+= this._condition;
		    // console.log(query);
			return this.run(query);
		}

		// $db.raw("select * from mytable where id = 2")
		this.raw = function(query)
		{
			return this.run(query);
		};

		// $model.where(["id","=",2])
		this.where = function(condition)
		{
			this._condition += " and "+condition[0]+" "+condition[1]+" '"+condition[2]+"' " ;
			return this;
		}

		// $model.where(condition).get();
		this.get = function()
		{
		    var query = "select "+this._field+" from "+this._table+" "+" "+this._unions+" "+this._condition;
		    // console.log(query);
		    var rows = this.run(query);
			this.init();	    
			return rows;
		}

		// $model.all(); equivalente a $model.get(); sem condição
		this.all = function()
		{
		    var query = "select "+this._field+" from "+this._table+" "+" "+this._unions;
		    // console.log(query);
		    var rows = this.run(query);
			this.init();	    
			return rows;
		}

		// $model.where(condition).first(); primeiro resultado
		this.first = function()
		{
		    var query = "select "+this._field+" from "+this._table+" "+" "+this._unions+" "+this._condition;
			this.init();
		    var rows = this.run(query);
		    if($core.isset(rows))
		    	return rows[0];
		    else
		    	return null;
		}

		// $model.find(1).first();  utiliza o this._primary para encontrar direto
		this.find = function(id)
		{
			this._condition="where "+this._primary +"="+id;
			return this;
		}

		// $model.max("id").get();  traz o valor do maior campo parametro
		this.max = function(field)
		{
			this._field = "max("+field+") as max";
			return this.first().max;
		}

		// $model.max("id").get();  traz o valor do menor campo parametro
		this.min = function(field)
		{
			this._field = "min("+field+") as min";
			return this.first().min;
		}

		this.run = function(query)
		{
		 	var db = $db.init();
			rows = db.run(query);
			this.init();
		    return rows;
		}

		this.init = function()
		{
			this._primary = "id";
			this._query = "select";
			this._field = "*";
		    this._unions = "";
		    this._condition = "where 1=1";
		};


	}

	return model;
});