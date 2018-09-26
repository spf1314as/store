Function.prototype.bind2 = function (content) {
    var that = this;
    var args = [].slice.call(arguments,1);
    function fn() {
        var argument = args.concat([].slice.call(arguments));
        that.apply(this instanceof fn ? this: content || window,argument)
    }
    fn.prototype = Object(that.prototype);
    fn.prototype.constructor = fn;

    return fn
}

function game(name) {
    console.log(this.game)
    console.log(name)
}
var obj = {game:'xiaomi'};
var fn = game.bind2(obj,'huyu');
var test = new fn()