angular.module('starter.services', ['shoppings.services'])
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

  /*Toast、Loading加载框*/
  .factory("$toast",["$rootScope","$ionicLoading","$cordovaToast",function($rootScope,$ionicLoading,$cordovaToast){
    var $toast = {}

    $toast.showContent = function(msg,duration,position){
      if(window.cordova){
        if(duration){
          $cordovaToast.show(msg,duration,position);
        }
        else{
          $ionicLoading.show({
            template : msg
          })
        }
      }
      else{
        $ionicLoading.show({
          template : msg,
          duration:duration
        })
      }
    }

    $toast.showLoadingWithContent = function(msg,duration){
      $ionicLoading.show({
        templateUrl:"templates/loading/loading.html",
        scope:$rootScope,
        duration:duration
      })
      $rootScope.loadingMsg = msg
    }

    $toast.showLoading = function(duration){
      $ionicLoading.show({
        duration:duration
      })
    }

    $toast.closeLoading = function(){
      $ionicLoading.hide()
    }

    return $toast;
  }])

  /*文件操作*/
  /*.factory("$file",["$ionicPopup","$cordovaFile","$cordovaFileTransfer","$q",function($ionicPopup,$cordovaFile,$cordovaFileTransfer,$q){

    var $file = {};

    $file.filePath = "";

    $file.setPath = function(cordova){
      if(ionic.Platform.isAndroid()){
        $file.filePath = cordova.file.externalDataDirectory
      }else if(ionic.Platform.isIOS()){
        $file.filePath = cordova.file.documentsDirectory
      }
    }

    $file.getPath = function(){
      return $file.filePath;
    }

    $file.checkFile = function(targetPath,fileUrl){
      var fileName = fileUrl.substring(fileUrl.lastIndexOf("/")+1);
      var deferred  = $q.defer();
      $cordovaFile.checkFile(targetPath,fileName)
        .then(function(result){
          deferred.resolve(result.nativeURL);
        },function(){
          var result = {"fileUrl":fileUrl,"targetPath":targetPath+fileName};
          deferred.reject(result);
        })
      return deferred.promise;
    }


    $file.checkFileByObject = function(targetPath,fileUrl,object) {
      var fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
      var deferred = $q.defer();
      $cordovaFile.checkFile(targetPath, fileName)
        .then(function (result) {
          var result = {"imageUrl": result.nativeURL, "object": object}
          deferred.resolve(result);
        }, function () {
          var result = {"imageName": fileName, "object": object}
          deferred.reject(result);
        })
      return deferred.promise;
    }

    $file.downloadFile = function(url,targetPath){
      var deferred  = $q.defer();
      $cordovaFileTransfer.download(url,targetPath)
        .then(function(result){
          deferred.resolve(result);
        },function(result){
          deferred.reject(result);
        })
      return deferred.promise;
    }

    return $file;
  }])*/

  /*轮播*/
  .factory("$swiper",function(){

    var $swiper = {}

    $swiper.swipers = [];

    $swiper.init = function(element,option){
      var swiper  = new Swiper(element,option);
      $swiper.swipers[element] =  swiper;
      return swiper;
    }

    return $swiper;
  })


