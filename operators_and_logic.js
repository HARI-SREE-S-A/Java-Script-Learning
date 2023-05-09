let avg_dol = (97 + 112 + 89)/3
let avg_kol = (109 + 95 + 106)/3

console.log(avg_dol)
console.log(avg_kol)

if (avg_dol>100 && avg_dol > avg_kol){console.log(`dol had won the match`)}
else if(avg_kol > 100 && avg_kol > avg_dol){console.log(`kol had won the match`)}
else if(avg_dol && avg_kol > 100 && avg_dol === avg_kol){console.log(`game is in draw`)}
else {console.log(`nobody won`)}
