const palindromes = function (str) {
    let preppedStr = str.toLowerCase().replace(/\W{1,}/g, "");
    console.log(preppedStr)
    for(let i = 0; i < preppedStr.length; i++) {
        if(preppedStr[i] != preppedStr[preppedStr.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
