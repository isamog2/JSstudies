//mapping numbers to objects

const numbers = [1, -1, 2, 3, 4, 5];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({value : n})); //you can copy the map method
//and paste right after the filter method
//this is called chaining

//we're calling one method, it returns some result
//we're imediately calling another method on its result
//by convention each method should have a separate line

// const items = filtered.map(n => {
//         return {value : n}; //were not working with the object constant so we dont need it
//we can also remove the return keyword     }
// )
//
// const items = filtered.map(n => ({value : n}));
//after we remove the return keyword it should be possible to keep the arrow function
//like this:
//(n => {value : n})
//however, for javascript, this => {} is a code block, not an object
//if you're returning an object, you need to add () around it to become an object
console.log(items);