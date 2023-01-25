//if you wanna have a function with a varying number of parameters, you can use the rest operator
//it looks exactly the same as the spread operator
//spread operator spread the elements of an array
//when you use it on the along with the parameter of a function, you refer to it as the rest operator

//
function sum(args) {
console.log(args);
}

console.log(sum(1,2,3,4,5)); //this is the function with the argument "args" without rest operator
//it only considers the first object of this array (it becomes an array on js engine)

function show(...args2) { //using rest operator
    console.log(args2);
}
console.log(show(1,2,3,4,5)); //it returns all objects within this ()

// *~~~args is an array for js engine even though u didnt built it as an array~~~*

function sum2(...args) {
    return args.reduce((a,b) => a + b);
//if its an array, you can call the reduce method to sum all of the items in it
}
console.log(sum2(1,2,3,4,5));
