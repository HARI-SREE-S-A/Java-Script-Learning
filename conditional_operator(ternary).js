const bill = 275
let tip = 0



tip = bill >= 50 && bill <= 300 ? bill * (15/100) :  bill * (20/100)

console.log(`the bill was ${bill} and your tip is ${tip} , in total you have to pay ${bill +tip}`)
