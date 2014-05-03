var app = angular.module('cityApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/',{ 
       templateUrl:'main.html',
       controller: 'MainController'
    });
}]);

app.controller('MainController', function($scope, $http) {
  $http.get('cities.json').success(function(data){
      $scope.cities = data;
  }); 
});








