'use strict';

function calculate_elements_sum(collection) {
    let total = collection.reduce(function(sum, value) {
        return sum + value;
    }, 0);
    return total; 
  //在这里写入代码
}

module.exports = calculate_elements_sum;

