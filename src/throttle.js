/**
 *  @desc 函数节流 限制过于触发频繁
 * *
 * */
function throttle(fn,delay=200) {
    let timer = null,
      start;
    return function () {
        var that = this,
            argus= arguments,
            cur = Date.now();
        if(timer){
            clearTimeout(timer);
        }
        if( !start || cur-start >= delay ){
            fn.apply(that,argus)
            start = cur;
        }else{
         timer = setTimeout(function () {
                start = cur;
                fn.apply(that,argus)
            },delay)
        }
    }
}

function test(name) {
    console.log(name)
}
var game = throttle(test,200);
game('xiaomi');
setInterval(game('xiaomi'),100)
function debounce (fn,delay) {
    delay = delay || 100 ;
    var timer = null,
        first = true;
    return function () {
       var args = arguments , that = this;
        clearTimeout( timer)
        if(first){
            fn.apply(that,args)
            first = false
        }else{
           timer = setTimeout( function () {
                fn.apply(that,args)
            },delay)
        }

    }

}

