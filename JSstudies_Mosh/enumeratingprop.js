const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
//here we have a circle object with a radius property and a draw method
//method: a function inside of an object

for (let key in circle)
    console.log(key, circle[key]); //using bracket notation to see the value of this key (property)
//it will pass the method on the console as well

// for (let key of circle) //objects are not iterable
//     console.log(key);
//a for of loop here would not work, you will se the error 'circle is not iterable'
//for of loops only work with iterables such as arrays or maps


//Object.keys is a built-in constructor function
for (let key of Object.keys(circle)) //method object.keys of circle
    console.log(key); // method Object return an array with all of the keys from the circle object
//since arrays are iterable, you can use the for of loop
//somewhere the Object function is defined. whenever you use it, it is internally
//translated into a call to this constructor function
//all functions on javascript are objects
//so you can access its properties and methods using dot notation
//typing "Object." will give you a list of possible properties and methods of this object
//the ".keys" method returns a string array which contains all the properties and methods in this object

//Entries method
//another similar method to object.keys
for (let entry of Object.entries(circle))
    console.log(entry);
//instead of returning the keys as a string array,
// it returns each "key: value" pair as an array
//lets rename key to entry by pressing f2
//you can see on the console each entry is an array
//the first element of the array is the key and the second one is the value
//another way to get access to all the properties and methods in an object

//sometimes you wanna see if a given object has a given object or method
//for that you can use the 'in' operator

if('radius' in circle) console.log('yes');
//if radius as a string is a property within circle (if this is true), then console.log the message 'yes'
if('color' in circle) console.log('yes');
//this one does not log anything on the console bc its false, there is no prop color on obj circle

//simplest way to enumerate the properties in an object is using the for in loop
//but we can also use the for of loop along with obj.keys and obj.entries
//to see if a given property or method exists in an object we use the in operator