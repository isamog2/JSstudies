const person = {
    firstName: 'Isa',
    lastName: 'Gomes',
    set fullName(value) { //method set needs a paramether
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        //so if the type is not a string, instead of trying to call split.method and returning an error
        //it will go back to the first definition of first and last name
      const parts = value.split(' '); //split has to have a string, booleans cant use split method
        if(parts.length !== 2)
            throw new Error('Enter a first and last name');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
};

try { //can have more than one statement
    person.fullName = ' ';
}
catch (e) {
    alert(e);
}
console.log(person);
