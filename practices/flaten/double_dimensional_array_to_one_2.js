'use strict';

function double_to_one(collection) {
    let result = [];
    collection.forEach(function(element){
        result = [...result, ...element];
    })
    result = result.filter(function(element,index,array){
        return array.indexOf(element) == index;
    });
    return result;
  //在这里写入代码
}

module.exports = double_to_one;
