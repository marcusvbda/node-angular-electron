var $auth = {};

$auth.user  = [];

$auth.set = function(user)
{
	this.user = user;
}

$auth.login = function(info,model)
{
	var data = model
    		.where(["username","=",info.username])
    			.where(["password","=",info.password])
    				.get();
    if (data.length>0)
    {
    	this.set(data[0]);
    	return true;
    }
    else
    {
    	this.set([]);
    	return false;
    }
}