angular.module('starter.controllers', [])
  .controller('StartCtrl', ["$scope","$state","$modal","$toast",function($scope,$state,$modal,$toast) {
    $state.go("tabs.home")
    $modal.init(config.modals.publishSelectModal.modal,config.modals.publishSelectModal.templateUrl);
    $modal.init(config.modals.loginModal.modal,config.modals.loginModal.templateUrl);
    //$toast.showLoadingWithContent("正在加载中，请稍候...");
  }])

  .controller('HomeCtrl', ["$scope","$timeout","$swiper","$http","$toast","$ionicPopup",
    function($scope, $timeout,$swiper,$http,$toast,$ionicPopup) {

      //头部广告设置带有轮播
      $http.get("json/adHome.json").success(function(result) {
        $scope.ads = result.ads;
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
      });
      initView();

      $scope.getTime = function(time){
        return $.format.prettyDate(time);
      };

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

      function getNewProduct(){
        $http.get("json/zxHome.json").success(function(result) {
          addNewItem(result.zxs);
        });
      }

      function addNewItem(items){
        for(var item in items){
          $scope.zxItems.push(items[item]);
        }
      }


      /*var map = new BMap.Map("bdMap");          // 创建地图实例
       var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
       map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别

       map.addControl(new BMap.NavigationControl());
       map.addControl(new BMap.ScaleControl());
       map.addControl(new BMap.OverviewMapControl());
       map.addControl(new BMap.MapTypeControl());

       var geolocation = new BMap.Geolocation();
       geolocation.getCurrentPosition(function(r){
       if(this.getStatus() == BMAP_STATUS_SUCCESS){
       var mk = new BMap.Marker(r.point);
       map.addOverlay(mk);
       map.panTo(r.point);
       var geoc = new BMap.Geocoder();
       geoc.getLocation(r.point, function(rs){
       var addComp = rs.addressComponents;
       alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
       });
       }
       else {
       alert('failed'+this.getStatus());
       }
       },{enableHighAccuracy: true})*/
      //百度定位
      var map = null;
      getLocation();
      function getLocation(){
        if(!map){
          map = new BMap.Map("bdMap");          // 创建地图实例
          var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
          map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
        }

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            var geoc = new BMap.Geocoder();
            geoc.getLocation(r.point, function(rs){
              var addComp = rs.addressComponents;
              console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
            });
          }
          else {
            alert('failed'+this.getStatus());
          }
        },{enableHighAccuracy: true})
      }

    }])

  .controller('ShoppingCtrl', function($scope) {
  })

  .controller('MsgCtrl', function($scope) {
  })


  .controller('PersonalCtrl', function($scope) {
  })

  .controller('PublishSelectCtrl', function($scope) {
  })

