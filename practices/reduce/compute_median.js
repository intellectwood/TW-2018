'use strict';

function compute_median(collection) {
  let result,array = collection;
  array = array.sort(function(a,b){return a - b});

  if (array.length % 2 == 0) result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
  else result = array[(array.length - 1) / 2 ]
  return result;
}

module.exports = compute_median;


