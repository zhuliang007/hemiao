angular.module('starter.controllers', ['shoppings.controllers','home.controllers','city.controllers','searchHome.controllers','login.controllers'])
  .controller('StartCtrl', ["$scope","$state","$modal","$toast","$rootScope",function($scope,$state,$modal,$toast,$rootScope) {
    $state.go("tabs.home")
    $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
    $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);
    $modal.init(config.modals.cityModal.modal,config.modals.cityModal.templateUrl);
    //$toast.showLoadingWithContent("正在加载中，请稍候...");

    $scope.login = false;
    $scope.checkLogin = function(){
      if($scope.login){
        $state.go("tabs.personal")
      }
      else{
        $rootScope.openModal(2)
      }
    }

  }])

  .controller('MsgCtrl', function($scope) {
  })

  .controller('PersonalCtrl', function($scope) {
  })

  .controller('publishSaleCtrl', function($scope) {
  })

  .controller('publishShoppingCtrl', function($scope) {
  })


