angularApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : './app/views/users/login.html',
            controller  : 'userLogin'
        })
        .when('/dashboard', {
            templateUrl : './app/views/main/index.html',
            controller  : 'mainIndex',
            middleware  : 'Auth'
        })
        .when('/pos', {
            templateUrl : './app/views/pos/index.html',
            controller  : 'posIndex',
            middleware  : 'Auth'
        })

});