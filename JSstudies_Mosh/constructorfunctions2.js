//constructor functions
//every object in javascript has a property called constructor

//allows you to create a function whose job is to construct an object
//naming convention is Pascal Notation instead of camelNotation
const circle = createCircle(1);
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
const another = new Circle(1);
another.constructor
//you can use dot notation to access the constructor property of the function another

