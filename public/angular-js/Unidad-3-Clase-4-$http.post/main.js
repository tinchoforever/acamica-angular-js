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
  factory.add = function(city,callback){
    $http.post('/api/v1/cities',city).success(callback);

  };

  factory.delete = function(city,callback){
    $http.delete('/api/v1/cities/' + city._id).success(callback);
  };
  return factory;
});

app.controller('MainController', function($scope, cityFactory) {

  $scope.loadCities = function(){
    cityFactory.getAll(function(result){
      $scope.cities = result;
    });
  }

  $scope.remover = function(city){
    cityFactory.delete(city, function(result){
      $scope.loadCities()

    });
  }

  $scope.loadCities();
});

app.controller('AddController', function($scope, cityFactory) {

  $scope.agregar = function(){
    var newCity = {
      name: $scope.newCity,
      country: $scope.newCountry
    };

    cityFactory.add(newCity, function(result){
      $scope.newCity= '';
      $scope.newCountry = '';
    });


  };
});
