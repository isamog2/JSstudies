//the simplest way to clone an object is using the spread operator {...} to spread the object u wish to clone
//it takes all the properties and methods from the object and puts them in between the curly braces, into another obj
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = { ...circle};
console.log(another);

