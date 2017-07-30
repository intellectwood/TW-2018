'use strict';
var number_map_to_word = function(collection){
    let result = collection.map((x) => {
        return String.fromCharCode(x + 96);
        });
    return result;
};

module.exports = number_map_to_word;
