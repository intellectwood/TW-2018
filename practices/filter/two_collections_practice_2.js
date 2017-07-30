'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    let result = collection_a.filter(function(element){
        return !collection_b.includes(element);
        });
    return result;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
