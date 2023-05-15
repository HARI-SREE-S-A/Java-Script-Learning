const avai_juice = {
    apple:100,
    orange:300,
    lemon:15
};

const water = ["warm","cold","normie"]

console.log(water.length)

const name = prompt(`enter apple or orange or lemon`)

const temp = prompt(`enter warm cold normie`)



const wat_t = (temp) => {if (temp === "warm"){return water[0]}
else if (temp === "cold"){return water[1]}
else if(temp === "normie"){return water[2]}}



if (avai_juice[name]){
console.log(`you have selected ${name} juice in ${wat_t(temp)} and it cost ${avai_juice[name]} out of ${water.length}` )}
else{console.log(`sorry that item is not available yet!!`)}
