const findTheOldest = function(people) {
    let ages = [];
    let currentYear = (new Date()).getFullYear()
    people.forEach((person) => {
        if(!person.yearOfDeath) {
            person.yearOfDeath = currentYear
        }
        let lifespan = person.yearOfDeath - person.yearOfBirth;
        ages.push(lifespan)
    })
    return people[ages.indexOf(Math.max(...ages))]
};

// Do not edit below this line
module.exports = findTheOldest;
