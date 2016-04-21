angular.module('starter.controllers', [])
  .controller('StartCtrl', ["$scope","$state","$modal","$loading",function($scope,$state,$modal,$loading) {
    $state.go("tabs.home")
    $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
    $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);

    $scope.openModal = function(modalType){
      console.log(modalType);
      switch(modalType){
        case 1:
          $modal.openModal(config.modals.publishSelectModal.modal);
          break;
        case 2:
          $modal.openModal(config.modals.loginModal.modal);
          break;
      }
    }

    $loading.showLoadingWithContent("正在加载中，请稍候...",5000);
  }])

  .controller('HomeCtrl', ["$scope","$timeout","$loading",function($scope, $timeout, $loading) {

  }])

  .controller('ShoppingCtrl', function($scope) {
  })

  .controller('MsgCtrl', function($scope) {
  })


  .controller('PersonalCtrl', function($scope) {
  })

  .controller('PublishSelectCtrl', function($scope) {
  })

