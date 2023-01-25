//variables are undefined by default, cannot start with numbers, spaces and hyphen and are case-sensitive.
//can be strings, numbers, booleans (true or false) or undefined these are the primitive types of variables.

//you can search for the number of a variable by typing 'typeof' on the console.

//instead of saying that name is Isa and age is 26 you can set an object Person and give it properties name and age.
let person = { //this is the syntax
    name: 'Isa', //name and age are two properties or two key-value pairs
    age: 26 //for key-value pairs we use ':' instead of ' = '
}

//if you want to change one of the properties of an object, you need to access the property first
//you can access the property with dot notation.
//if you type the name of the variable and a dot, it will show all of it's properties
person.name = 'Bella'; //if you console.log(person); it will show the new value of the name key
//you can also use dot.notation to log just one property of an object
//console.log(person.age);

//Another way to access values of keys, is using bracket notation
//It's longer and uglier so it's only used when the value is going to change on run time

let selection = 'name';
person[selection] = 'Isa';
console.log(person.name);

//you can also have an array, a list of elements on a variable.
let selectedColors = ['red', 'blue']; //red is index 0, blue is index 1
selectedColors[1] = 1; //now we changed the index 1 to the number 1.
console.log(selectedColors); //here the console will log ['red', 1] because the console logs the values that are one each 0, 1, 2... indexes
console.log(selectedColors.length); //here the console will log the amount of elements we have on this array
