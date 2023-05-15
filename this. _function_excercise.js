const hari = {
    fname : "hari",
    sname  : "sree",
    job:"engineer",
    friend : ["abe","joe","ram"],
    cal_age : function(year){
       
        this.age =  2023 - year
        return this.age},
    summary: function(year){console.log(`name is ${this.fname + this.sname} age is ${this.cal_age(year)}
    and he have a total of ${this.friend.length} friends`)}
    

    }


    hari.summary(2000)


