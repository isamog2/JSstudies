//Literals: Literals represent values in JavaScript.
// These are fixed values —not variables— that you literally provide in your script.

//Template literals: Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
//
// Template literals are sometimes informally called template strings,
// because they are used most commonly for string interpolation (to create strings by doing substitution
// of placeholders). However, a tagged template literal may not result in a string;
// it can be used with a custom tag function to perform whatever operations you want on
// the different parts of the template literal.

// Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
//With template literals, you can use both single and double quotes inside a string:
let text = `He's often called "Johnny"`;
console.log(text);

//Template literals allows multiline strings.
// Using normal strings, you would have to use the following syntax in order to get multi-line strings:
console.log("string text line 1\n" + "string text line 2");
// "string text line 1
// string text line 2"

//using template literals, you can do the same using the backtick:
let text2 =
    `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

//Interpolation - turn a complex function in a simple one
//template literals provide an easy way to interpolate variables and expressions into strings
//this method is called string interpolation.
// syntax: ${...}
//Without template literals, when you want to combine output from expressions with strings,
// you'd have to concatenate them using the addition operator (+):

const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");

//With template literals:
const c = 5;
const d = 10;
console.log(`Fifteen is ${(a + b)} and
not ${(2 * a + b)}.`);
//without ${}, (a+b) would be part of the string instead of replaced by the values of a and b
//the console would log "a + b" instead of "15"

//${} is a place holder
//you can add any expression that produces value in between the curly braces
//you can also call a function that returns a value

console.log(`Fifteen is ${10+5}.`);