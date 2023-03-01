document.querySelector('.check').addEventListener('click', handleClick); //this function handleClick is the event handler

let attemptsSum = 0;

function handleClick () {
	const guess = Number(document.querySelector('.guess').value);
	sumAttempts(guess)
	//essa funcao define que qnd o handleClick for chamado
	//ele vai rodar a funcao sumAttempts na constante guess
	//em cima eh so pra definir a constante guess como sendo a id .guess do html
	//poderia ter feito sumAttempts(documents.querySelector...etc) mas ficaria mto feio
	//o Number eh pra garantir q o valor tem q ser um numero e nao bugar a funcao

}

function gotRight(guess) {
	//essa funcao define se a pessoa acertou o chute ou nao, eh definida aqui pra ser usada dentro da sumAttempts
	if (guess === 26) {
		return true;
	} else {
		return false;
	}
}

function sumAttempts(guess) {
	//a sumAttempts eh passada dentro do handleClick
	//a gotRight eh passada dentro do sumAttempmts
	if (gotRight(guess)) {
		//se a funcao gotRight com guess como parametro retornar true
		messageRight(); //devolve a funcao messageRight
	} else {
		//se a funcao gotRight com guess como parametro nao retornar true
		attemptsSum++;
		//soma +1 no valor da variavel attemptSum
		messageWrong();
	}
}

function messageRight() {
	(document.querySelector('.score').textContent) = message(attemptsSum);
}
function messageWrong() {
	(document.querySelector('.score').textContent) = `Sorry, that's not it`;
}

function message() {
	return (attemptsSum <= 3) ? `it took you ${attemptsSum} attempts? Jee you 🪨`
		: `it took you ${attemptsSum} attempts? Jee you suck 😔`
}

document.querySelector('.header').style.fontFamily = 'Courier New';