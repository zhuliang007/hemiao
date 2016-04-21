angular.module('starter.controllers', [])
  .controller('StartCtrl', ["$scope","$state","$modal","$loading",function($scope,$state,$modal,$loading) {
    $state.go("tabs.home")
    $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
    $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);
    //$loading.showLoadingWithContent("正在加载中，请稍候...",5000);
  }])

  .controller('HomeCtrl', ["$scope","$timeout","$loading",function($scope, $timeout, $loading) {
    $scope.loadMore = function() {
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadMore();
    });



  }])

  .controller('ShoppingCtrl', function($scope) {
  })

  .controller('MsgCtrl', function($scope) {
  })


  .controller('PersonalCtrl', function($scope) {
  })

  .controller('PublishSelectCtrl', function($scope) {
  })

