const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(function(course) {
    //store the result in a constant called course
    //find methods takes as an argument a predicate or callback type of function
return course.name === 'b'; //we're looking for a course with the name equal to a
});

console.log(course);