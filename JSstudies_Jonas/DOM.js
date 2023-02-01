//DOM is document object module
// is a structure representation of html documents
//alows us to use javascript to access html elements and styles
//to manipulate them

//connection point between html documents and javascript code
//its automatically created by the browser as soon as HTML page loads

//its stored in a tree structure where each html element is one object
//each element in a html page is a node in the DOM tree

//example:
// Document is a special object that we have access to in javascript
// this object works as an entry point into the DOM

document.querySelector() //selects and element from a page
//querySelector method is available on document object
//this is why we say document is the entry point to the DOM
//because we need it to start selecting elements

//example:
//<html> -> first ELEMENT html
//<head> --> this is a parent ELEMENT node
//<title> Text --> ELEMENT text node --? child of title and head
// </title>  --> ELEMENT title node -> child of head, parent of text
//</head>
//the DOM always start with an document object at the top

//<html> is usually the root element in all html documents
//it has two child elements <head> <body> they are a JSON element

//with dom manipualtion you can get the nodes from the DOM tree on your js and edit it
//ex: use querySelector to select an element from a html page and edit with js


//head and body are JSON elements and they are siblings
