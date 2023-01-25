//Value = either a primitive or an object
//primitive value:
let firstName = 'Isa'; //data type: string
let age = 30; //data type: number. its actually 30,0 bc javascript converts it to a decimal
//object type value
let me = {
    name: 'Isinha boladona' //data type: string
    //key: value pair
};

//Numbers on javascript are floating point numbers
//all numbers are decimals

//Strings: text

//Boolean: for taking decisions. true or false.

//Undefined: value taken by variable not defined yet
//Null: also means empty value but used in different circumstances
//Symbol(ES2015): unique value that cant be changed
//BigInt (ES2020): larger integers than the Number type can hold

//JavaScript has dynamic typing: we dont have to manually define the data type of the value stored in a variable.
//they are determined automatically. Value has type, variables dont.

//Expression - piece of code that produces a value
3 + 4 //is an expressions bc it will produce a value
1991 //also an expression
true && false && !false //this is a declaration

// declaration= sentence, expressions = words that build the sentence
//declaration = protein, expressions = aminoacids

//statements = actions that build the programs, go inside the functions

//typeof is an operator like the + or =, that you can use to determin the value of something
let javascriptIsfun = true;
console.log(typeof javascriptIsfun);
