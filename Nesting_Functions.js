

const cutting_machine = fruit => {
    return (fruit * 4)
} 


#####nesting the function
function juicer(apple,orange){
    apple_cut = cutting_machine(apple)
    orange_cut = cutting_machine(orange)

    console.log(`juice is made from ${apple_cut} pieces of apple and ${orange_cut} pieces of orange`)
}



juicer(2,3)
