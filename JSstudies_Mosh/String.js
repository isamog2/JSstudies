// const message = 'hi';
//message. //message has properties and methods but theoritically strings are primitive types
//primitive types dont have properties

//but we have 2 types of strings on js

//String primitive
const message = 'This is my first message';

//String object
const another = new String('hi');
//because String is a constructor function we need to apply the new operator
//now we have another = string

//when we use a dot notation on a string primitive
//js engine internally wraps this with a string object
//you can see the documentation here of all possible properties of the string object:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods

//you can use dot notation on the console with the message. object
//then you can find message.length, if the message.startsWith('my')
//if the message.endsWith('e') etc
//you can also use message.replace('first', 'second') for example

//you can use \escape notations as well, they are all listed on the mozilla doc above