angularApp.controller('mainController', function($env,$scope,$users)
{	
    $scope.env = $env;
    $scope.firstName = 'Vinicius';
    $scope.lastName  = "Bassalobre";
    $scope.fullName  = function() 
    {
        return $scope.firstName + " " + $scope.lastName;
    };

    $scope.testmsg = function()
    {
    	return $msg.confirm("Confirma","confirma ??","error",function()
        {
            alert($scope.firstName);
        },["Confirmar","Cancelar"]);
    };

    $scope.teste = function()
    {
        return console.log($auth.user);
    };



});
