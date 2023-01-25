//given an array of integers
//add 1 point for every even number in the array except for 5
// add 5 points everytime the number 5 appears

let numbers = [1, 2, 3, 4, 5];

const pointSum = {
   countPoints: function(...integers) {
       let total = 0;
       for (let item of integers) {
       if (item % 2 !== 0) total++;
       else if (item === 5) total += 5; }
       return total;
   }
};

console.log(pointSum.countPoints(numbers));