//Factory functions
//produce objects
//you define a function that creates the object
function createCircle(radius) { //radius as a parameter instead of radius: 1, just so you can change the radius
    //you can remove the 'const=circle'
    //and jump to 'return {object}'
    // this object will be returned whenever u use this function
    return {
        radius, //set radius key to radius parameter
        //if key and value are the same, you can remove the value and just add key
        //'radius,' here is equal to 'radius: radius,'
        draw() { //this is how you call a function inside an object
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
console.log(circle1);

