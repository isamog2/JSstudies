const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
//concat method concatenates two variables/constants/objects/elements
//primitives are copied by value, reference types are copied by reference
const slice = combined.slice(); //the slice method without any argument will show a copy of the first argument
//you can use slice method to slice a const
console.log(combined);

//spread operator
//when we spread an array, all of its elements are returned individually

//cleaner code
const combinedTwo = [...first, ...second];
//...first=all of the elements from first
//...second=all the elements of second
//"," combines both

