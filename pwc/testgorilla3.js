function roundsWon(results) {
    let Wins1 = 0;
    let Wins2 = 0;
    for (let result of results) {
        if (result === 1) Wins1++;
        else if (result === 2) Wins2++;
    }
    if (Wins1 > Wins2) return Wins1;
    else if (Wins1 < Wins2) return Wins2;
    else if (Wins1 === Wins2) return Wins1;
}

let results = [1, 2];

console.log(roundsWon(results));