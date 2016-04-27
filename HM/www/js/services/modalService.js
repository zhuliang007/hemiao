angular.module("modal.services",[])
  /*模态框*/
  .factory("$modal",["$rootScope","$ionicModal","$state",function($rootScope,$ionicModal,$state){
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
      switch(modalType){
        case 1:
          $modal.openModal(config.modals.publishSelectModal.modal);
          break;
        case 2:
          $modal.openModal(config.modals.loginModal.modal);
          break;
      }
    }

    $rootScope.goPublish = function(publishType){
      switch (publishType){
        case 1:
          $state.go(config.controllers.publishSale.name)
          break;
        case 2:
          $state.go(config.controllers.publishShopping.name)
          break;
      }
      $rootScope.closeModal(1);
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
