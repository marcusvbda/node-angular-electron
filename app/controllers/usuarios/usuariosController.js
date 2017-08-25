angularApp.controller('usuarios.Login', function($scope,$location,$usuarios,$caixas)
{		
	$scope.frm = {};
    $scope.frm.usuario = "";
    $scope.frm.senha = "";

    $scope.validationOptions = 
    {
	    rules: {
	        usuario: {
	            required: true,
	            maxlength:50
	        },
	        senha: {
	            required: true,
	            maxlength:50
	        }
	    },
	    messages: {
	        usuario: {
	            required: "Este campo é obrigatório",
	            maxlength: "O limite de caracteres é 50"
	        },
	        senha: {
	            required: "Este campo é obrigatório",
	            maxlength: "O limite de caracteres é 50"
	        }
	    }
	};

    $scope.login = function (form) 
    {
	    if(form.validate()) 
	    {
	    	var info = {"usuario":$scope.frm.usuario.trim(),"senha":$core.md5($scope.frm.senha.trim())};
	    	if ($auth.login(info,$usuarios))
	        	$location.path("/dashboard");	    		
	    	else
	    		return $core.notify("Senha incorreta e/ou usuário inexistente","danger",['bottom','right']);
	    }
	}





});
