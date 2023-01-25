//to solve the problem on the other sortingArrays3, we need to remove case sensitivity
const courses = [
    { id:1, name: 'Node.js'},
    { id:2, name: 'javaScript'},
];

courses.sort(function(a,b) {
    const nameA = a.name.toUpperCase();
    //whatever the name of the first course is, we're gonna convert it to UpperCase
    const nameB = b.name.toUpperCase();
//we could also se it to toLowerCase();
    //both a and b need to be either upper or lower, cant have 1 upper and 1 lower
    if (nameA < nameB) return -1;

    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);