const sumAll = function(first, second) {
    if(first < 0 || second < 0 || typeof first != "number" || typeof second != "number") return "ERROR"
    let min = Math.min(first, second);
    let max = Math.max(first, second);
    let sum = 0, i = min;
    while (i <=max) {
        sum += i;
        i += 1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
