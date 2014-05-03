var app = angular.module('cityApp', ['ngRoute']);

app.config(['$routeProvider',
function($routeProvider){
  $routeProvider
  .when('/',{ 
     templateUrl:'main.html',
     controller: 'MainController'
  }).when('/agregar',{ 
     templateUrl:'agregar.html',
     controller: 'AddController'
  });
}]);
app.factory('cityFactory', function($http){
  var factory = {};
  factory.getAll = function(callback){
    $http.get('/api/v1/cities/all').success(callback);
  };
  factory.add = function(city){
    cities.push(city);
  };
  return factory;
});
app.controller('MainController', function($scope, cityFactory) {

  cityFactory.getAll(function(result){
    $scope.cities = result;
  });

});

app.controller('AddController', function($scope, cityFactory) {
  
  $scope.agregar = function(){
    var newCity = {
      name: $scope.newCity,
      country: $scope.newCountry
    };
    cityFactory.add(newCity);
    
    $scope.newCity= '';
    $scope.newCountry = '';
  };
});
