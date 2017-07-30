'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  if(number_a == number_b) result.push(number_a);
  if(number_a < number_b){
      for(let i = number_a; i <= number_b; i++){
          result.push(i);
      }
  }
  if(number_a > number_b){
      for(let i = number_a; i >= number_b; i--){
          result.push(i);   
      }
  }
  return result;
}
module.exports = get_integer_interval;

