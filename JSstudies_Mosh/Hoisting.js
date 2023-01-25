//a function using function declaration synthax can be called before it is defined
walk ();
function walk() {
    console.log('walk');
}
//we cant do this with a function that is defined using the function expressions syntax
// run(); //gives a ReferenceError: run is not defined

// const run = function() {
//     console.log('run');
// };

//the same way you cant define a variable after its called
//the calling wont work
console.log(x);
let x = 1; //also gives a reference error, x is not defined
// so if your function is within a variable, calling it before will also not work

//when js engine executes this code, it moves the function declarations to the top
//the proccess of moving function declarations to the top of the file, done automatically by javascript egine executing the code
//is called Hoisting