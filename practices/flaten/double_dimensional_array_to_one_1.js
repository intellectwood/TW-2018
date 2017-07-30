'use strict';

function double_to_one(collection) {
    let result = [];
    collection.forEach(function(element){
        if (typeof(element) == 'number') result.push(element);
        else result = [...result, ...element]; 
    });
  //在这里写入代码
    return result;
}

module.exports = double_to_one;
