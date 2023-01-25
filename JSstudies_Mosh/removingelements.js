const numbers = [1, 2, 3, 4];

//Removing elements from the End
//const last = numbers.pop();
//console.log(numbers);

//beginning
const first = numbers.shift();
console.log(first);

//middle
numbers.splice(2, 1); //2: pass the index of the element you want to remove, not the actual element
//1: pass the number of elements you want to delete
//it will delete x elements starting from the index of the first thingy
console.log(numbers);