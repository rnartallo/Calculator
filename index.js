const readline = require('readline-sync');
const userinput=require('./userinput')
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelcount');


typeofcalc = userinput.printwelcomemessage()
if (typeofcalc==1){
    arithmetic.oneArithmeticCalculation()
}
else if (typeofcalc==2){
    vowelcount.oneVowelCalculation()
}

