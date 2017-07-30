'use strict';
function one_add_next_multiply_three(collection){
    let result = [];
    collection.forEach((currentValue,index,array) => {
        if(index != array.length - 1){
            result.push((currentValue + array[index + 1]) * 3);
        }
    })
    return result;
  //return [12,24,36,48,60,72,84,96,108,120];
}
module.exports = one_add_next_multiply_three;
