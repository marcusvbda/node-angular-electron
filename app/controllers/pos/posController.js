angularApp.controller('posIndex', function($scope,$route,$db)
{	
	$pos = $db.table('pos');
	$scope.user = $auth.user;
	$scope.opening_balance = 0;	
	$scope.posIsOpen = ($pos.where(['closed','=',false]).get().length>0);
	$scope.dt_opening = $core.date();
	$scope.time_opening = $core.time();

	if($scope.posIsOpen==false)
	{
		$scope.nextPos = '#'+$core.pad($pos.max("id") + 1,8);
		$scope.real_nextPos = $pos.max("id") + 1;
	}

	$scope.getPos = function()
	{
		var pos = $pos.where(['closed','=',false]).first();
	    if($core.isset($scope.pos))
	    {
	    	pos.id = $core.pad( $scope.pos.id , 8);
	    	pos.user_id  = $core.pad( $scope.pos.user_id , 8);
	    	pos.dt_opening = $scope.pos.dt_opening.replace("-", "/").replace("-", "/");
	    }	
	    return pos;
	}
	$scope.pos = $scope.getPos();

	$scope.validationOptions = 
    {
	    rules: 
	    {
	        opening_balance: 
	        {
	            required: true,
	            min:0
	        }
	    },
	    messages: 
	    {
	        opening_balance: 
	        {
	            required: "Este campo é obrigatório",
	            min: "O saldo inicial não pode ser menor que 0 (ZERO)"
	        }
	    }
	};


	// revisar parar usar ng-model, não sei pq nao esta funcionando
	$scope.createNewPos = function(form,opening_balance,time_opening)
	{
		if(form.validate()) 
	    {
	    	$core.confirm("Confirmação","Criar caixa número #"+$core.pad( $scope.real_nextPos , 8)+" ?","warning",function()
	    	{
	    		var newPos = 
	    		{
	    			id       :  $scope.real_nextPos,
	    			user_id  :  $scope.user.id,
	    			opening_balance  :  opening_balance,
	    			real_balance     :  opening_balance,
	    			final_change     :  0,
	    			closed           :  false,
	    			time_opening     :  time_opening,
	    			dt_opening       :  $scope.dt_opening
	    		};
	    		var id_new_pos = $pos.insert(newPos);
	    		$route.reload();
	    	},["Sim","Não"]); 
	    }
	}



	
});
