// >IE9

for(var i = 0;i<3;i++){
    setTimeout((i) =>{
        console.log(i)
    },1*1000,i)
}

// let
for(let i = 0; i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },1*1000)
}

// closure
for(var i = 0; i<3;i++){
    ((i) =>{
        setTimeout(()=>{
            console.log(i)
        },1*1000)
    })(i)
}


