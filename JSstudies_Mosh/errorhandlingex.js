
const numbers = [1, 2, 3, 4];
try {

    const count = countOccurrences(null, 1);
    console.log(count);
}
catch(e) {
    alert(e);
}

//throw exception, catch the exception and log on the console
//wrap the two or 3 lines above with a try and catch block


function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}