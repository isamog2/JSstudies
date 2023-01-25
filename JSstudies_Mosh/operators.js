//operators are things you put on your functions to do stuff amongst variables
//for example you can do math stuff with arithmetic operators:
let x = 10;
let y = 5;
console.log(x + y);
// '+' is the operator. you can also use '-', '*', '/' '%' for reminder of division and '**' for exponentiation

//you can also use increment (++) and decrement (--) operators
// console.log(--x); //returns the new value of the variable, after performing the (--) operation
console.log(y--); //returns the old value of the variable, before performing the (--) operation

//Assignment operators it's when you add an assignment (=) to the operator
 //x += 5 is the same as x = x + 5; You can do this with all arithmetic operators.
console.log(x += 3);
//you can also have comparison operators.
let z = 3;
console.log(z > 0); //the result of this expression is a boolean. This means that if z is > 0, console will log true.
console.log(z <= 4); //menor ou igual, maior ou igual, maior, menor etc
//equality operators
console.log(z === 3);//this will tell me if z is strictly equal to 3. So both values are the same type and value
console.log(z == '3');//this will tell me if z is loosely equal to 3. So both values are either the same type or value.
//the == will convert the value of the second one to the value of the first one.
console.log(z !== 3); //this will tell me if its different

//Ternary or conditional operators
let points = 90; //declares a variable points
let type = points > 100 ? 'gold' : 'silver;'
    //declares a variable type and sets it to an expression
//expression: if (points > 100) = true, set 'type' to 'gold', otherwise set 'type' to 'silver'
// '?' is used for 'if __ is true do __'
// ':' is used for 'otherwise'
console.log(type);
//Logical operators
//OR (||) returns true if one of the operands is true, and (&&) returns true if both are true
//NOT (!)
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore; //console will only return true if both are true
console.log('Eligible for Loan?', eligibleForLoan);

let highIncome2 = true;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2; //console will return true as long as one is true
console.log('Eligible for Loan?', eligibleForLoan2);

let applicationRefused = !eligibleForLoan; //creates a variable that has to be different from the other existing one
//applicationRefused = not eligibleForLoan. If applicationRefused is true, eligibleForLoan has to be false + vice versa
console.log('Application Refused?', applicationRefused);

//Logical operators with non-booleans
//if the program cant find a true, it will search for a truthy
//a truthy is everything that is not a falsy
//falsies: undefined, null, 0, false, '' (empty string), NaN (not a number)
//example:

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
//the program will return, as the value of currentColor, the first truthy it can find.
//since userColor is set to a falsy (undefined), it will continue until it finds the 'blue'.
//since or || is in the middle of them, only the of them that is truthy, will be logged.
console.log(currentColor);
//expression precedence: use () on the calculation you need done first, if you have + one calculation on a expression