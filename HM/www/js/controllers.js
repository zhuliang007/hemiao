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

      //百度定位
      var map = new BMap.Map("bdMap");          // 创建地图实例
      var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
      map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl());
      map.addControl(new BMap.MapTypeControl());
      $scope.location = "北京";
      getLocation();
      function getLocation(){
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            var geoc = new BMap.Geocoder();
            geoc.getLocation(r.point, function(rs){
              var addComp = rs.addressComponents;
              $scope.location = addComp.city.split("市")[0];
            });
          }
        },{enableHighAccuracy: true})
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

