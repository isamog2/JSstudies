const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);
//
const items = filtered.map(n => '<li>' + n + '</li>')
//the code inside () is the same as:
// const items = filtered.map(function(value) {
//    return '<li>' + value + '</li>';
// });
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

//in this example we are mapping these numbers to strings