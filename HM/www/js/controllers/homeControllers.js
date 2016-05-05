angular.module("home.controllers",[])
  .controller('HomeCtrl', ["$scope","$timeout","$swiper","$http","$toast","$ionicPopup","$httpServices","$rootScope","$state",
    function($scope, $timeout,$swiper,$http,$toast,$ionicPopup,$httpServices,$rootScope,$state) {

      //头部广告设置带有轮播
      $httpServices.getObjectFromGet("json/adHome.json").success(function(result){
        $scope.ads = result.ads;
        console.log($scope.ads)
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


      //计算图片控件的比例宽高
      $scope.resizeImage = function(element,imageUrl,scale){
        var element = document.getElementById(element);
        var scaleOption = parseInt(scale.split(":")[0],10)/parseInt(scale.split(":")[1],10);
        var $element = angular.element(element);
        $element.css({"height":(element.offsetWidth/scaleOption)+"px"});
        return {"background-image":"url("+imageUrl+")","-webkit-background-image":"url("+imageUrl+")"};
      }

      //求购信息
      $httpServices.getObjectFromGet("json/qgHome.json").success(function(result) {
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

      function initView(){
        $scope.zxItems = [];
        //最新商品
        getNewProduct()
      }

      function getNewProduct(){
        $httpServices.getObjectFromGet("json/zxHome.json").success(function(result) {
          addNewItem(result.zxs);
        });
      }

      function addNewItem(items){
        for(var item in items){
          $scope.zxItems.push(items[item]);
        }
      }

      $rootScope.location = "北京";
      //百度定位
      var map = new BMap.Map("bdMap");          // 创建地图实例
      var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
      map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.ScaleControl());
      map.addControl(new BMap.OverviewMapControl());
      map.addControl(new BMap.MapTypeControl());

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
              $rootScope.location = addComp.city.split("市")[0];
            });
          }
        },{enableHighAccuracy: true})
      }

      $scope.loadMore = function() {
        getNewProduct();
        $scope.$broadcast('scroll.infiniteScrollComplete');
      };

      $scope.$on('$stateChangeSuccess', function() {
        $scope.loadMore();
      });

      $scope.goSearch = function(){
        $state.go("searchHome");
      }

    }])
