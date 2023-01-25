//Ways to create a Date object
//JavaScript Date objects represent a single moment in time in a platform-independent format.
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

//Constructor
console.log(Date());
//When called as a function, returns a string representation of the current date and time.
// All arguments are ignored. The result is the same as executing new Date().toString().
//console.logs: "Wed Nov 16 2022 13:56:31 GMT+0100 (CET)"

console.log(new Date());
//When called as a constructor, returns a new Date object.
//console.logs the current date and time