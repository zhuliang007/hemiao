/**
 * Created by Administrator on 2016/5/3.
 */
angular.module("searchHead.directives",[])
  .directive("searchHead",function(){
    var $searchHead = {}

    $searchHead.templateUrl = "templates/search/search-head.html";
    $searchHead.replace = true;

    return $searchHead;
  })

