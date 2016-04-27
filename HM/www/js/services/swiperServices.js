angular.module("swiper.services",[])
  /*轮播*/
  .factory("$swiper",function(){

    var $swiper = {}

    $swiper.swipers = [];

    $swiper.init = function(element,option){
      var swiper  = new Swiper(element,option);
      $swiper.swipers[element] =  swiper;
      return swiper;
    }

    return $swiper;
  })
