angular.module("file.services",[])
  /*文件操作*/
  .factory("$file",["$ionicPopup","$cordovaFile","$cordovaFileTransfer","$q",function($ionicPopup,$cordovaFile,$cordovaFileTransfer,$q){

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
  }])
