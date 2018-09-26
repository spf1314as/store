Function.prototype.apply2 = function (content,arr) {
    var obj = Object(content) || window; //new Object(content)
     obj.fn = this;
    var result ;
    if(!arr){
      result =  obj.fn()
    }else{
        var args = [];
        for(var i =0;i<arr.length;i++){
            args.push('arr['+i+']')
        }
        result = eval('obj.fn('+args+')')
    }

    delete obj.fn

    return result
}

Function.prototype.call2 = function (content) {
    var obj = Object(content) || window;
    obj.fn = this;
    var result ;
    if(arguments.length === 1){
        result = obj.fn();
    }else{
        var args = [];
        for(var i =1;i<arguments.length;i++){
            args.push('arguments['+i+']')
        }
        result = eval('obj.fn('+args+')')
    }
    delete obj.fn
    return result
}
function game(age) {
    console.log(this.name)
    console.log(age)
}
var obj = {name:'xiaomi'}
var obj2 = {name:'huyu'}
game.apply(obj)
game.call(obj2,333)

