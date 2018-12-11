function bubble(arr) {
    var len = arr.length;
    for(var i =0;i<len-1;i++){
        for(var j =0;j<len-i-1;j++){
            if(arr[j]>= arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
function quick(arr) {
    if(arr.length <2){
        return arr
    }
    var min = [];
    var max = [];
    for(var i = 1 ;i<arr.length;i++){
        if(arr[0] >= arr[i]){
            min.push(arr[i])
        }else{
            max.push(arr[i])
        }
    }
    return quick(min).concat(arr[0],quick(max))
}

function select(arr) {
    var len = arr.length;
    var minIndex = 0;

    for(var i=0;i<len-1;i++){
        minIndex = i;
        for(var j = i+1;j<len;j++){
            if(arr[j]<= arr[minIndex]){
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
    return arr
}

// sort method

function sort (arr){
    arr.sort((a,b) => a-b)
    return arr
}

var arr = [2,4,9,1,6,3,5,33,22];

console.log(buble(arr))
console.log(quick(arr))
console.log(select(arr))















