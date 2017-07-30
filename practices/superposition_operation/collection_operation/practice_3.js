'use strict';

function hybrid_operation_to_uneven(collection) {
    let result = collection.filter((element) =>{
        if(element % 2 == 1) return true;
        return false;
    });
    
    result = result.map((element) =>{
        return element * 3 + 5; 
    });
    
    let sum = result.reduce((sum,value) => {
        return sum + value;
    },0)
    
    return sum;
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

