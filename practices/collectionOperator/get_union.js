'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for(let i of collection_b){
      if(!collection_a.includes(i)) collection_a.push(i);
  }
  return collection_a;
}

module.exports = get_union;

