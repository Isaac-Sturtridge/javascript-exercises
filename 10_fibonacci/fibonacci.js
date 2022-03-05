const fibonacci = function(fibIndex) {
    if(fibIndex < 0) return "OOPS"
    let fibonacci = [0, 1, 1, 2, 3]
    if(fibonacci[fibIndex]) {
        return fibonacci[fibIndex]
    } else {
        while(fibonacci.length <= fibIndex) {
            let first = fibonacci[fibonacci.length - 2]
            let second = fibonacci[fibonacci.length - 1]
            fibonacci.push(first + second)
            console.log(fibonacci)
        }
        return fibonacci[fibIndex]
    }
};

// Do not edit below this line
module.exports = fibonacci;
