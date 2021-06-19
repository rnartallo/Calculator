const readline = require('readline-sync');
function printwelcomemessage(){
console.log('Welcome to the calculator');
console.log('Which calculator do you want?');
console.log('(1) Arithmetic');
console.log('(2) Vowel counting');
const typeofcalc = parseInt(readline.prompt());
return typeofcalc
}

function oneArithmeticCalculation(){console.log('Please enter an operation:');
const op = readline.prompt()
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
        total+=arr[i]
    }else if(op =="-"){
        total-=arr[i]
    }else if(op =="*"){
        total*=arr[i]
    }else if(op == "/"){
        total/=arr[i]
    }
}

console.log('The answer is: '+ String(total));}

function oneVowelCalculation(){
console.log('Please enter a phrase:')
var phrase = readline.prompt()
phrase = phrase.toLowerCase()
vowels = [0,0,0,0,0] // [a,e,i,o,u]
for (let i=0;i<phrase.length;i++){
    if (phrase[i]=='a'){
        vowels[0]+=1
    }else if(phrase[i]=='e'){
        vowels[1]+=1
    }else if(phrase[i]=='i'){
        vowels[2]+=1
    }else if(phrase[i]=='o'){
        vowels[3]+=1
    }else if(phrase[i]=='u'){
        vowels[4]+=1}
}
console.log("The vowel breakdown shows:")
console.log("A: " + String(vowels[0]))
console.log("E: " + String(vowels[1]))
console.log("I: " + String(vowels[2]))
console.log("O: " + String(vowels[3]))
console.log("U: " + String(vowels[4]))
}

typeofcalc = printwelcomemessage()
if (typeofcalc==1){
    oneArithmeticCalculation()
}
else if (typeofcalc==2){
    oneVowelCalculation()
}

