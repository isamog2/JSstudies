const numbers = [1, 2, 3, 4, 1];

const output = except(numbers, [1,2]);

console.log(output);

function except(array, excluded) {
    const newArray = [];
    for (let element of array)
        if (!excluded.includes(element)) newArray.push(element);
//! means "if (!this is false)"
    return newArray;
}
