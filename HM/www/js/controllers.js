angular.module('starter.controllers', [])
  .controller('StartCtrl', ["$scope","$state","$modal","$toast",function($scope,$state,$modal,$toast) {
    $state.go("tabs.home")
    $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
    $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);
    //$toast.showLoadingWithContent("正在加载中，请稍候...");

  }])

  .controller('HomeCtrl', ["$scope","$timeout","$swiper","$http","$toast",
    function($scope, $timeout,$swiper,$http,$toast) {


      $http.get("json/adHome.json").success(function(result) {
        var ads = result.ads;
        $scope.ads = [];
        for(var ad in ads){
          $scope.ads.push(config.requestUrl.test+config.filePath.adImg+ads[ad].fileName);
        }

        $timeout(function(){
          var swiperOption = $scope.ads.length>1?{direction: 'horizontal',loop: true,autoplay:2000,autoplayDisableOnInteraction:false}:
          {direction: 'horizontal', loop: false,autoplayDisableOnInteraction:false}
          $swiper.init(".swiper-ad-home",swiperOption);
        },500)


        /*$scope.loadMore = function() {
         $scope.$broadcast('scroll.infiniteScrollComplete');
         };

         $scope.$on('$stateChangeSuccess', function() {
         $scope.loadMore();
         });*/

        /*var imgUrl = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png";
         var fileName = imgUrl.substring(imgUrl.lastIndexOf("/")+1);
         var targetPath = $file.getPath() +
         var checkFile = $file.checkFile(fileName);
         if(checkFile){
         checkFile.then(function(result){
         $scope.imgHead = result.nativeURL;
         },function(){
         $scope.imgHead = imgUrl;
         $file.downloadFile(imgUrl,targetPath)
         })
         }
         else{
         $scope.imgHead = imgUrl;
         }*/
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

