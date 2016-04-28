angular.module("city.filters",[])
  .filter("cityFilter",function(){
    return function(input,filter){
      if(filter){
        filter = filter.toLowerCase();
        //console.log(filter);

        /*var cities = [];
        for(var i=0 ; i<input.length;i++){
          var city = input[i];


        }*/

      }
      return input;
    }
  })
