// showStars(10);
//
// function showStars(rows) {
//
// }
//Nested Loops first
let i = 0;
while (i < 5) {
    console.log('Current value of i is', i);
    for (let j = 0; j < 5; j++) {
        console.log('j:', j);
    }
    i++;
}
// as you can see on the console
// evertime the outerloop runs 1 iteration
//it runs the inner loop 4 times
//so when i is one, j is 1, 2, 3, 4
//then i is 2, j is 1, 2, 3, 4 for the 2nd time
// for the 3rd time.. until i = 5, then i is false and the loop stops.
