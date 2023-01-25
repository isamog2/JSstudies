let x = {};
//let x = new Object();
//Functions are objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);
//the new operator will do exactly this:
Circle.call({}, [1, 2, 3, 4])
//this by default refers to the global object (Window)


//if you do Dot notation on the Circle function/object:
Circle.x
    //the purple circles are properties
//the blue circles are methods - bind, apply, etc

//if you type Circle.constructor on the console, engine will return this:
// ƒ Function() { [native code] }
//javascript system uses the thing above to create a function with what you gave it
//circle.length returns the number of properties
//for this reason you can create a function by using