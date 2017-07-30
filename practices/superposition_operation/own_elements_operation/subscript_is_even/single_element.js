'use strict';
var single_element = function(collection){
    let evenSet = collection.filter((element,index) => {
        if ((index + 1) % 2 == 0) return true;
        return false;
    });
    

    let repeat = evenSet.filter((element,index) => {
        if(evenSet.indexOf(element) != index) return true;
        return false;
    })
    
    let set = new Set();
    evenSet.forEach(x => set.add(x));
    repeat.forEach(x => set.delete(x));
    
    let result = [];
    for (let item of set.values()) {
         result.push(item);
    }
    
    return result;
};
module.exports = single_element;
