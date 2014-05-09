angular.module('cityApp.controllers', []);
angular.module('cityApp.factories', []);

angular.module('cityApp', [
  'ngRoute',
  'cityApp.controllers',
  'cityApp.factories'])
  .config(['$routeProvider',
    function($routeProvider){
      $routeProvider
      .when('/',{
         templateUrl:'partials/main.html',
         controller: 'MainController'
      }).when('/agregar',{
         templateUrl:'partials/agregar.html',
         controller: 'AddController'
      });
}]);


