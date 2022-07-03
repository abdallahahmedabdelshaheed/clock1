

    let dt =new Date()

    let a=0

    if(dt.getHours()>12){
         a = dt.getHours() -12
    }
    else{ 
        a = dt.getHours()
    }

    let b = dt.getMinutes()
    let c = dt.getSeconds()
    
    let i =dt.getSeconds()*6
    document.getElementById("hand1d").style.transform="rotate("+ i +"deg)"
let x1 =setInterval(

    function (){
        document.getElementById("hand1d").style.transform="rotate("+ i +"deg)"
        i+=0.06
    },
    1*10
)




let j=((b+(c/60))*6)
        document.getElementById("hand2d").style.transform="rotate("+ j +"deg)"
let x2 =setInterval(

    function (){
        document.getElementById("hand2d").style.transform="rotate("+ j +"deg)"
        j+=0.001
    },
    1*10
)


let k =((a+(c/3600)+(b/60))*30)

        document.getElementById("hand3d").style.transform="rotate("+ k +"deg)"

let x3 =setInterval(
    function (){
        document.getElementById("hand3d").style.transform="rotate("+ k +"deg)"
        k+=0.001
        
    },
    12*10
)






