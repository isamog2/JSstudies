const friends = ['Sasha', 'Andrei', 'Alejandro'];
console.log(friends);

const years = new Array(1991, 1984, 2020);

//this prints Andrei, the 2nd element, with index 1 (it starts on 0)
console.log(friends[1]);

//this prints the amount of friends we have
console.log(friends.length);

//this prints the amount minus one friend
console.log(friends.length -1);

//this prints out which friend is in the position [whole array length -1]
//if the array length is 3, the result will be 2
//it will print which friend has index 2 (3rd element)
console.log(friends[friends.length -1]);

friends[2] = 'Jay'; // you can assign a new value to one of the elements
console.log(friends); //jay substitutes alejandro
//you can assign a whole new thing at once (friends = 'this, this and that'), will break


