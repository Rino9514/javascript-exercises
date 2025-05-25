    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        const oldestAge = isFinite(oldest.yearOfDeath) ? oldest.yearOfDeath - oldest.yearOfBirth : 2025 - oldest.yearOfBirth;
        if (isFinite(current.yearOfDeath)){
            return oldestAge < (current.yearOfDeath - current.yearOfBirth) ? current: oldest;
        } else {
            return oldestAge < (2025 - current.yearOfDeath) ? current : oldest;
        }
    })
};
// Do not edit below this line
module.exports = findTheOldest;
