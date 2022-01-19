const removeFromArray = function(arr, ...elements) {
    let newArr = []
    arr.forEach((elem) =>  {
    if (!elements.includes(elem)) {
        newArr.push(elem)
    }
   })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
