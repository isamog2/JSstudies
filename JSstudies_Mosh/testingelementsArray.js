const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function(value) {
    //this method .every runs this function on every element of the array
    //as soon as the function statement is true,
    // as soon as it finds a value the fits the function criteria
    // it will return true
    //so as soon as it finds a number that is not positive
    //its going to return false (value >= o)
    return value >= 0;
    //if you change every to 'some' it will return true, bc some of them are positive
    //some = at least one value needs to match the function criteria

});

console.log(allPositive);
//older browsers dont support this bc its a new method