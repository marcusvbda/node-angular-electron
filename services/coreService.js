var $core = {};
$core.md5 = function(text)
{
	md5 = require('md5');
	return md5(text);
}

$core.msg = function(title,text,icon)
{
	return swal(
	  title,
	  text,
	  icon
	);
};

$core.simplemsg = function(text)
{
	return swal(text)
};

$core.confirm = function(title,text,func)
{
	return 	swal({
	  title: title,
	  text: text,
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: "Sim",
	  cancelButtonText:  "Não",
	}).then(function()
	{
		func()
	});
};

$core.notify = function(msg,type,side)
{
	$.notify(
	{
    	icon: 'notifications',
    	message: msg
    },{
        type: type,
        timer: 500,
        placement: {
            from: side[0],
            align: side[1]
        }
    });
};


$core.date = function()
{
	var date = new Date();
	var month=date.getMonth(); 
	if (month < 10)
        month = "0" + month        
	var day=date.getDate();
	if (day < 10)
        day = "0" + day        
	return  day+"/"+month+"/"+date.getFullYear(); 
}

$core.time = function()
{
	var date = new Date();
	var hour    = date.getHours(); 
	if (hour < 10)
        hour = "0" + hour            
	var min     = date.getMinutes();   
	if (min < 10)
        min = "0" + min    
	var seg     = date.getSeconds();     
	if (seg < 10)
        seg = "0" + seg  
	return hour+":"+min+":"+seg;   
}

$core.getScope = function(controller,variable)
{
	return $('[ng-controller="'+controller+'"]').scope()[variable];
}


$core.pad = function(num, places)
{
    var zero = places - num.toString().length + 1;
  	return Array(+(zero > 0 && zero)).join("0") + num;
}

$core.isset = function(object)
{
	return (typeof object !=='undefined');
}