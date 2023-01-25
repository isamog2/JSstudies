const age = 26;

//conditional operators ? if true, otherwise :
//conditional = ternary

function join() {
    return 'I like to drink ' + (age >= 18 ? 'wine 🍷' : 'water 🐳');
}
// console.log(join());
//operators always produces a value;
//operators are expressions
//if we have a value we can assign it to a variable

let population = 214000000;

function countrySize(){
    return 'Brazil population is ' + (population >= 33000000 ? 'above average' : 'below average');
}
console.log(countrySize());
