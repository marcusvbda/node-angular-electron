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
	    	var users = $users
	    		.where(["username","=",$scope.username.trim()])
	    			.where(["password","=",$scope.password.trim()])
	    				.get();
	    	console.log($scope.username.trim());
	    	console.log($scope.password.trim());
	    	console.log(users.length);
	    	if (users.length<=0)
	    	{
	    		return $msg.show("Ooops","Senha incorreta ou usuário inexistente","error");
	    	}
	    	else
	    	{
	    		// salva o auth
	        	$location.path("/dashboard");
	    	}
	    }
	}

});
