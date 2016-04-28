angular.module("http.services",[])
.factory("$httpServices",["$http",function($http){
  var $httpServices = {}
  $httpServices.getObjectFromGet = function(action){
    return $http.get(action).success(function(result){
        return result;
      })
  }

  return $httpServices;

}])
