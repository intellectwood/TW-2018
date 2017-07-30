'use strict';

function even_to_letter(collection) {
    let result = [];
    
    let index = collection.filter((element) => {
        if (element % 2 == 0) return true;
        return false;
    })
    
    index.forEach((element) => {
        result.push(String.fromCharCode(element + 96));
    })
    return result;
  //在这里写入代码
}

module.exports = even_to_letter;
