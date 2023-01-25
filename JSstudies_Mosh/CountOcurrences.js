const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers,-1);

console.log(count);

function countOccurrences(array, searchElement) {
    let newArray = [];
    for(let element of array) {
        if(element === searchElement) newArray.push(element);}
    return newArray.length;
}