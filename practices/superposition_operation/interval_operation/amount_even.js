'use strict';

function amount_even(collection) {
    let result = collection.filter((element) => {
        if (element % 2 ==0) return true;
        return false;
    });
    
    let sum = result.reduce((sum,element) =>{
        return sum + element;
    },0);
    
    return sum;
    
  //在这里写入代码
}

module.exports = amount_even;
