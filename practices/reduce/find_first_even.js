'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let result = collection.filter((element) => {
      if(element % 2 == 0) return true;
      return false;
  })
  return result[0];
}

module.exports = find_first_even;

