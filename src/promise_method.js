// 超时取消 Promise.race()

/**
 * 
 * @param {number} delay 超时时间
 * @param {string} msg  提示信息
 * @returns {promise}
 */
function timeOut(delay = 1000 * 10, msg = 'time out') {
    return new Promise((resolve, reject) => {
            setTimeout(_ => {
                return reject(msg)
            }, delay)
        }
    )
    
}

function getData(url) {
    return new Promise((resolve) => {
            return resolve(url) 
        }
    ) 
}

function getResolution(fn, cb) {
    fn.then(res => {
        console.log(res)
        cb(res)
    })
    .catch(error => {
        console.log(error)
        cb(error)
    })
    return fn
    
}


// 超时取消  看不到原函数的决议

Promise.race([getData('WWW.baidu.com'), timeOut(3000)]).then(console.log).catch(console.log)

// 是否超时 console.log 执行函数的结果
Promise.race([getResolution(getData('www.baidu.com'), console.log), timeOut(3000)]).then(console.log).catch(console.log)