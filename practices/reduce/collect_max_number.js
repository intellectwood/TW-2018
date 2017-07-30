'use strict';

function collect_max_number(collection) {
   let result = collection.reduce(function(max, value) {
     return max > value ? max : value;
   }, collection[0]);
   return result;
}

module.exports = collect_max_number;
