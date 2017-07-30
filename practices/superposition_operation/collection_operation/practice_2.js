'use strict';

function hybrid_operation_to_uneven(collection) {
    let result = collection.filter((element) =>{
        if(element % 2 == 1) return true;
        return false;
    })
    result = result.map((element) => {
        return element * 3 + 2;
    });
    return result;
  //在这里写入代码
  
}

module.exports = hybrid_operation_to_uneven;

