angularApp.controller('templateNavbar', function($scope,$location)
{	
  	$scope.env = $env;
  	$scope.btnActive = "";

  	$scope.loadPage = function(page)
  	{
  		$location.path(page);	
  	}
});
