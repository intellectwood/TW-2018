'use strict';
function map_to_even(collection){
    let doubles = collection.map((x) => {
        return x * 2;
    });
    return doubles;
}
module.exports = map_to_even;
