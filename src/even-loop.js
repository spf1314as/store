var a = 3;
 b = 3;
 a = 4;
 console.log(b);
 setTimeout(function () {
     console.log(this.a,'11')
 },0)
function Go() {
    this.a = 5;
   var a = 6;
    setTimeout(function () {
        console.log(this.a , '22')
        
    },2000)
    setTimeout(() => {
        console.log(this.a,'33')
    },3000)
    setTimeout(function () {
        console.log(a,'44')
    },4000)
}
Promise.resolve().then(function () {
    console.log(a,'55')
})
new Go()