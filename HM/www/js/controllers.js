angular.module('starter.controllers', [])
  .controller('StartCtrl', function($scope,$state,$ionicModal) {
    $state.go("tabs.home")
    setPublishSelectModal();


    $scope.openModal = function(modalType){
      console.log(modalType);

      switch(modalType){
        case 1:
          $scope.openPublishSelectModal();
              break;
      }
    }


    function setPublishSelectModal(){
      $ionicModal.fromTemplateUrl("templates/modal/hm-modal-publish-select.html",{
        scope:$scope,
        animation:"slide-in-up"
      }).then(function(modal){
        $scope.publishSelectModal = modal;
      })

      $scope.openPublishSelectModal = function() {
        $scope.publishSelectModal.show();
      };
      $scope.closePublishSelectModal = function() {
        $scope.publishSelectModal.hide();
      };
    }
  })

  .controller('HomeCtrl', function($scope) {

  })

  .controller('BuyCtrl', function($scope) {
  })

  .controller('MsgCtrl', function($scope) {
  })


  .controller('PersonalCtrl', function($scope) {
  })

  .controller('PublishSelectCtrl', function($scope) {
  })

