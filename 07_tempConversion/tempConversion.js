const ftoc = function(tempf) {
  return parseFloat(((tempf - 32) * (5/9)).toFixed(1));
};

const ctof = function(tempc) {
  return parseFloat(((tempc / (5/9)) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
