'use strict';

function spilt_to_zero(number, interval) {
    let result = [number];
    while(number > 0){
        number -= interval;
        number = parseFloat(number.toFixed(1));
        result.push(number);
        
    }
    return result;
}

module.exports = spilt_to_zero;
