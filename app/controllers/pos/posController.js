angularApp.controller('posIndex', function($scope,$pos)
{	
	$scope.posIsOpen = function()
	{
			var result = $pos.where(['closed','=',false]).get();
			return (result.length>0);
	}

    $scope.pos = $pos.where(['closed','=',false]).get()[0];
    if($core.isset($scope.pos))
    {
    	$scope.pos.id = $core.pad( $scope.pos.id , 8);
    	$scope.pos.dt_opening = $scope.pos.dt_opening.replace("-", "/").replace("-", "/");
    }
    

});
