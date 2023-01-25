//Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is
// divisible by five, and “FizzBuzz” if an integer is divisible by both three and five.

function FizzBuzz(input) {
    for(let i = 0; i < input; i++) {
        if (input % 15 === 0) return 'FizzBuzz';
        else if (input % 3 === 0) return 'Fizz';
        else if (input % 5 === 0) return 'Buzz';
        return 'not divisible';
    }
}

const callFB = FizzBuzz(30);

console.log(callFB);