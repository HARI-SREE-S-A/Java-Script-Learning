const amount = []
const tip = []
const bill = []
amount.push(125,555,44)
function tipp (amount) { amount >= 50 && amount <= 300 ? tip.push(amount*(15/100)) : tip.push(amount*(20/100))}
tipp(amount[0])
tipp(amount[1])
tipp(amount[2])

console.log(amount)
console.log(tip)
bill.push(amount[0]+tip[0],amount[1]+tip[1],amount[2]+tip[2])
console.log(bill)

