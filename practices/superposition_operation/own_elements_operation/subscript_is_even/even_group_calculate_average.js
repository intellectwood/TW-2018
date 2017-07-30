/*eslint-disable eqeqeq, no-unused-params*/
'use strict';
var compute_average = require('../../../../practices/reduce/compute_average.js');
var even_group_calculate_average = function(collection){
    let even = collection.filter((element,index) => {
        if ((index + 1) % 2 == 0) return true;
        return false;
    });
    
    if(even.length != 0){
        even = even.filter((element) => {
            if(element % 2 == 0) return true;
            return false;
        });
        
        let even1 = [] ,even2 = [],even3 = [];
        even.forEach((element) => {
            if(String(element).length == 1) even1.push(element);
            if(String(element).length == 2) even2.push(element);
            if(String(element).length == 3) even3.push(element);
        });
        
        if(even3.length != 0  && even2.length == 0 && even3.length !=0) return [compute_average(even3)];
        if(even1.length !=0 && even2.length && even3.length != 0 ) return[compute_average(even1), compute_average(even2), compute_average(even3)];
        }
    return [0];
    
};
module.exports = even_group_calculate_average;
