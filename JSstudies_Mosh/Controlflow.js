//Conditional statements: if+else or switch+case

//If (condition=true); {statement}
let hour = undefined;

    if (hour >= 6 && hour < 12)
        console.log('Good morning');
    else if (hour >= 12 && hour < 18)
        console.log('Good afternoon');
    else
        console.log('Good evening');

    //switch and case
let role = 'guest';
//define a variable
switch (role) { //switch (variable defined)
    case 'guest': //if the variable defined is equal to 'guest'
        console.log('Guest User'); //do this
        break; //jump out if its not
    case 'moderator': //in case the variable is set to 'moderator'
        console.log('Moderator User'); //do this
        break; //jump out if not

    default:
        console.log('Unknown User'); //if the above is false, do this. similar to 'else'
}
