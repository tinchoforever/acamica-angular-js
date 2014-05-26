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

  factory.add = function(city,callback,onError){
    $http.post('/api/v1/cities',city)
      .success(callback)
      .error(onError);
  };

  factory.delete = function(city,callback){
    $http.delete('/api/v1/cities/' + city._id).success(callback);
  };
  return factory;
});
app.controller('MainController', function($scope, cityFactory) {

  var loadCities = function(){
      cityFactory.getAll(function(result){
      $scope.cities = result;
    });
  }

  $scope.remover = function(city){
    cityFactory.delete(city, function(result){
      loadCities();
    });
  }

  loadCities();
});

app.controller('AddController', function($scope, cityFactory) {

  $scope.status= '';

  $scope.agregar = function(){
    $scope.success = false;
    var newCity = {
      name: $scope.newCity,
      country: $scope.newCountry
    };
    cityFactory.add(newCity, function(result){

      $scope.success = true;
      $scope.lastCity = newCity;

      $scope.newCity= '';
      $scope.newCountry = '';

      $scope.error = '';
      $scope.fail = false;



    },function (result) {
      console.log(result);
      $scope.status ='alert alert-error';
      $scope.error = result.error;
      $scope.fail = true;
    });


  };
});
