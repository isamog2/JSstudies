//'use strict';

// console.log(document.querySelector('.message').textContent); //method that is available on the document object
//into this method we need to pass a selector, the same that we would use in css
//we want to select an element with the class name of message
//".message" bc its a class

//when you have . dot operators they are read from left to right
//you are creating the .message element
//you are replacing message with textContent

//now on the console, scriptnotes.js shows the lyrics to the Rosalia song, bc this is the thextcontent of the .message elment


//Dom is not part of JavaScript
// JS is a dialect of Ecma Script specification
// DOM related stuff is not on JS. When you use it, you can use JS in a browser
//DOM and DOM methods are web APIs
//web APIS are like libraries that browsers implement
//and we can access from our JS code

//API stands for Application Programming Interface
//Web APIs are libraries that are also written in JS and automatically available for us to use

//we can also set the content of the element

// document.querySelector('.message').textContent = 'New text with querySelector!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
//if its not text, you can use value instead of textContent

// document.querySelector('.guess').value = 23;

// let guess = document.querySelector('.guess').value;



// document.querySelector('.check').addEventListener('click', function() { //this function is the event handler
// if (guess === 26)
// 	(document.querySelector('.result').textContent) = 'YES'
// 	else if (!guess) (document.querySelector('.result').textContent) = 'No number!';
// 	else if (guess !== 26) (document.querySelector('.result').textContent) = 'WRONG';
//
//
// if (finalSum <= 3) (document.querySelector('.score').textContent) = `it took you ${finalSum} attempts? Jee you :rock:`
// 		else (document.querySelector('.score').textContent) =
// 		`it took you ${finalSum} attempts? Jee you :rock:` `it took you ${finalSum} attempts? Jee you :suck:`
// })





//addEventListener is a method, one of the ways to listen to an event in JavaScript
//you need an event handler as well. The event listener just says what event are we manipulating
//the event handler defines what manipulation, what function, what action
//is the program going to do once it listens to this specific event.

//the first argument is the listener, the second element is the handler (callback function)
//sumamry: when you 'click' on .check, you get on the console the type of .guess