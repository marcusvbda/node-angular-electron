angularApp.controller('mainController', function($scope,$model,$msg)
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
        // var teste = $model.table('pessoas').where(["nome","like","%Vin%"]).get();
        // var teste = $model.table('pessoas').where(["id","=",1]).update("nome = 'Marcus Vinicius Bassalobre de Assis'");
        // teste = $model.table('pessoas').find(1).get();

        console.log($model.raw("select * from pessoas where id=3"));
    };



});
