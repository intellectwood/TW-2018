'use strict';
function average(collection){
    let sum = collection.reduce((sum,value) =>{
        return sum + value;
    },0);
    return Math.ceil(sum/collection.length);
}
function average_to_letter(collection) {
    let index = average(collection);
    return String.fromCharCode(index + 96);
  //在这里写入代码
}

module.exports = average_to_letter;

