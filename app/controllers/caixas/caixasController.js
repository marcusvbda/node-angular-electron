angularApp.controller('caixas.Index', function($scope,$route,$db)
{	
	var $caixas = $db.table('caixas');
	$scope.caixaAberto = ($caixas.where(['status','=','A']).get().length>0);

	$scope.frm = {};
	$scope.frm.usuarios    = $auth.user;
	$scope.frm.saldo_inicial = 0;	
	$scope.frm.dt_abertura   = $core.date();
	$scope.frm.hora_abertura = $core.time();

	if($scope.caixaAberto==false)
	{
		$scope.proximoCaixaReal = $caixas.max("id") + 1;
		$scope.frm.proximoCaixa = '#'+$core.pad($scope.proximoCaixaReal,8);		
	}


	$scope.getCaixa = function()
	{
		var caixa = $caixas
		.select('caixas.*,usuarios.usuario')
			.join('usuarios',['usuarios.id','=','caixas.usuario_id'])
				.where(['caixas.status','=','A'])
					.first();
	    if($core.isset(caixa))
	    {
	    	caixa.id = $core.pad( caixa.id , 8);
	    	caixa.usuario_id  = $core.pad( caixa.usuario_id , 8);
	    	caixa.dt_abertura = caixa.dt_abertura.replace("-", "/").replace("-", "/");
	    }	
	    return caixa;
	}
	$scope.caixa = $scope.getCaixa();

	$scope.validationOptions = 
    {
	    rules: 
	    {
	        saldo_inicial: 
	        {
	            required: true,
	            min:0
	        }
	    },
	    messages: 
	    {
	        saldo_inicial: 
	        {
	            required: "Este campo é obrigatório",
	            min: "O saldo inicial não pode ser menor que 0 (ZERO)"
	        }
	    }
	};


	$scope.criarNovoCaixa = function(form)
	{
		if(form.validate()) 
	    {
	    	$core.confirm("Confirmação","Criar caixa número #"+$core.pad( $scope.proximoCaixaReal , 8)+" ?",function()
	    	{
	    		var novoCaixa = 
	    		{
	    			id          :  $scope.proximoCaixaReal,
	    			usuario_id  :  $scope.frm.usuarios.id,
	    			saldo_inicial  :  $scope.frm.saldo_inicial,
	    			saldo_atual    :  $scope.frm.saldo_inicial,
	    			troco_final    :  0,
	    			total_vendas   :  0,
	    			status         :  "A",
	    			hora_abertura     :  $scope.frm.hora_abertura,
	    			dt_abertura       :  $scope.frm.dt_abertura
	    		};
	    		$caixas.insert(novoCaixa);
	    		$route.reload();
	    	}); 
	    }
	}



	
});
