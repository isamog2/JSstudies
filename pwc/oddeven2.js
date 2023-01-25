//given an array of integers
//add 1 point for every even number in the array
// add 3 points for every odd number except for 5
// add 5 points everytime the number 5 appears

const input = [3];

function addPoints(input){
    let points = 0;
    for (let element of input) {
        if (element % 2 === 0) points++;
        else if (element === 5) points += 5;
        else if (element % 2 !== 0) points += 3;
    }
    return points;
}
console.log(addPoints(input));