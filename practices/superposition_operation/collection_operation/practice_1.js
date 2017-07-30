'use strict';

function hybrid_operation(collection) {
    let sum = collection.reduce((sum,value) =>{
        return sum + value;
    },0)
    return sum * 3 + 2 * collection.length;
  //在这里写入代码
}

module.exports = hybrid_operation;

