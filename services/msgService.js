var $msg = {};
$msg.show = function(title,text,icon)
{
	return swal(
	  title,
	  text,
	  icon
	);
};

$msg.simple = function(text)
{
	return swal(text)
};

$msg.confirm = function(title,text,icon,func,btn)
{
	return 	swal({
	  title: title,
	  text: text,
	  type: icon,
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: btn[0],
	  cancelButtonText:  btn[1],
	}).then(function()
	{
		func()
	});
};