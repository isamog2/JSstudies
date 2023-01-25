let numbers = [1, 2, 3, 4];

includes = (array, searchElement) => {
    for (let element of array) if (element === searchElement) return true;
    return false;
}

console.log(includes(numbers,5));