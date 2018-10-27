function TestPromise(fn){
    let callbacks = [];
    let state = "pending";
    let value = null;
    this.then = function (onFulfilled,onRejected) {
        return new TestPromise(function (resolve,reject) {
            handle({
                onFulfilled: onFulfilled || null,
                onRejected: onRejected || null,
                resolve: resolve,
                reject: reject,
            })
        })
    };
    function handle(callback){
        if(state === "pending"){
            callbacks.push(callback);
            return
        }
        var cb = state === "fulfilled" ? callback.onFulfilled : callback.onRejected;

        if (cb === null){
            cb = state === "fulfilled" ? callback.resolve: callback.reject;
            cb(value)
            return
        }
        try{
            let ret = cb(value);
            callback.resolve(ret)
        }catch(e){
            callback.reject(e)
        }
    }
    function resolve(newValue){
        if(newValue && (typeof newValue === "object" || typeof newValue === "function")){
            let then = newValue.then;
            if( typeof then === "function"){
                then.call(newValue,resolve,reject)
                return
            }
        }
        value = newValue;
        state = "fulfilled";
        execute()

    }
    function reject(reason){
        state = "rejected";
        value = reason;
        execute()
    }

    function execute() {
        setTimeout(function () {
            callbacks.forEach((cb) => {
                cb(value)
            })
        },0)

    }
    this.catch = function (reject) {
        return this.then(null,reject)

    }
    this.all = function(...res){

        let result = res.some((item) => {
            item.then((res) => false).catch(err => true)
        })
        if(result){
            value = res.map((item) =>{
                item.then( res => res)
            })
            return this.then(resolve,reject)
        }else{
            for(let key of res){
                key.catch( err => {
                    value = err
                    return this.then(null,resject)
                })
            }
        }


    }

    fn(resolve,reject)
}
let test = new TestPromise((resolve,reject) => {
    resolve(3333)
})
let test1 = new TestPromise((resolve,reject) =>{
    resolve(4444)
})

test.then(res => {
    console.log(res)
    throw new Error("5555")
}).catch(res => {console.log(res + 'then')})