// let number = TwoNumbers(5, 10);
// console.log(number);
// //let variable = functionName(arguments);
// //console.log(variable); is the same as adding the console log inside of the function and calling it outside
// //its mostly used when the function has a 'return' instead of a console.log(); inside of it
// function TwoNumbers(a, b) {
//     return (a > b) ? a : b;
    //return a, if it cant return a, it will return b
    //it will only return a if condition (a > b) is true ?
    //otherwise : it will return b
// }

// let output = fizzBuzz(false);
// console.log(output);
//
// function fizzBuzz(input) {
//     if (typeof input !== 'number') return 'Not a number';
//     if (input % 15 === 0) return 'FizzBuzz';
//     else if (input % 3 === 0) return 'Fizz';
//     else if (input % 5 === 0) return 'Buzz';
//     return input;
// }

    // function showNumbers(limit) {
    //     for (let i = 0; i <= limit; i++) {
    //         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'; //'return' is included on '?'
    //         console.log(i, message);
    //     }
    // }
    // showNumbers(10);

// const array = [1, 2, 3, 0];
// console.log(countTruthy(array));
//
// function countTruthy(array) {
//     let count = 0;
//     for (let item of array)
//     if (item) //if the program cant find a true, it will search for a truthy
// //a truthy is everything that is not a falsy
// //falsies: undefined, null, 0, false, '' (empty string), NaN (not a number)
//         count++;
//     return count;
// }

const movie = { //movie object
    title: 'a', //title as a key, 'a' as a value. these 2 are a property
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        // if (isNaN(obj[key])) console.log(key, obj[key]);
        // if (typeof obj[key] === 'string') console.log(key,obj[key]);
        if (typeof obj[key] == "number") console.log(key,obj[key]);
    }
}
    //let key in person declares a variable that englobes name and age keys
    //console.log(key, person[key]);//as a statement, this loop prints the "name" and "age" on the console
//using dot or bracket notation you can also print the value
//to use dot notation is person.selected key
//to show all keys is person[key] because you dont know the key yet in this case, there is more than 1, could be either


