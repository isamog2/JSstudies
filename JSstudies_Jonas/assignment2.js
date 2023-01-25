const myinfo = {
    mycountry : 'Brazil',
    continent : 'America',
    population : 13000000,
    biggestPop : 6000000,
    isIsland : true,
    language : undefined
}

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)

//2. After checking the result, change the population temporarily to 13 and then to
//130. See the different results, and set the population back to original

function compareElements(a,b) {
    if (a > b) return `Brazil's population is ` + (myinfo.population - myinfo.biggestPop) + ` above average`;
    else return `Brazil's population is ` + (myinfo.population - myinfo.biggestPop) + ` below average`;
}

console.log(compareElements(myinfo.population, myinfo.biggestPop));