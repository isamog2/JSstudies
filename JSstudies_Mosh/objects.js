//oop Object-oriented Programming
//if we have variables that are highly related, we can create an object with all of them
//objects are made by grouping one or more key-value pairs
//example:

const circle = {
    radius: 1, //value can be anything
    //number, string, boolean, null, undefined, another object, array, function..
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

//you can use dot.notation to access the properties of the object
circle.draw(); //Method is a function that is part of an object
//this is a way to call the function