const numbers = [1, 2, 3, 4];

function getMax(array) {
    if (array.length === 0) {return 'undefined'}

    return array.reduce((accumulator, current) => {
        if(current > accumulator) return current;
        return accumulator;

    });
}
const getting = getMax(numbers);

console.log(getting);