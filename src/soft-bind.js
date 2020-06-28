Function.prototype.softBind = function (obj) {
    let Fn = this
    let bindArgs = [].slice.call(arguments, 1)
    function bind () {
        return Fn.apply(
            (!this || this === (window || globle)) ? obj : this,
            bindArgs.concat.apply(bindArgs, arguments)
        )
    }
    bind.prototype = Object.create(bind.prototype)
    bind.prototype.constructon = bind
    return bind
}

function foo() {
    console.log("name" + this.name)
    
}
var obj = {name: 'obj'}
var obj2 = {name: 'obj2'}
var obj3 = {name: 'obj3'}
var fooBbj = foo.softBind(obj)
fooBbj() //obj
obj2.foo = foo.softBind(obj)
obj2.foo() // obj2
fooBbj.call(obj3) // obj3
setTimeout(obj2.foo, 10) // obj