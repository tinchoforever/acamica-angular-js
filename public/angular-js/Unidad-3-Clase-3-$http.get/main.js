var app = angular.module('cityApp', ['ngRoute']);

app.config(['$routeProvider',
function($routeProvider){
  $routeProvider
  .when('/',{
     templateUrl:'main.html',
     controller: 'MainController'
  });
}]);

app.factory('cityFactory', function($http){
  var factory = {};
  factory.getAll = function(callback){
    $http.get('/api/v1/cities/all').success(callback);
  };

  return factory;
});

app.controller('MainController', function($scope, cityFactory) {
  cityFactory.getAll(function(result){
    $scope.cities = result;
  });
});

