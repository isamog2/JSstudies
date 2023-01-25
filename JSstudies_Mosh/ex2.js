console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit, i++;)
        if (i % 3 === 0 || i % 5 === 0) sum += i;

    return sum;
}
//Just don't use return inside a for-loop.
//
// If you want to use return inside function or code-block then save
// the function in a variable then console log this variable.
//
// If you want to use console.log instead then just call the function in the normal way. myFunc();