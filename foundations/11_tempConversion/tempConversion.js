const convertToCelsius = function(temp) {
  let num = ((temp-32) * (5/9));
  return Number(num.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let num = (temp *(9/5) + 32);
  return Number(num.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
