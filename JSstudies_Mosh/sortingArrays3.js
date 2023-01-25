const courses = [
    {id: 1, name: 'Node'},
    {id: 2, name: 'javascript'}
]
//if javascript is lowecarse, its gonna appear first
//due to ascii table https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html 
//decimal representation of j is 106
//decimal representation of N is 78
//so its j is greater than N, so its gonna appear first
courses.sort(function(first,second){
   if (first.name > second.name) return -1;
   if (first.name < second.name) return 1;
   return 0;
});

console.log(courses);