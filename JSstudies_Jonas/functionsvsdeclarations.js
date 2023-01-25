
function percentageOfWorld(population){
    let calculation = (population / 7888000000) * 100;
    return Math.floor(calculation) + '%';;
}

console.log(percentageOfWorld(214300000));

const countriesPops = {
    China: '18%',
    Brazil: '2.7%',
    Netherlands: '0.2%'
}

//function expression
const percentageOfWorld2 = function(population) {
    //percentageOfWorld2 = variable
    //function = value of the function
    //in js, functions are not types, they are values
    //if its a value, you can store it in a variable
    let calculation = (population / 7888000000) * 100;
    return Math.floor(calculation) + '%';
}

console.log(percentageOfWorld(214300000));

//function declarations can be called before they are defined in the code,
//function expressions cant. this is due to hoisting (the way js reads code from top to bottom)
//Arrow function

percentageOfWorld3 = population => Math.floor(population / 7888000000 * 100) + '%';

console.log(percentageOfWorld3(2143000000));

