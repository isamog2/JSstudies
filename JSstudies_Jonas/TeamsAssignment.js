dolphinsScore1 = [96, 108, 89];
dolphinsScore2 = [97, 112,101];
dolphinsScore3 = [97, 112, 101];

koalasScore1 = [88, 91, 110];
koalasScore2 = [109, 95, 106];
koalasScore3 = [109, 95, 106];

function sumArray(array) {
        return array.reduce((a,b) => a + b);
}

const sumAllKoalas = {
    sumThem() {
    return sumArray(koalasScore1) + sumArray(koalasScore2) + sumArray(koalasScore3);
    }
}

const sumAllDolphins = {
    sumThem() {
        return sumArray(dolphinsScore1) + sumArray(dolphinsScore2) + sumArray(dolphinsScore3);
    }
}

function calculateAverage(a) {
    return (a/3);
}

const koalascoreTotal = calculateAverage(sumAllKoalas.sumThem());
const dolphinscoreTotal = calculateAverage(sumAllDolphins.sumThem());

function finalTotal(a, b) {
     if (a > b) return 'Koala won';
     return 'Dolphin won';
}

console.log(finalTotal(koalascoreTotal,dolphinscoreTotal));