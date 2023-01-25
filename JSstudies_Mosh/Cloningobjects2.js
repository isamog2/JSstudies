//the 2nd simplest more modern way to actually clone objects

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = Object.assign({
    color: 'yellow'
}, circle);
//you have to declare the constant another just so you can log it on the console
//one or more source objects after the ,
//circle is the source object here
//Object: built in function/object
//it has a method called assign
//the first argument can be an empty target object or an existing object

//what this assign method does is that it takes all the properties and methods
//in this source object (circle) and then copies them into this new object and returns the result
console.log(another);