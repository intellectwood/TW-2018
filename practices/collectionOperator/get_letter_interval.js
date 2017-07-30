'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if(number_a === number_b){
      result.push(String.fromCharCode(number_a + 96));
  }
  if(number_a > number_b){
      for(let i = number_a; i >= number_b; i--){
          result.push(String.fromCharCode(i + 96));
      }
  }
  if(number_a < number_b){
      for(let i = number_a; i <= number_b; i++){
          result.push(String.fromCharCode(i + 96));
      }
      
  }
  return result;
}

module.exports = get_letter_interval;
