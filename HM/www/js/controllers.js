angular.module('starter.controllers', [])
<<<<<<< HEAD
  .controller('StartCtrl', ["$ionicPlatform","$scope","$state","$modal","$toast","$file",function($ionicPlatform,$scope,$state,$modal,$toast,$file) {
    $ionicPlatform.ready(function () {
      $state.go("tabs.home");
      $modal.init(config.modals.publishSelectModal.modal, config.modals.publishSelectModal.templateUrl);
      $modal.init(config.modals.loginModal.modal, config.modals.loginModal.templateUrl);
      //$toast.showLoadingWithContent("正在加载中，请稍候...");
      if (window.cordova) {
        $file.setPath(cordova);
      }
    });
=======
  .controller('StartCtrl', ["$scope","$state","$modal","$toast",function($scope,$state,$modal,$toast) {
    $state.go("tabs.home")
    $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
    $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);
    //$toast.showLoadingWithContent("正在加载中，请稍候...");
>>>>>>> origin/master
  }])

  .controller('HomeCtrl', ["$scope","$timeout","$swiper","$http","$toast","$ionicPopup",
    function($scope, $timeout,$swiper,$http,$toast,$ionicPopup) {

      //头部广告设置带有轮播
      $http.get("json/adHome.json").success(function(result) {
<<<<<<< HEAD
        var ads = result.ads;
        $scope.ads = [];
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
            ads[i].fileName = config.filePath.adImg + fileName;
            $scope.ads.push(ads[i]);
          }
        }
=======
        $scope.ads = result.ads;
>>>>>>> origin/master
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
          };
          $swiper.init(".swiper-ad-home",swiperOption);
        },500)
<<<<<<< HEAD
      });

=======
      })
>>>>>>> origin/master
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
          };
          $swiper.init(".swiper-qg-home",swiperOption)
        },500)
<<<<<<< HEAD


      });

      //
      $scope.zxItems = [];
=======
      });
      initView();
>>>>>>> origin/master

      $scope.getTime = function(time){
        return $.format.prettyDate(time);
      };
<<<<<<< HEAD
=======

      $scope.loadMore = function() {
        getNewProduct();
        $scope.$broadcast('scroll.infiniteScrollComplete');
      };

      $scope.$on('$stateChangeSuccess', function() {
        $scope.loadMore();
      });

      $scope.doRefresh = function() {
        initView();
        $scope.$broadcast('scroll.refreshComplete');
      };

      function initView(){
        $scope.zxItems = [];
        //最新商品
        getNewProduct()
      }
>>>>>>> origin/master

      function getNewProduct(){
        $http.get("json/zxHome.json").success(function(result) {
          addNewItem(result.zxs);
        });
      }

<<<<<<< HEAD
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
                     var index = result.object;
                     productImages[index] = result.imageUrl

                   },function(result){
                     var index = result.object;
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
=======
      function addNewItem(items){
        for(var item in items){
          $scope.zxItems.push(items[item]);
>>>>>>> origin/master
        }
      }

    }])

  .controller('ShoppingCtrl', function($scope,$ionicPopover) {

    $scope.items = [
      {name: "最新发布", value: 0},
      {name: "浏览最多", value: 1},
      {name: "已解决", value: 2},
      {name: "未解决", value: 3}
    ];


    //筛选条件弹出框
    var template = '';
    $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html',{
      scope:$scope
    }).then(function(popover){
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
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
      $scope.popover.hide();
    }

  })

  .controller('MsgCtrl', function($scope) {
  })


  .controller('PersonalCtrl', function($scope) {
  })

  .controller('PublishSelectCtrl', function($scope) {
  })
