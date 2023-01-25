//simplified version
console.log(sum(1, 2, 3, 4));

//using the spread operator you can have a variable amount of parameters on a function
// function sum(...numbers) {
//     //need to name the parameters (here its ...numbers)
//     return numbers.reduce((a, b) => a + b); //need to use return
//     //arrow function instead of function(accumulator, .... return this and that)
// }

function sum(...numbers) { //rest operator converts anything into an array
    console.log(numbers);
    return numbers.reduce((a,b) => a + b);
}