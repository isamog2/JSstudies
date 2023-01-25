//initialize an address object
//first using a factory function
//next using a constructor function
// let address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// };

//Factory function
//A factory function can be defined as a function that creates an object and returns it.
// It is similar to constructor functions/class functions.

function returnsAddress(city,street,zipCode) {
     return {
         city, //city: city here
         street, //same for street and address
         zipCode,
     }; //needs a ; here
 }
 let address = returnsAddress('a','b','c'); //then you decide the value of these properties
//when defining the variable address
 console.log(address); //then console.log the variable

//Constructor function
//factory functions use camelNotation
//Constructor Function uses PascalNotation
function Address2(city2, street2, zipCode2) {
    this.city2 = city2;
    this.street2 = street2;
    this.zipCode2 = zipCode2;
}
//to create a new address object using this constructor function, we use the 'new' operator and call our constr. func
//we pass the new values and log the variable on the console
let address2 = new Address2('a','b','c');
console.log(address2);