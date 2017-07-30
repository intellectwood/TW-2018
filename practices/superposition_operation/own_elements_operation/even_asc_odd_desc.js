'use strict';
var even_asc_odd_desc = function(collection){
    let even = collection.filter((element) => {
        if (element % 2 == 0) return true;
        return false;
    });
    
    let odd = collection.filter((element) => {
        if (element % 2 == 0) return false;
        return true;
    });
    even = even.sort(function(a,b){return a - b});
    odd = odd.sort(function(a,b){return b -a});

    return even.concat(odd);
};
module.exports = even_asc_odd_desc;
