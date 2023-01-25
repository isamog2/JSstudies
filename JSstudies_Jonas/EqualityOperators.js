function fun() {
    //saying here that I want to create a pop up that will ask the user to input some data
    let numNeighbours = prompt('How many neighbour countries does your country have?', 'Enter number');
    //this will show an error on the console because node does not support prompt method
    //prompt is part of the window object on the javascript engine of your browser
    alert(`Your country has ${numNeighbours} border(s)`);

    // return the text that states how many boarders your country has eg
    // Your country has () border(s)


    // if (numNeighbours == 1) alert('Only 1 border!');
    //saying here that if the data that the user entered is loosely equal to 1, I want it to return this string
    //if you change to === it will show no borders when there is one
        //if you use strict === the statements on both sides of === will considered to be different
        //if you use lose == the engine will conver them to the same type just so they are considered the same
    // else if (numNeighbours > 1) alert('More than 1 border');
    //if its more, return this
    // else alert('No borders');
    // if its below, return none
}

    //for now, these values are returned on the browser console, meaning we are getting the right data
console.log(fun());