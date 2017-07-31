'use strict';

function collect_all_even(collection) {
  //在这里写入代码
    let result = collection.filter((element) => {
	if(element % 2 == 0) return true;
	return false;	
    });
    return result;
}

module.exports = collect_all_even;
