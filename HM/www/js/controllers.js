angular.module('starter.controllers', [])
  .controller('StartCtrl', ["$ionicPlatform","$scope","$state","$modal","$toast","$file",function($ionicPlatform,$scope,$state,$modal,$toast,$file) {
    $ionicPlatform.ready(function(){
      $state.go("tabs.home")
      $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
      $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);
      //$toast.showLoadingWithContent("正在加载中，请稍候...");
      if(window.cordova){
        $file.setPath(cordova);
      }
    })
  }])

  .controller('HomeCtrl', ["$scope","$timeout","$swiper","$http","$toast","$file","$ionicPopup",
    function($scope, $timeout,$swiper,$http,$toast,$file,$ionicPopup) {

      /*$scope.loadMore = function() {
       $scope.$broadcast('scroll.infiniteScrollComplete');
       };

       $scope.$on('$stateChangeSuccess', function() {
       $scope.loadMore();
       });*/

      //头部广告设置带有轮播
      $http.get("json/adHome.json").success(function(result) {
        var ads = result.ads;
        $scope.ads = []
        for(var i = 0 ; i<ads.length ; i++){
          var requestUrl = ads[i].fileName.substring(0,ads[i].fileName.lastIndexOf("/")) ?
            ads[i].fileName.substring(0,ads[i].fileName.lastIndexOf("/")) : config.requestUrl.test+config.filePath.adImg;
          var fileName = ads[i].fileName.substring(ads[i].fileName.lastIndexOf("/")+1);
          var fileUrl = requestUrl + fileName;
          if(window.cordova){
            $file.checkFileByObject($file.getPath(),fileUrl,ads[i])
              .then(function(result){
                var item = result.object;
                item.fileName = result.imageUrl;
                $scope.ads.push(item);
              },function(result){
                var item = result.object;
                item.fileName = requestUrl + result.imageName;
                $scope.ads.push(item);
                $file.downloadFile(requestUrl+result.imageName,$file.getPath()+result.imageName);
              })
          }
          else{
            ads[i].fileName = config.filePath.adImg + fileName
            $scope.ads.push(ads[i]);
          }
        }
        $timeout(function(){
          var swiperOption = $scope.ads.length>1 ?
          { direction: "horizontal",
            loop: true,
            autoplay:2000,
            autoplayDisableOnInteraction:false,
            pagination:".swiper-pagination-ad-home",
            paginationClickable:true,
            autoHeight:true
          } :
          {
            direction: "horizontal",
            loop: false,
            autoplayDisableOnInteraction:false,
            autoHeight:true
          }
          $swiper.init(".swiper-ad-home",swiperOption);
        },500)
      })

      //求购信息
      $http.get("json/qgHome.json").success(function(result) {
        $scope.qgGroups = result.qgs;
        $timeout(function(){
          var swiperOption = $scope.qgGroups.length>1 ?
          { direction: "vertical",
            loop: true,
            autoplay:1500,
            autoplayDisableOnInteraction:false,
            paginationClickable:true,
          } :
          {
            direction: "vertical",
            loop: false,
            autoplayDisableOnInteraction:false,
          }
          $swiper.init(".swiper-qg-home",swiperOption)
        },500)


      })

      //
      $scope.zxItems = [];

      $scope.getTime = function(time){
        return $.format.prettyDate(time);
      }

      $http.get("json/zxHome.json").success(function(result) {
        var zxs = result.zxs;
        for(var i = 0 ; i < zxs.length ; i++){

          var userHeadImage = zxs[i].userInfo.userHeaderImage;
          var requestUserHeaderImgUrl = userHeadImage.substring(0,userHeadImage.lastIndexOf("/")) ?
            userHeadImage.substring(0,userHeadImage.lastIndexOf("/")):config.requestUrl.test+config.filePath.userHead;
          var userHeadFileName = userHeadImage.substring(userHeadImage.lastIndexOf("/")+1);
          var userHeadFileUrl = requestUserHeaderImgUrl+ userHeadFileName;

          if(window.cordova){
            $file.checkFileByObject($file.getPath(),userHeadFileUrl,zxs[i])
              .then(function(result){
                var item = result.object;
                item.userInfo.userHeaderImage = result.imageUrl;
                $scope.zxItems.push(item);

                checkProductImages(item);

              },function(result){
                var item = result.object;
                item.userInfo.userHeaderImage = requestUserHeaderImgUrl + result.imageName;
                $scope.zxItems.push(item);
                $file.downloadFile(requestUserHeaderImgUrl + result.imageName,$file.getPath()+result.imageName);
                checkProductImages(item);
              })
          }
          else{
            zxs[i].userInfo.userHeaderImage = config.filePath.userHead + userHeadFileName;
            $scope.zxItems.push(zxs[i]);
            checkProductImages(zxs[i]);
          }

          function checkProductImages(item){
           $timeout(function(){
             var productImages =  item.productInfo.productImages;
             for(var j = 0 ; j < productImages.length ;j++){
               var productImage = productImages[j];
               var requestProductImgUrl = productImage.substring(0,productImage.lastIndexOf("/")) ?
                 productImage.substring(0,productImage.lastIndexOf("/")):config.requestUrl.test+config.filePath.productImg;
               var requestProductFileName = productImage.substring(userHeadImage.lastIndexOf("/")+1);
               var requestProductFileUrl = requestProductImgUrl+ requestProductFileName;
               if(window.cordova){
                 $file.checkFileByObject($file.getPath(),requestProductFileUrl,j)
                   .then(function(result){
                     var index = result.object
                     productImages[index] = result.imageUrl

                   },function(result){
                     var index = result.object
                     productImages[index] = requestProductImgUrl + result.imageName;
                     $file.downloadFile(requestProductImgUrl + result.imageName,$file.getPath()+result.imageName);
                   })
               }
               else{
                 item.productInfo.productImages[j] = config.filePath.productImg + requestProductFileName;
               }
             }
           },500);
          }
        }
      })

    }])

  .controller('ShoppingCtrl', function($scope) {
  })

  .controller('MsgCtrl', function($scope) {
  })


  .controller('PersonalCtrl', function($scope) {
  })

  .controller('PublishSelectCtrl', function($scope) {
  })

