'use strict';
function rank_by_two_large_one_small(collection){
    let result = [];
    let sortArray = collection.sort(function(a,b){return a - b});
    for(let i = 0; i < collection.length; i += 3){
        result.push(sortArray.slice(i,i+3));
    }
    
    result.forEach((element) =>{
        if (element.length == 3){
            element.push(element[0]);
            element.splice(0,1);
            }
    })
    let re = [];
    result = result.forEach((element) =>{
        re = [...re, ...element];
    })
    return re;
  //这里写代码。。。
}
module.exports = rank_by_two_large_one_small;
