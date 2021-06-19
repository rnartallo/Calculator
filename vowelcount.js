const readline = require('readline-sync');

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