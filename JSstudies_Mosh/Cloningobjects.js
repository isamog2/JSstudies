//Technique to get all the properties of an object and copy them into another object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};
//you can use a for in loop to iterate over the properties of an object
//and copy them into this new object
for (let key in circle)
//now we use the bracket notation to access a property with the given key
    another[key] = circle[key];
//we set another of key to circle of key

//on the first iteration key will be radius, so this code will be equivalent to
// another['radius'] = circle['radius'];
//so if the radius key of circle is 1, we are putting 1 inside the radius property of the another object
console.log(another);

//Object.assign copies the properties and methods of one or more source objects into a target object
//it can be used to clone or combine multiples objects into a single object