'use strict';

function collect_min_number(collection) {
   let result = collection.reduce(function(min, value) {
     return min < value ? min : value;
   }, collection[0]);
   return result;
}

module.exports = collect_min_number;

