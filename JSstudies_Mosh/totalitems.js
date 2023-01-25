//usually, to use reduce method you would have to use reducing method
//where current value gets added to the value of accumulator
//and you initialize accumulator to 0 by adding 0 as the second argument, between } and )

const numbers = [1, -1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
   return accumulator + currentValue;
}, 0);

// console.log(sum);

//calculating total cost of items in a shopping cart

function sum2(discount, ...prices){
    // we cannot have a parameter after rest operator
    //so we cant add another parameter after ...prices
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum2(0.1, 30, 20));