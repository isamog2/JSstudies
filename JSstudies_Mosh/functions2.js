//function declaration
function walk() {
    console.log('walk');
} //nao usa ponto e virgula no final de function declaration, by convention

//function expression
//same way you can declare a variable = to a number
//you can declare it as a function

//anonymous function, sem nome
let run = function(){
    console.log('run');
}
//named function expression
let run2 = function aname(){
    console.log('this is a named functoin expression');
}

run(); //call anonymous function

let move = run;
//move is also referencing to the same anonymous function
move();