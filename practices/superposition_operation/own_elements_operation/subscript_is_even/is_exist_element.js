'use strict';
var is_exist_element = function(collection,element){
    let evenSet = collection.filter((element,index) => {
        if (index % 2 == 0) return true;
        return false;
    });
    
    return evenSet.includes(element);
};
module.exports = is_exist_element;
