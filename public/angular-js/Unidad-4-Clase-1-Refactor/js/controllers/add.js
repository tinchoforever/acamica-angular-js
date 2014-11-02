angular.module('cityApp.controllers')
  .controller('AddController', function($scope, cityFactory) {
  
  $scope.status= '';

  $scope.agregar = function(){
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

      $scope.status ='';

    },function (result) {
      console.log(result);
      $scope.status ='alert alert-error';
      $scope.error = result.error;
      $scope.fail = true;
    });
    
    
  };
});