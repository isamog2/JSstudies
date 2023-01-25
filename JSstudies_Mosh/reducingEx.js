const items = [
    {name: 'Isa', biceps: 40},
    {name: 'Teteu', biceps: 10},
]

    let totalBiceps = 0;
    items.forEach(item => totalBiceps += item.biceps)

console.log(totalBiceps);

const items2 = [
    {name2: 'Isa2', biceps2: 42},
    {name2: 'Teteu2', biceps2: 12},
]


const totalBiceps2 = items2.reduce((total, item2) => { return total + item2.biceps2},
//o primeiro parametro aqui eh o accumulator
//eh oq nos queremos reduzir a funcao a
//se eu quero reduzir os elementos da array a um total, eu vou reduzir a funcao a um accumulator 'total'

//o segundo parametro sao os items individuais os quais eu quero iterate over na array

0)
//0 eh onde a funcao comeca
//eh o mesmo q iniciar totalBiceps = 0;

//o total, accumulator, vai comecar no zero
//a cada iteracao o valor do accumulator vai se tornar = ao resultado da funcao

console.log(totalBiceps2);