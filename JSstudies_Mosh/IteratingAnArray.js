const numbers = [1, 2, 'c', 4];

for (let number of numbers)
    console.log(number);

numbers.forEach(function(number) {
    //forEach takes a callback function as argument
    //this function will be executed for each element of the array
    console.log('i', number);
});
//we can simplify this code using arrow functions

const numbers2 = [3, 4, 5];
for (let number2 of numbers2)
    console.log(number2);

numbers2.forEach((number2, index) => console.log(number2, index));
    //get rid of the function word
    //add a fat arrow between parameters and body
    //because we only have 1 parameters we dont need the parenthesis
     //we don't need ; because there is no more code after
//there is also no need for {} bc its not an object with multiple elements
//you can add an index as a parameter on the forEach method
//to add it on the loop it would have to be a for in loop