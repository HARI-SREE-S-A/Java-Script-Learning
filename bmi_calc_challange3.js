const mark = {
    name:"mark",
    mass: 78,
    height: 1.69,
    cal_index:function(mass,height){
        this.index = ((mass)/(height**2))
        return this.index
    }




}

mark.cal_index(mark.mass,mark.height)

const john = {
    name:"john",
    mass: 92,
    height: 1.95,
    cal_index:function(mass,height){
        this.index = ((mass)/(height**2))
        return this.index
    }


}

john.cal_index(john.mass,john.height)


console.log(`the winner is ${mark.index > john.index ? `mark ` : 'john' } and he differ by ${mark.index} and ${john.index}`)

