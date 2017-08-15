angularApp.controller('userController', function($env,$scope,$location,$users)
{	
    $scope.env  = $env;
    $scope.username = "";
    $scope.password = "";

    $scope.validationOptions = 
    {
	    rules: {
	        username: {
	            required: true,
	            maxlength:50
	        },
	        password: {
	            required: true,
	            maxlength:50
	        }
	    },
	    messages: {
	        username: {
	            required: "Este campo é obrigatório",
	            maxlength: "O limite de caracteres é 50"
	        },
	        password: {
	            required: "Este campo é obrigatório",
	            maxlength: "O limite de caracteres é 50"
	        }
	    }
	};

    $scope.login = function (form) 
    {
	    if(form.validate()) 
	    {
	    	var info = {"username":$scope.username.trim(),"password":$core.md5($scope.password.trim())};
	    	if ($auth.login(info,$users))
	        	$location.path("/dashboard");	    		
	    	else
	    		return $core.msg("Ooops","Senha incorreta ou usuário inexistente","error");

	    }
	}

});
