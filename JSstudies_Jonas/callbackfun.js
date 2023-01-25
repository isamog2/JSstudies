
percentageCalc = (population) => Math.floor(population / 7888000000 * 100) + '%';

describePopulation = (country,population) => {
    let percentage = percentageCalc(population);
    console.log(`${country} has ${population} which is about ${percentage} of the world`);
}

describePopulation('Netherlands', 143000000);