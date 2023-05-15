const amount =  [22,295,176,440,37,105,10,1100,86,52]
const tip = []
const bill = []

for(i = 0;i <= amount.length-1;i+=1){
    if (50 <= amount[i] <= 300){tip.push(amount[i]*(15/100))}
    else{tip.push(amount[i]*(20/100))}
    //console.log(tip[i],amount[i])
    bill[i] = tip[i] + amount[i]
}

const avg = function (arr) {
    sum = 0
    for(let n = 0;n<= arr.length-1;n+=1){
        sum += arr[n]
        console.log(sum)   
    }
    return (sum/arr.length)

}
console.log(bill)
console.log(avg(bill))
