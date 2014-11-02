angular.module('cityApp.factories')
  .factory('cityFactory', function($http){
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
