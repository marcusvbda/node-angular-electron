angularApp.config(['$middlewareProvider',function middlewareProviderConfig($middlewareProvider) 
{  

  $middlewareProvider.map(
  {      

      'Auth': [ function Auth () 
      {
        if($auth.check())
          return this.next();
        else
          return this.redirectTo('/');
      }]


  });  

}]);
