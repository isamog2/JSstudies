//takes a variable number of arguments and passes their sum
//modify the sum function to be able to accept an array and still be able to resolve
//need to detect if the argument is an array


//arrow function version of my function
let numbers = [1, 2, 3, 5, 6];
const Array  = {
    sumArray() {
        return numbers.reduce((a, b) => a + b);
    }
}

console.log(Array.sumArray());