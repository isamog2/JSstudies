function interest(principal, rate, years) {
    rate = rate || 3.5; //if rate has a value on console log, rate will be = that value
    //if it doesnt have a value there, it will be the default value 3.5
    years = years || 5; //but this is an ugly way of doing so

    return principal * rate / 100 * years;
}

console.log(interest(1000, 3.5, 5));

// you can just set the default value on the argument itself
function interest2(principal2, rate2 = 3.5, years2 = 5) {
    return principal2 * rate2 / 100 * years2;
}
//the problem with this implementation is that if there is no 3.5 on the console.log
//it will assume that the value of rate is 5, instead of making it the default value
console.log(interest2(1000, undefined, 5));
//a workaround is to make rate2 = undefined, then it will be set to the default value
//but its also ugly to have an undefined there
//so make sure the one that has a default value is the last one on the list
