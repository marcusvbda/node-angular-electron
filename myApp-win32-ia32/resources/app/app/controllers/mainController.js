angularApp.controller('mainController', function($scope,$usuarios)
{	
    $scope.firstName = 'Vinicius';
    $scope.lastName = "Bassalobre";
    $scope.fullName = function() 
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

    $scope.sqlite = function()
    {
        var teste = $usuarios.get();        
        console.log(teste);
    };



});
