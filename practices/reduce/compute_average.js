'use strict';

function compute_average(collection) {
    let average = collection.reduce(function(average, value) {
         return average + value / collection.length;
    }, 0);
    return average;
  //在这里写入代码
}

module.exports = compute_average;

