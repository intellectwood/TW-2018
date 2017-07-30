'use strict';

function average_uneven(collection) {
    let even = collection.filter((element) => {
        if(element % 2 == 1) return true;
        return false;
    });
    
    let sum = even.reduce((sum,value) =>{
        return sum + value;
    },0);
    
    return sum / even.length;
  //在这里写入代码
}

module.exports = average_uneven;
