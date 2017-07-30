'use strict';
var number_map_to_word_over_26 = function(collection){
    let result = collection.map((i) => {
          if (i > 26 && i % 26 == 0) return String.fromCharCode(parseInt(i/26) + 96 - 1, 26 + 96);
          if (i > 26 && i % 26 != 0) return String.fromCharCode(parseInt(i/26) + 96, i % 26 + 96);
          if(i <= 26) return String.fromCharCode(i + 96);
        });
    return result;
};

module.exports = number_map_to_word_over_26;
