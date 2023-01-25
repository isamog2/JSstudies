let numbers = [1,2,3,4];
let another = numbers;
//Solution 1
//numbers = [];

//solution 2
//numbers.length = 0;

//solution 3
//numbers.splice(0, numbers.length);

//solution 4
while (numbers.length > 0)
numbers.pop();

console.log(numbers);
console.log(another);

//1 and 2 are the best solutions