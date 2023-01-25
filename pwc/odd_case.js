//given an array of integers
//add 1 point for every even number in the array
// add 3 points for every odd number except for 5
// add 5 points everytime the number 5 appears

let my_numbers = [1, 2, 3, 4, 5];

function find_total(my_numbers) {
        let total = 0;
        for (let number of my_numbers) {
            if (number === 5) total += 5;
            else if (number % 2 === 0) total++;
            else if (number % 2 !== 0 && number !== 5) total += 3;
        }
        return total;
    };

console.log(find_total(my_numbers));