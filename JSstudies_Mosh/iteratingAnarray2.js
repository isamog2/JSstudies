//one way of iterating an array is using the for of loop
const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

//all arrays have a for each method, that takes a callback function


numbers.forEach(function(number) {
//when we call the forEach method, the function will be passed for each element on
    //the array numbers

    //so its like "for each time you pass on const numbers, play function
    console.log(number);
    }
);

//we can use arrow function to simplify the code above

const numbers2 = [3, 4, 5];
numbers2.forEach(number2 => console.log(number2));
    //we can remove the word function since it only has 1 argument
    //we can remove extra () and {} bc there is no code block
//add => between parameters and body
//number2 is parameter of forEach function, where we are saving the result
//console.log(number2) is the body of the function, the actual statement

//you can add index as a parameter
//you can have index on a for of loop, only on for in loops
const numbers3 = [6,7,8];
numbers3.forEach((index, number3) => console.log(index, number3));