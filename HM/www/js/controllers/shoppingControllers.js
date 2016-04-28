/**
 * Created by zl_sam on 16/4/27.
 */
angular.module('shoppings.controllers', [])

  .controller('ShoppingCtrl', ['$scope','$ionicPopover','typeService',function($scope,$ionicPopover,typeService) {

    //筛选条件弹出框
    var template = '';
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
      $scope.popover.hide();
    }
  }])
