angular.module('starter.controllers', ['shoppings.controllers','home.controllers','city.controllers'])
  .controller('StartCtrl', ["$scope","$state","$modal","$toast",function($scope,$state,$modal,$toast) {
    $state.go("tabs.home")
    $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
    $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);
    $modal.init(config.modals.cityModal.modal,config.modals.cityModal.templateUrl);
    //$toast.showLoadingWithContent("正在加载中，请稍候...");
  }])

  .controller('MsgCtrl', function($scope) {
  })

  .controller('PersonalCtrl', function($scope) {
  })

  .controller('publishSaleCtrl', function($scope) {
  })

  .controller('publishShoppingCtrl', function($scope) {
  })


