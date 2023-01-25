const myinfo = {
    mycountry : 'Brazil',
    continent : 'America',
    population : 214000000,
    biggestPop : 6000000,
    isIsland : true,
    language : undefined
}
function splitHalf(x, y) {
    return x/y;
}

myinfo.language = 'Portuguese';
console.log(++myinfo.population);
console.log(splitHalf(myinfo.population, 2));
console.log(`${myinfo.mycountry} is in ${myinfo.continent} and its ${myinfo.population} people all speak ${myinfo.language}.`);
