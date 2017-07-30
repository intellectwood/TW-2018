'use strict';
function even(number){
    if (number % 2 === 0) {
        return true;
        }
    return false;
}
function choose_even(collection) {
    let result = collection.filter(even);
  //在这里写入代码
    return result;
}

module.exports = choose_even;
