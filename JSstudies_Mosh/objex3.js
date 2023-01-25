let address1 = new Address('a','b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(city2, street2, zipCode2) {
    this.city2 = city2;
    this.street2 = street2;
    this.zipCode2 = zipCode2;
}

function areEqual(address1, address2) {
 return address1.street === address2.street &&
     address1.city === address2.city &&
     address1.zipCode == address2.zipCode;
    //check if these objects have the same reference
}

function areSame(address1, address2) {
    return address1 === address2;
}