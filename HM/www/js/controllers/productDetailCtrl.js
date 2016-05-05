/**
 * Created by Administrator on 2016/5/3.
 */
angular.module("productDetailCtrl",[])
    .controller(config.controllers.productDetail.controller,["$scope","$ionicSlideBoxDelegate","$timeout","$stateParams",function($scope,$ionicSlideBoxDelegate,$timeout,$stateParams){
        var productDetails = {
            product:{
                images:["img/test/test1.png","img/test/test2.png","img/test/test3.png"],
                title:"贝亲新生婴儿清洁护肤礼盒",
                isGF:true,
                targetGF:"官方推荐",
                readers:2180,
                price1:139,
                price2:256,
                carriage:10,
                description:"洗护全套，送宝宝的好礼物。（爽身粉140g、洗发精200ml、沐浴露200ml、润肤露200ml、润肤油200ml）",
                publishTime:"2016-05-04 07:12:00",
                address1:"上海",
                address2:"浦东新区"
            },
            userInfo:{
                userHeadImage:"img/test/test1.png",
                userName:"永远去飞扬"
            },
            replyList:[
                {
                    userHeadImage:"img/test/test1.png",
                    fromUserName:"永远去飞扬",
                    toUserName:"哈哈",
                    replyContent:"看好低owl公开的哈罗德基冠军贾克拉拉",
                    replyTime:"2016-05-01 00:00:00"
                },
                {
                    userHeadImage:"img/test/test1.png",
                    fromUserName:"永远去飞扬",
                    toUserName:"哈哈",
                    replyContent:"看好低owl公开的哈罗德基冠军贾克拉拉",
                    replyTime:"2016-05-01 00:00:00"
                }
            ]
        }
        var slideBox1 = $ionicSlideBoxDelegate.$getByHandle('slideBox1');
        $scope.showPager = false;
        $scope.showProductImage = function(index){
            slideBox1.slide(index);
        }
        $timeout(function(){
            if(slideBox1.slidesCount()>1){
                slideBox1.loop(true);
                $scope.showPager = true;
            }
        },100);

        $scope.resizeImage = function(id,imgUrl){
            var element = document.getElementById(id);
            var $element = angular.element(element);
            $element.css({"height":element.offsetWidth+"px"});

            return {"background-image":"url("+imgUrl+")","-webkit-background-image":"url("+imgUrl+")"};
        }

        $scope.product = productDetails.product;
        console.log($scope.product);
        $scope.userInfo = productDetails.userInfo;
        $scope.replyList = productDetails.replyList;
        $scope.parseTime = function(time){
            return $.format.prettyDate(time);
        }




        /*$scope.loadMore = function() {
         $scope.$broadcast('scroll.infiniteScrollComplete');
         console.log("loadMore");
         };

         $scope.$on('$stateChangeSuccess', function() {
         $scope.loadMore();
         });*/

    }])
