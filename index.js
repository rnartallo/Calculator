const readline = require('readline-sync');
console.log('Welcome to the calculator');
console.log('Please enter an operation:');
const op = readline.prompt()
console.log('Please enter a number:');
const x = parseInt(readline.prompt());
console.log('Please enter a second number:');
const y = parseInt(readline.prompt());
if (op =="+"){
    var ans = x+y
}else if(op =="-"){
    var ans =x-y
}else if(op =="*"){
    var ans =x*y
}else if(op == "/"){
    var ans = x/y
}
console.log('The answer is: '+ String(ans));