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

Function.prototype.bindEs5 = function(oThis){
  var aArgs = [].slice.call(arguments, 1)
  var fToBind = this
  var fNOP = function() {}
  var fBound = function(){
    return fToBind.apply(
      (this  instanceof fNOP && oThis ? this : oThis),
      aArgs.concat([].slice.call(arguments))
    )
  }
  fNOP.prototype = this.prototype //Object.create(fToBind.prototype)

  fBound.prototype = new fNOP()
  return fBound
}
