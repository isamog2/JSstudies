//constructor functions
//every object in javascript has a property called constructor
const another = new Circle(1);
another.constructor
//you can use dot notation to access the constructor property of the function another
//allows you to create a function whose job is to construct an object
//naming convention is Pascal Notation instead of camelNotation

function Circle (radius) {
    //this keyword - reference to the object that is executing this piece of code
    //references an empty object
    //you can read or set a property
    this.radius = radius; //this points to the 'new' empty object
    this.draw = function() {
        console.log('draw');
    }
    //objects on js are dynamic
    //you can always add properties or methods to them after creating them
}

const circle = new Circle(1);
//new operator creates an empty javascript object
//like 'const x = {};'
//the new operator is doing "return this;"

// so the new operator first creates an empty object
//then set 'this' to point to this object
//finally returns the object from 'this' function

