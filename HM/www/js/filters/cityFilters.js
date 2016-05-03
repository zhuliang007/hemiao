angular.module("city.filters",[])
  .filter("cityFilter",function(){
    return function(input,filter){
      if(filter){
        filter = filter.toLowerCase();
        var cities = [];
        for(var i=0 ; i<input.length;i++){
          var city = input[i];
          if(city.cityName.toLowerCase() == filter){
            cities.push(city);
            continue;
          }
          else{
            var filters = city.filter?city.filter.split(";"):[];
            for(var j = 0 ; j<filters.length ; j++){
              if(filters[j].toLowerCase() == filter){
                cities.push(city);
                break;
              }
              else{
                continue;
              }
            }
          }
        }
        return cities;
      }
      return input;
    }
  })
