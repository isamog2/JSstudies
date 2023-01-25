let array1 = [5, 12, 8, 130, 44];
//creates array1

let found = array1.find(function(element) {
    //creates found variable and adds find method
    return element > 10; //criteria > 10
    //in the body of this function we should return a boolean
    //if the element is greater than 10 it will return a boolean
});

console.log(found);