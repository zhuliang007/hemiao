/**
 * Created by zl_sam on 16/4/27.
 */
angular.module('shoppings.services', [])
  .service("typeService",["$http",function typeService($http){
    //初始化筛选类型
    initType = function (){
      return $http.get("json/shoppingTypes.json").success(function(data){
        return data;
      })
    }
  }])
