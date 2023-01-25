// let x = { value: 10 };
// let y = x;
//
// x.value = 20;
//x and y (primitives) are independent variables
//objects are not stored in the variable, they are stored somewhere else in the memory
//the address or the reference is copied inside the variable
//both x and y are pointing to the same object in memory

//primitives are copied by value
//reference types or objects are copied by their reference

let obj = { value: 10 };
    function increase(obj) {
    obj.value++; //this would be 11
}
//but after the function, the number above is out of the scope

increase(obj); //when we call increase and pass number variable
//its value is copied into the number parameter
console.log(obj); //so when we log this number, we are logging the first number