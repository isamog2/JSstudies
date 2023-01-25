//how to filter an array based on a search criteria

const numbers = [1, 2, 3];

// const newArray = numbers.filter(function(value){
//    return value >=0;
// });
//the code above can be written more clearly:

const newArray = numbers.filter(n => n >= 0);
//value can be substituted to v and numbers to n
//in this case the values are numbers
console.log(newArray);