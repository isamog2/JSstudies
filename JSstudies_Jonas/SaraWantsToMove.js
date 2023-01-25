let countryName = prompt('What is the name of the country?','Enter name');
let countryPopulation = prompt('What is the size of the population?', 'Enter in numbers');
let isIsland = prompt('Is this country an island?','Enter yes or no');
let countryLanguage = prompt('What is the language people speak there?','Enter the language');

function helpSarah () {
    if (countryLanguage === 'English' && countryPopulation < 50000000 && isIsland === 'no')
        alert(`Sarah should live in ${countryName}.`)
    else alert(`Sarah should not live in ${countryName}.`)
}

console.log(helpSarah());