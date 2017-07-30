'use strict';

function grouping_count(collection) {
    let result = {};
    collection.forEach(function(e){
        result[e] = result[e] >= 1 ? result[e]+1 : 1
    });
    return result;
  //在这里写入代码
}

module.exports = grouping_count;
