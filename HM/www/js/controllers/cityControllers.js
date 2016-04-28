angular.module("city.controllers",['city.filters'])
  .controller("cityCtrl",["$scope","$rootScope","$httpServices",function($scope,$rootScope,$httpServices){
    $scope.master = "";
    $rootScope.reset = function(){
      $scope.citySearch = angular.copy($scope.master);
    }

    $httpServices.getObjectFromGet("json/cities.json").success(function(result){

      var cities = result.cities;
      $scope.hotCities = cities.hotCities;
      $scope.cityDatas = cities.cityDatas;
    })

    $scope.changeCity = function(city){
      $rootScope.location = city.cityName;
      $rootScope.closeModal(3)
    }


  }])
