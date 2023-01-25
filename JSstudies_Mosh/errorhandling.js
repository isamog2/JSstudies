const pessoa = {
    firstName: 'Isabella',
    lastName: 'Gomes',
    set fullName(value){
        if (typeof value !== 'string') return;
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = null;
console.log(pessoa.fullName);