angular.module("city.controllers",['city.filters'])
  .controller("cityCtrl",["$scope","$rootScope","$httpServices","$location","$anchorScroll",function($scope,$rootScope,$httpServices,$location,$anchorScroll){
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


    $scope.anchorCity = function(x){
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        $location.hash('anchor' + x);
      } else {
        $anchorScroll();
      }
    }



  }])
