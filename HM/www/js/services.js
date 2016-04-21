angular.module('starter.services', [])
  /*模态框*/
  .factory("$modal",["$rootScope","$ionicModal",function($rootScope,$ionicModal){
    var $modal = {};

    $modal.modal = null;

    $modal.init = function(modal,templateUrl,animation){
      $ionicModal.fromTemplateUrl(templateUrl,{
        scope:$rootScope,
        animation:animation||"slide-in-up"
      }).then(function(modalObject){
        $modal[modal] = modalObject;
      })
    }

    $rootScope.openModal = function(modalType){
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

    $rootScope.closeModal = function(modalType) {
      switch (modalType) {
        case 1:
          $modal.closeModal(config.modals.publishSelectModal.modal);
          break;
        case 2:
          $modal.closeModal(config.modals.loginModal.modal);
          break;
      }
    }

    $modal.openModal = function(modal){
      this[modal].show();
    }

    $modal.closeModal = function(modal) {
      $modal[modal].hide();
    };

    return $modal;

  }])

  /*Loading加载框*/
  .factory("$loading",["$rootScope","$ionicLoading",function($rootScope,$ionicLoading){
    var $loading = {}

    $loading.showLoadingWithContent = function(msg,duration){
      $ionicLoading.show({
        templateUrl:"templates/loading/loading.html",
        scope:$rootScope,
        duration:duration
      })
      $rootScope.loadingMsg = msg
    }

    $loading.showContent = function(msg,duration){
      $ionicLoading.show({
        template : msg,
        duration:duration
      })
    }

    $loading.showLoading = function(duration){
      $ionicLoading.show({
        duration:duration
      })
    }

    $loading.closeLoading = function(){
      $ionicLoading.hide()
    }


    return $loading;
  }])

