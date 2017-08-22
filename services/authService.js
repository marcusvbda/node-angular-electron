var $auth = {};

$auth.user   = [];
$auth.loged  = false;

$auth.set = function(user)
{
	this.user = user;
}

$auth.login = function(info,model)
{
	var data = model
    		.where(["usuario","=",info.usuario])
    			.where(["senha","=",info.senha])
    				.get();
    if (data.length>0)
    {
        this.loged = true;
    	this.set(data[0]);
    	return true;
    }
    else
    {
        this.set([]);
    	this.loged = false;
    	return false;
    }
}

$auth.logoff = function()
{
    this.set([]);
    this.loged = false;
    return true;
}

$auth.check = function ()
{
    return this.loged;
}