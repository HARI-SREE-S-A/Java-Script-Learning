const MarksMass = 78;
const JohnMass = 92;

const Mh = 1.69;
const Jh = 1.95;




let MarksBmi = MarksMass/(Mh**2);
let JohnsBmi = JohnMass/(Jh**2);

if (MarksBmi > JohnsBmi){
console.log(`Marks BMI (${MarksBmi}) is greater than JohnsBmi(${JohnsBmi})`)

}else{console.log(`Marks BMI (${MarksBmi}) is less than JohnsBmi(${JohnsBmi})`)}
