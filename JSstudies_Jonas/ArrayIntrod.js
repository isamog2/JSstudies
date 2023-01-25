populations = [413000000, 513000000, 130000000, 200000];

console.log(populations.length === 4);

percentageCalc = (population) => Math.floor(population / 7888000000 * 100) + '%';

percentages = [
    percentageCalc(populations[0]), percentageCalc(populations[1]),
    percentageCalc(populations[2]), percentageCalc(populations[2])
];

console.log(percentages);