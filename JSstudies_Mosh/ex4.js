
function showStars (rows) {
for (let row = 0; row <= rows; row++) {
    let pattern = '';
    for (let i = 0; i < row; i++)
        pattern += '*';
    console.log(pattern);
}
}

showStars(5);
//if you want to show a x number of something
//declare an empty variable ''
//do stuff, add stuff inside += of empty variable
//so everytime you have an iteration, it finishes by adding the result
//inside of the empty variable