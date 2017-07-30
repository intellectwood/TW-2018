'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for(let elmenta of collection_b){
      for(let elmentb of collection_a){
          if(elmenta === elmentb) result.push(elmenta);
      }
  }
  
  return result;
}

module.exports = get_intersection;
