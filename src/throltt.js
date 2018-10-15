/*** 函数节流  规定时间内执行性一次
 * @param fun
 * @param delay
 * @returns {Function}
 */



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
// setInterval(function () {
//     throttleAjax()
//
// },1000)

/*
** 函数防抖
* @params fn
* @params delay
* @return  {Function}
* */

function  debounce(fn ,delay = 3000){
    let deferTimer = null;
    return function (...res) {
        let that = this;
        deferTimer && clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
            fn.apply(that,res)
        },delay)

    }
}
var debounceAjax = debounce(ajax);

setInterval(() => {
    debounceAjax()
},2000)


