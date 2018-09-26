function throttle(fun, delay) {
    var last, deferTimer;
    return function () {
        var that = this,
          _args = arguments,
          now = +new Date();
        if (last && now < last + delay) {
            clearTimeout(deferTimer)
            deferTimer = setTimeout(function () {
                last = now;
                fun.apply(that, _args)
            }, delay)
        }else if( (last && now != last + delay) || !last ){
            last = now;
            fun.apply(that,_args)
        }
    }
}
function ajax(content) {
    console.log('ajax request ' + Date.now())
}

var throttleAjax = throttle(ajax, 2000);
setInterval(function () {
    throttleAjax()
    
},1000)

