const readline = require('readline-sync');
function oneArithmeticCalculation(){
    console.log('Please enter an operation:');
const op = readline.prompt();
console.log('How many numbers do you want to ' + String(op)+ '?');
const n = parseInt(readline.prompt());
arr = Array(n);
for (let i=0; i<n;i++){
    console.log('Please enter number ' + String(i+1) + ':');
    arr[i]=parseInt(readline.prompt());
}
total = arr[0];
for (let i=1; i<n;i++){
    if (op =="+"){
        total+=arr[i];
    }else if(op =="-"){
        total-=arr[i];
    }else if(op =="*"){
        total*=arr[i];
    }else if(op == "/"){
        total/=arr[i];
    }
}

console.log('The answer is: '+ String(total));}