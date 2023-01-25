//initialize an address object
//first using a factory function
//next using a constructor function

// let address = createAddress('a', 'b', 'c');
// console.log(address);
//
// function createAddress(street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

let address = new Address('a', 'b', 'c');
console.log(address);
//Factory Function

// let address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c',
//     fullAddress() {
//         return this.street + ' ' + this.city;
//     },
// };
//
// console.log(address.fullAddress());

//Constructor function
function Address(street, city,zipCode) {
    //instead of returning an object
    //we're gonna use this keyword to initialize this new object
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//to create a new Address object using this constructor function
//we use the new operator and call our constructor function


