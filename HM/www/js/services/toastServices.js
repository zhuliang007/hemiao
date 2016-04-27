angular.module("toast.services",[])
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
