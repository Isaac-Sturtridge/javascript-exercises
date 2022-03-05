const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce(((currentTotal, prevTotal) => currentTotal + prevTotal), 0)
};

const multiply = function(array) {
  return array.reduce(((currentTotal, prevTotal) => currentTotal * prevTotal), 1)
};

const power = function(num, pow) {
  return Math.pow(num, pow)
};

const factorial = function(num) {
	return num < 0 ? -1 : num == 0 ? 1 : num * factorial(num - 1)
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
