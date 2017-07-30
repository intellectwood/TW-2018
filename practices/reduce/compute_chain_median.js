'nuse strict';
function spandString(collection){
    let string = collection.split('->');
    let result = [];
    string.forEach((element) =>{
        result.push(parseInt(element,10));
    });
    return result;
}
function compute_chain_median(collection) {
  //在这里写入代码
  let result;
  let array = spandString(collection);
  let index1 = parseInt(array.length / 2);
  let index2 = Math.ceil(array.length / 2) ;
  
  array = array.sort(function(a, b) {
    return a - b;
  });
  
  if (array.length % 2 == 0) result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
  else result = array[(array.length - 1) / 2 ]
  return result;
 
}

module.exports = compute_chain_median;
