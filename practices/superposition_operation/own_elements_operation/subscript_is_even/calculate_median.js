'use strict';

var compute_median_reduce = require('../../../../practices/reduce/compute_median.js');

var calculate_median = function(collection){
    let even = collection.filter((element,index) => {
        if((index + 1) % 2 == 0) return true;
        return false;
    });
    
    let result = compute_median_reduce(even); 
    
    return result;
};
module.exports = calculate_median;
