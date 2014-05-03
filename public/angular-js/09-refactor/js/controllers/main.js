angular.module('cityApp.controllers')
  .controller('MainController', function($scope, cityFactory) {
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

