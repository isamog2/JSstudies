const numbers1 = [1, -1, 2, 3];
let sum1 = 0;
for (let n1 of numbers1)
    sum1 += n1;

console.log(sum1);
//the code above sums the items of the array
//its ugly af

const numbers = [1, -1, 2, 3];
//we want to reduce this array from multiple elements to one element only

//arrow function
const sum = numbers.reduce((accumulator,currentValue, index) => {
    //reduce method has two parameters
    //first is the call back function
    //second is the initial value of accumulator (0) in this case
console.log(index);
    return accumulator + currentValue;
}, 0);
//this method takes a callback function w two parameters
//accumulator and current value
//accumulator is the same as the let sum1 = 0
//we initialize and the callback function is executed multiple times
//each time, the currentValue will be set to one element of this array
//each call we will add CurrentValue to accumulator
//internally, the result will be stored in accumulator
console.log(sum);

//first iteration
//accumulator = 0, currentValue = 1 => a = 1;
//second
//a = 1, c = -1 => a = 0;
//third
// a = 0, c = 2 => a = 2;
//last
//a = 2, c = 3 => a = 5;
