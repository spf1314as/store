var obj = Object.create({})
function create(fn) {
    var f = function () {
        
    }
    f.prototype = fn;
    return new f()
}
var obj1 = create({});
function B (name){
    this.name = name;
}
B.prototype.getName = function () {
    console.log(this.name)

}
function A(name) {
    B.call(this,name)
}
A.prototype = create(B.prototype);
A.prototype.constructor = A;
var a = new A('xiaomi');
// a.getName()
var obj = new Function();

console.log(obj.prototype)
console.log(obj.__proto__ === Function.prototype)

