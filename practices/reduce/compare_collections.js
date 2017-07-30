'use strict';

function compare_collections(collection_a, collection_b){
    let result = true;
    collection_a.forEach((element) => {
        if (!collection_b.includes(element)) result = false;
    });
    collection_b.forEach((element) => {
        if (!collection_a.includes(element)) result = false;
    });
    return result;
  //在这里写入代码
}

module.exports = compare_collections;


