'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  var begin;
  if (number_a == number_b){
     if(number_a % 2 == 0) result.push(number_a);
  }
  if(number_a > number_b){
    begin = (number_a % 2 == 0) ? number_a : number_a - 1;
    for(let i = begin; i >= number_b; i -= 2){
        result.push(i);
        }
  }
  if(number_a < number_b){
    begin = (number_a % 2 == 0) ? number_a : number_a + 1;
    for(let i = begin; i <= number_b; i += 2){
        result.push(i);
        }
  }
  return result;
}

module.exports = get_integer_interval_2;
