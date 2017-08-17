angularApp.controller('templateController', function($scope,$location)
{	
  	$scope.env = $env;
  	$scope.btnActive = "";

  	$scope.loadPage = function(page)
  	{
  		$location.path(page);	
  	}
});
