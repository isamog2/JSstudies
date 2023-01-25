//mapping numbers to objects

const numbers = [1, -1, 2, 3, 4, 5];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => {
    const obj = {value : n};
    //maps each number to an object with a value property
    return obj;
    }
)

console.log(items);