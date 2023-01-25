const courses = [ //array syntax []
    { id: 1, name: 'a'}, //object syntax { key: value, key: value }
    { id: 2, name: 'b'},
]; //an array of objects let or const  or function

console.log(courses.includes({ id: 1, name: 'a'}))

//if you have an array with reference types you need to use the find method

//The find method returns the value of the first element in the array that satisfies the provided testing function.
//Otherwise, undefined is returned

//Syntax
// array.find(function(currentValue)

let array1 = [1, 2, 3]; //creates an array1

function function1(array2) { //creates a function that takes a certain argument
    return array2 > 2; //this function returns a certain argument if this argument is lower than 2
}

console.log(array1.find(function1));
//print on the console the array1 as a parameter of function1
//so here array2 becomes =array1

//unrelated: getElementById() works when you have an html file with an id defined
//then you can get all elements with this same id and do something to all of them at the same time


