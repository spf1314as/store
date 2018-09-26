function copy(arr) {
    if(Array.isArray(arr)){
        return arr.map(copy)
    }else if( typeof arr === 'object'){
        var obj = {};
        for(var key in arr){
            obj[key] = copy(arr[key])
        }
        return obj
    }else{
        return arr
    }
}


var arr = [{name:'xiaomi'},33,444];
var arr1 = copy(arr)
arr[0] = 7777;
console.log(arr1)
