const findTheOldest = function(array) {
    const names=array.map(people => {
    return people.name; 
});

    const yearOfBirths=array.map(people => {
    return people.yearOfBirth; 
});

    const yearOfDeaths=array.map(people => {
    return people.yearOfDeath; 
});
let ages=[]
for (let i = 0; i < array.length; i++) {
    ages[i]=yearOfDeaths[i]-yearOfBirths[i] ;
    if (Number.isNaN(ages[i])) {
    ages[i] = new Date().getFullYear() - yearOfBirths[i];
}
}



let index=(ages.indexOf(Math.max(...ages)))

return array[index]


};

// Do not edit below this line
module.exports = findTheOldest;
