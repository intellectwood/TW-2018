'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [];
  if(number_a === number_b){
      if(number_a > 26) {
          result.push(String.fromCharCode(parseInt(number_a/26) + 96, number_a % 26 + 96));
          }
  }
  if(number_a < number_b){
      for(let i = number_a; i <= number_b; i++){
          if (i > 26 && i % 26 == 0) result.push(String.fromCharCode(parseInt(i/26) + 96 - 1, 26 + 96));
          if (i > 26 && i % 26 != 0) result.push(String.fromCharCode(parseInt(i/26) + 96, i % 26 + 96));
          if(i <= 26) result.push(String.fromCharCode(i + 96));
     }     
  }
  if(number_a > number_b){
      for(let i = number_a; i >= number_b; i--){
          if (i > 26 && i % 26 == 0) result.push(String.fromCharCode(parseInt(i/26) + 96 - 1, 26 + 96));
          if (i > 26 && i % 26 != 0) result.push(String.fromCharCode(parseInt(i/26) + 96, i % 26 + 96));
          if(i <= 26) result.push(String.fromCharCode(i + 96));
     }     
  }
  return result;
}

module.exports = get_letter_interval_2;

