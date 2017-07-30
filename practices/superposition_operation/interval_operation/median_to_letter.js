'use strict';
var compute_median = require('../../../practices/reduce/compute_median.js');

function median_to_letter(collection) {
    let result = compute_median(collection);
    result = Math.ceil(result);
    if (result > 26 && result % 26 != 0) return String.fromCharCode(parseInt(result/26)+96, result % 26 + 96);
    if (result > 26 && result % 26 == 0) return String.fromCharCode(parseInt(result/26)+ 96 -1, 26 + 96);
    if (result <= 26) return String.fromCharCode(result + 96)
  //在这里写入代码
}

module.exports = median_to_letter;
