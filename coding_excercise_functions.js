const averag = (a,b,c) => (a+b+c)/3

function winner (a,b,c,d,e,f){

    dol_scr = averag(a,b,c)
    kol_scr = averag(d,e,f)
    console.log(dol_scr,kol_scr)

    if (dol_scr >= 2*kol_scr){
        console.log(`team dol won with ${dol_scr,kol_scr}`)}
        else if (kol_scr >= 2*dol_scr){
            console.log(`kol won the match`)
        } else{console.log(`no body won the match${kol_scr,dol_scr}`)}
    
}

winner(44,23,71,65,54,49)
winner(85,54,41,23,34,27)
