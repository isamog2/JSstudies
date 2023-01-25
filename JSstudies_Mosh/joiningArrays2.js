const numbers = [1,2,3];
//created array numbers
const joined = numbers.join(',');
//used join method to iterate over the elements all together, printing "," between them
//the argument of join method is a separator, its optional
console.log(joined);

const message = 'This is my first message'
const parts = message.split(' ');
//split method also takes a separator as an argument
//turns your const/var into an array and divides the element is multiple elements
console.log(parts);

const combined = parts.join('-');
console.log(combined);

//this is useful when for example you have a page title and want it to be on the url
//a URL cant have spaces
//so if the page is 'How to create a thing'
//you can use page.join('-') on the URL for example and the URL will be
//How-to-create-a-thing
