'use strict';
function multiplesOfthree(number){
    if(number % 3 == 0) return true;
    return false;
}
function choose_multiples_of_three(collection) {
    let result = collection.filter(multiplesOfthree);
    return result;
}

module.exports = choose_multiples_of_three;
