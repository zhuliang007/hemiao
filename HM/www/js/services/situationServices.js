/**
 * Created by zl_sam on 16/4/28.
 */
angular.module("situation.services",[])
  .factory("situationFactory",function(){
    var service ={
      situationGetTime:function(time){
        return $.format.prettyDate(time);
      }
    }
    return service;
  })
