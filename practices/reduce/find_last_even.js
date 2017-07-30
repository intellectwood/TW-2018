'use strict';

function find_last_even(collection) {
  let result = collection.filter((element) => {
      if(element % 2 == 0) return true;
      return false;
  })
  return result[result.length - 1];
  //在这里写入代码
}

module.exports = find_last_even;
