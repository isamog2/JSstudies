
let attemptsSum = 0;

function sumAttempts(guess) {

	for (let guesses of guess) {
		if (guess !== 26) attemptsSum++;
	}
	return attemptsSum;
}

finalSum= sumAttempts([13, 15, 18, 26]);

console.log(finalSum);

function Message(finalSum) {
return (finalSum <= 3) ? `it took you ${finalSum} attempts? Jee you :rock:`
	: `it took you ${finalSum} attempts? Jee you :suck:`

}

let final = Message(finalSum);

console.log(final);