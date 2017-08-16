angularApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : './app/views/users/login.html',
            controller  : 'userController'
        })
        .when('/dashboard', {
            templateUrl : './app/views/home/dashboard.html',
            controller  : 'mainController',
            middleware  : 'Auth'
        })

});