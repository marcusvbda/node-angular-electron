angularApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : './app/views/usuarios/login.html',
            controller  : 'usuarios.Login'
        })
        .when('/dashboard', {
            templateUrl : './app/views/principal/index.html',
            controller  : 'principal.Index',
            middleware  : 'Auth'
        })
        .when('/caixas', {
            templateUrl : './app/views/caixas/index.html',
            controller  : 'caixas.Index',
            middleware  : 'Auth'
        })

});