const getTheTitles = function(objArr) {
    let resultArr = []
    objArr.forEach((object, index) => resultArr.push(objArr[index].title))
    return resultArr
};

// Do not edit below this line
module.exports = getTheTitles;
