//Adding elements
const numbers = [3, 4];
//end
numbers.push(5,6);
//beginning
numbers.unshift(1,2,1);
//middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
//Finding elements - depends if you are storing primitives or reference types in an array
console.log(numbers.indexOf('1')); //if the element exists in the array,
//the result will be the index of the element
//if the element does not exist, it will return '-1'. Type of the element matters.
//so a way to know if the element exists in the array is to see if the element is !== to -1
console.log(numbers.indexOf(1) !== -1);
//if console returns 'true' it means that the element is different then -1, so it exists
//a prettier way to do this:
console.log(numbers.includes(1));
console.log(numbers.lastIndexOf(1)); //if the element appears two times you can show the last index
