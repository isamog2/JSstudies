//takes a variable number of arguments and passes their sum
//modify the sum function to be able to accept an array and still be able to resolve
//need to detect if the argument is an array
let numbers = [1, 2, 3, 5, 6];
const Array  = {
    sumArray() {
        const sum = numbers.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        }, 0);
        console.log(sum);
    }
}
Array.sumArray(numbers);

//
// numbers.forEach(function(item) {
//     if(typeof item == 1) total += item;
// });