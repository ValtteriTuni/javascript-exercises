const add = function(f, s) { /* f = first number, s = second number */
  return f+s;
};

const subtract = function(f,s) {
	return f-s;
};

const sum = function(arr) {
  let sum = 0;
  if (arr.length === 0) { return 0;}
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
  for ( let i = 0; i < arr.length; i++) {
    mult = mult * arr[i];
  }
  return mult;

};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  if (num < 0) return NaN;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
