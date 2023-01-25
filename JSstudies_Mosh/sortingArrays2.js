//when you have an object with elements,
// its a little harder then w numbers/strings bc it doesnt work by default

const courses = [
    { id: 1, name: 'Node.js'},
    {id: 2, name:'Javascript'},
];

courses.sort(function(a,b) {
//optionally takes an argument: a function used for comparison
//here we are using a and b as arguments
//when we call the sort method, it takes two objects from the array and compares them
//if they are in the "right order" its going to skip, otherwise it will rearrange

// if a < b => -1
//if a > b => 1
// a===b => 0
if (a.name < b.name) return -1;
if (a.name > b.name) return 1;
return 0; }
);
console.log(courses);
