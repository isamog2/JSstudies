const color = "red";
function start() {
    const message = 'hi';
    //scope of this constant is limited to the block in which it is defined
    //we cannot access this constant outside of the start function

}
function stop(){
    const message = "bye";
    //you can have a const message, same name, on two different functions
    //because the scope is local
    //local variables tem preferencia em relacao a variables globais
    const color = "blue";
}

if (true) {
    const another = 'bye';
    //this constant is only accessible in this block
}
for(let i = 0; i < 5; i++) {
    console.log(i); //i only exists here, if you try to console.log it outside of this code block, will see an error
}

start();