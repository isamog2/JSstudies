//Prime number (factors are only one and itself)
//it cannot be divided evenly in 2 other numbers
//11 can only be divided by 1 and 11
//Composite
//you can divide 12 for multiple numbers and the remainder will be zero

showPrimes(30);

function calculatePrimes(input) {
    if (input % 2 !== 0 && input % 3 !== 0) console.log(input);
}

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        calculatePrimes(i);
    }
}
