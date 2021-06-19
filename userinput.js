const readline = require('readline-sync');
function printwelcomemessage(){
    console.log('Welcome to the calculator');
    console.log('Which calculator do you want?');
    console.log('(1) Arithmetic');
    console.log('(2) Vowel counting');
    const typeofcalc = parseInt(readline.prompt());
    return typeofcalc
    }
printwelcomemessage()