'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    let result = collection_a.filter(function(element){
        for(let e of collection_b){
            if (element % e == 0) return true;
        }
        return false;
    });
    return result;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
