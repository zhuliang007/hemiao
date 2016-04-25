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

    $file.show = function(msg,title){
      $ionicPopup.alert({
        title: title||'message',
        template: msg
      });
    }

    $file.setPath = function(){
      if(window.cordova){
        if(ionic.Platform.isAndroid()){
          $file.filePath = cordova.file.externalDataDirectory
        }else if(ionic.Platform.isIOS()){
          $file.filePath = cordova.file.documentsDirectory
        }
      }
    }

    $file.getPath = function(){
      return $file.filePath;
    }

    $file.checkFile = function(targetPath,fileName){
      var deferred  = $q.defer();
      $cordovaFile.checkFile(targetPath,fileName)
        .then(function(result){
          deferred.resolve(result);
        },function(result){
          deferred.reject(result);
        })
      return deferred.promise;
    }

    $file.checkFiles = function(targetPath,files,success,error){
      for(var file in files){
        $cordovaFile.checkFile(targetPath,files[file].fileName)
          .then(function(result){
            success("success==="+files[file].fileName)
          },function(result){
            error("error==="+files[file].fileName)
          })
      }
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

  .factory("$swiper",function(){

    var $swiper = {}

    $swiper.swipers = [];

    $swiper.init = function(element,option){
      var swiper  = new Swiper(element,option);
      $swiper.swipers[element] =  swiper;
      console.log($swiper.swipers)
    }

    $swiper.update = function(element){
      $swiper.swipers[element].updateContainerSize();
      $swiper.swipers[element].updateSlidesSize();
      $swiper.swipers[element].updateProgress();
      $swiper.swipers[element].updatePagination();
      $swiper.swipers[element].updateClasses();
      $swiper.swipers[element].update(true);
      $swiper.swipers[element].reLoop();
    }

    return $swiper;
  })


