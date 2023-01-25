//arguments object
function sum(a,b) {
    console.log(arguments);
    //the keys we have in this object are the indexes of the arguments we have on this function
    //arguments object also has a callee property that returns the currently executing functions
    //it also has a length property
    return a + b;
}

console.log(sum(1,2)); //if u pass 1 or 3+ arguments, it returned nan
//bc by default, the value of a and b is undefined
//so 1 + undefined = NaN

//if you wanna have a sum function that sums an infinite number of arguments:

function sum2(a,b) {
    //first we declare a variable which will contain the total of the sum
    let total = 0; //set it to start on 0
    for (let value of arguments) //we use the for of loop to iterate over the argument obj
        //for of loop can be used on any object that has an iterator.
        //usually this is an array bc regular objects dont have an iterator
        //arguments object has a symblo.iterator property, so you can use for of loops here
        total += value; //lets add value to the total variable
    return total; //now we return total
}

console.log(sum2(1,2,3,4,5));