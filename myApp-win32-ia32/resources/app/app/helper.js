var $helper = {};

$helper.date = function()
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

$helper.time = function()
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