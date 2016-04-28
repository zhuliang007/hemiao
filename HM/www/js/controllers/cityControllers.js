angular.module("city.controllers",[])
  .controller("cityCtrl",["$scope","$rootScope",function($scope,$rootScope){
    $scope.master = "";
    $rootScope.reset = function(){
      $scope.citySearch = angular.copy($scope.master);
    }




  }])
