// function declaration test


function agecalc1(year){
    age = 2023 - year
    return age

}

//function expression and edit




const age2 = function(year) {
    age = 2023 - year
    return age
}

// collecting the results

const v = agecalc1(1991)
console.log(v)

console.log(age2(1998))
