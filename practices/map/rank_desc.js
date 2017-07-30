'use strict';
var rank_desc = function(collection){
    let result = collection.sort(function(a,b){
        return a > b;
    });
    return result;
};

module.exports = rank_desc;
