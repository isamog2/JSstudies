const pessoa = {
    firstName: 'Isabella',
    lastName: 'Gomes',
    get fullName() { //w getter u can read fullname like a property
     return `${pessoa.firstName} ${pessoa.lastName}`
    }, //to be able to access it from the outside of the object, u need a setter
    set fullName(value) {
        //value of parameter will be the new value of fullName
        const parts = value.split(' ');
        this.firstName = parts [0];
        this.lastName = parts[1];
    }

};

pessoa.fullName = 'Jon Smith';
console.log(pessoa); //now you can read fullName like a property, not a function

//getters => access properties
//setters => change (mutate) them