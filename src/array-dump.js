function hastTool(arr) {
    var obj = {};
    var newArr = [];
    for(var i =0;i<arr.length;i++){
        if(!obj[arr[i]] ){
            newArr.push(arr[i]);
            obj[arr[i]] = 1000;
        }
    }
    return  newArr;
}
function splice(arr) {
    var len = arr.length;
    var i =0 ;

    for(;i<len-1;i++){
        for(var j= i+1;j<len;j++){
            if(arr[j]=== arr[i]){
                arr.splice(j,1);
                j--;
                len--;
            }
        }
    }
    return arr;
}
function jump(arr) {
    var len = arr.length,
        i = 0,
        newArr = [];
    for(;i<len;i++){
        for(var j = i+1 ;j<len;j++){
            if(arr[j] === arr[i]){
                j= ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
function indexof (arr) {
    return arr.filter( (value,index,arr) =>{
        return  arr.indexOf(value,0) === index;
    });
}
function includes(arr){
    return {};
}

function map (arr){
    let map1 = new Map();
    for(let value of arr){
        if(!map1.has(value)){
            map1.set(value,true)
        }
    }
    return [...map1.keys()]
}


// function set(arr) {
//     var set = new Set(...arr);
//     return Array.from(set)
//
// }

// var arr = [2,4,5,4,5,6];
var arr = [3,4,6,3,1,2,4,6];
var arr1 =[2,4,5,4,5,6];
var arr2 =[1,1,1,1,1,1];
var arr3 =[3,3,3,3,3,3,3,3];

// console.log(hastTool(arr))

// console.log(jump(arr1))
// console.log(jump(arr2))
// console.log(jump(arr3))
// console.log(jump(arr))
// console.log(splice(arr))
console.log(indexof(arr))
















