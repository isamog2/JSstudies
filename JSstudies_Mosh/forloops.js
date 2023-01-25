for (let i = 0; i <= 5; i++) {
    //for loop you define the start with the i = 0
    //so the first iteration is a index = 0
    //whatever is inside of the {} will happen until you reach the 5th iteration
    //once the program runs, it will add 1 to the value of i (run again), until it reaches the 5th
    console.log('Hello World', i); //console log string and index of iteration
}

// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !== 0) console.log(i);
// }
//while loop declares variable outside, limit on side of while and condition inside, final after statement
// let i = 0;
// while (i <= 5) { //if this condition is true
//     if (i % 2 !== 0) console.log(i); //the statement inside of the while block will be executed
//     i++;
// }

//Do-While loops
//Do-While loops are always executed at least once, even if the condition is false
//because the condition is evaluated at the end, different from the other loops where the condition comes first
//ond for and while loops, the condition needs to be true for the statement to start

let y = 3; //declare variable outside
do {
    if (y % 2 !== 0) console.log(y); //statement
    y++; //increment
} while (y <= 2); //condition outside, at the end
//statement is false in this case but it printed the 3 anyway
//because it ran the statement once, incremented one (3+1=4), did 4 <= 2,
// since 4 is bigger than 2, the condition "do this while 'y' less or equal to 2" is now false
//so it stopped right there

let z = 5;
do {
    console.log(z);
    z++;
} while (z <= 3); //it only printed the 5 here.
//because if first did the 'console.log(z)', printing five
//it added one, so now z=6
//read the while condition, saw that 6 is bigger than 3
//stopped there and showed nothing else

//For..in loops
//declare an object
const person = {
    name: 'Isa',
    age: 26
};

//For In Loop iterates over the properties of an object
for (let key in person)
    //declares a variable inside of the for loop condition
    //where this variable is a key of a key-value pair on the object you declared earlier
    //so the person object has "name:" as a key and 'Isa' as a value
    //and "age:" as a key with 26 as a value
    //let key in person declares a variable that englobes name and age keys
    console.log(key, person[key]);//as a statement, this loop prints the "name" and "age" on the console
//using dot or bracket notation you can also print the value
//to use dot notation is person.selectedkey
//to show all keys is person[key] because you dont know the key yet in this case, there is more than 1, could be either

//For of loops - iterate over the elements of an array
const colors = ['red', 'blue', 'green']; //array of objects
for (let teste of colors) //declares a variable of any name of the array defined earlier
    //'of' atributes one of the objects to a iteration number
    //and saves it inside of the declared variable
    console.log(teste); //prints the variable you just declare, that contains the iterations with the objects
//break - jumps out of a loop. //continue - goes to next iteration (not much used)
