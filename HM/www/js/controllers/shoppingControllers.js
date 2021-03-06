/**
 * Created by zl_sam on 16/4/27.
 */
angular.module('shoppings.controllers', [])

      .controller('ShoppingCtrl', ['$scope','$ionicPopover','typeService','situationFactory',function($scope,$ionicPopover,typeService,situationFactory) {

    initList = function(listenerValue){
      doRefresher().success(function(data){
        $scope.userInfoitems = data.zxs;
      }).finally(function(){
        $scope.$broadcast(listenerValue);
      })
    }

    //解析求购状态
    $scope.analysisStatus=function(value){
      switch (value){
        case 0:
              return "";
              break;
        case 1:
              return "已解决";
              break;
      }
    }

    initList("scroll.init");

    //筛选条件弹出框
    $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html',{
      scope:$scope
    }).then(function(popover){
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      var types = this;
      initType().success(function(data){
        types.items = data;
      })
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });

    //触发选择事件
    $scope.clickStatus = function(value){
      //增加触发事件加载求购列表逻辑
      doListRefresher(value);
      $scope.popover.hide();
    }

    //下拉刷新
    $scope.doRefresh = function(){
      initList("scroll.refreshComplete");
    }

    //上拉刷新
    $scope.loadMore = function(){
      loadMore().success(function(data){
        for(var item in data.zxs){
          $scope.userInfoitems.push(data.zxs[item]);
        }
      }).finally(function(){
        $scope.$broadcast("scroll.infiniteScrollComplete");
      })
    }
    $scope.$on('$stateChangeSuccess',function(){
      $scope.loadMore();
    })

    $scope.getTime = function(time){
      return $.format.prettyDate(time);
    };

  }])
  .controller('shopDetailCtrl',['$scope','$state','$ionicModal',function($scope,$state,$ionicModal){

    //显示隐藏官方推荐,后续要根据真实数据调整
    if($state.params.detailId=='里斯'){
      $scope.isShow=false;
    }else{
      $scope.isShow=true;
    }

    $scope.shopBack = function(){
      $state.go("tabs.shopping");
    }

    $ionicModal.fromTemplateUrl('shop-share-modal.html', {
      scope: $scope,
      animation: ''
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });

    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
  }])
