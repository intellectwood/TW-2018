'use strict';
var calculate_average = function(collection){
    let even = collection.filter((element,index) => {
        if((index + 1) % 2 == 0) return true;
        return false;
    });
    
    let sum = even.reduce((sum, element) => {
        return sum + element;
    },0);
    
    return sum / even.length;
};
module.exports = calculate_average;
