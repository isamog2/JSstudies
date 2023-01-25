
let address = {
street: 'Dalsteindreef',
city: 'Diemen',
zipCode: '1112 XJ',
};

function showAddress(address) {
for(let key in address)
    console.log(key, address[key]);
}

showAddress(address);
