function random(arr) {
    var newArr = [];
    var len = arr.length;
    do{
        var index = Math.floor(Math.random()*len);
        if(newArr.indexOf(arr[index]) === -1){
            newArr.push(arr[index])
        }

    }while (newArr.length < len)
    return newArr
}

var arr = [2,4,6,7,8,9,10];
console.log(random(arr))

// random method 2
function sort(arr) {
    arr.sort( _ => Math.random() >0.5)
    return arr
}