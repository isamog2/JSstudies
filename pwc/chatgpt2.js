// You are working on a project for a zoo. They want a function called "countAnimalsByType"
// that takes in an array of animals as a parameter, each animal is represented by an object with a name and a type.
// The function should return an object where the keys are the types of animals and the values are the number
// of animals of that type.

let Input = [{name: "Lion", type: "Mammal"}, {name: "Crocodile", type: "Reptile"}, {name: "Parrot", type: "Bird"}];
// Output: { Mammal: 1, Reptile: 1, Bird: 1 }

let Input2 = [{name: "Elephant", type: "Mammal"}, {name: "Python", type: "Reptile"}, {name: "Eagle", type: "Bird"},
    {name: "Shark", type: "Fish"}]
// Output: { Mammal: 1, Reptile: 1, Bird: 1, Fish: 1 }

function countAnimalsByType(Input) {
    let mammalsArray = [];
    let reptilesArray = [];
    let birdsArray = [];
    let fishesArray = [];
    for (let animal of Input) {
        if (animal.type === 'Mammal') mammalsArray.push({animal});
        else if (animal.type === 'Reptile') reptilesArray.push({animal});
        else if (animal.type === 'Bird') birdsArray.push({animal});
        else if (animal.type === 'Fish') fishesArray.push({animal});
    }
    return {
        Mammal: mammalsArray.length,
        Reptile: reptilesArray.length,
        Bird: birdsArray.length,
        Fish: fishesArray.length
    };
}

console.log(countAnimalsByType(Input));