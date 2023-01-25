// You are working on a project for a pizza delivery company.
// They want a function called "sortPizzasBySize" that takes in an array of pizzas as a parameter,
// each pizza is represented by an object with a name and a size (small, medium or large).
//
// The function should return an array of pizzas sorted by size (small, medium, large).

//Examples:
// Input: [{name: "Pepperoni", size: "large"},
// {name: "Margherita", size: "medium"},
// {name: "Vegetarian", size: "small"}]
// Output: [{name: "Vegetarian", size: "small"},
// {name: "Margherita", size: "medium"},
// {name: "Pepperoni", size: "large"}]
 let pizzas = [{name: "Meat Lovers", size: "large"}, {name: "Hawaiian", size: "medium"}, {name: "Cheese", size: "small"},
     {name: "Pepperoni", size: "large"}, {name: "Margherita", size: "medium"}, {name: "Vegetarian", size: "small"}];

function orderPizzas(input) {
    let smallArray = [];
    let mediumArray = [];
    let largeArray = [];
    for (let pizza of input) {
        if (pizza.size === 'small') smallArray.push({pizza});
        else if (pizza.size === 'medium') mediumArray.push({pizza});
        else if (pizza.size === 'large') largeArray.push({pizza});

    }

let newArray = smallArray.concat(mediumArray,largeArray);
    return newArray;
}

console.log(orderPizzas(pizzas));

