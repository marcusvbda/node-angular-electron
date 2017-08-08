angularApp.controller('mainController', function($scope,$msg,$usuarios)
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
        // $usuarios.find(2).delete();
        // $usuarios.insert({"id":2,"usuario":"teste","senha":"12345"});
        // $usuarios.find(2).update({"usuario":"driely"});
        // $usuarios.where(['id','=',2]).update({"usuario":"Driely da Silva Aoyama"});
        // var teste = $usuarios.find(2).get();

        // var teste =
        //  $usuarios
        //     .join("enderecos_usuarios",["enderecos_usuarios.usuario","=","usuarios.id"])
        //         .join("endereco",["enderecos_usuarios.endereco","=","endereco.id"])
        //             .select("usuarios.usuario")
        //                 .where(["id","=",1])
        //                     .get();
        console.log(teste);
    };



});
