function flat(arr) {
    return arr.reduce(function (total,currArr,index,arr) {
         console.log(currArr === arr[index])
        if(Array.isArray(arr[index])){
            return flat(total.concat(currArr))
        }else{
            return total.concat(currArr)
        }

    },[])
}
let arr = [1,3,4,5,6,[[[[[[[[1,2,3,45,6,8]]]]]]]]];
console.log(flat(arr))

function flat1(arr,n=1) {
    return arr.reduce((total,current,index,arr) =>{
        if(Array.isArray(current) && n>1){
            return flat(total.concat(current),--n)
        }else{
            return total.concat(current)
        }
    },[])
}
let arr1 = [1,2,4,[[1]]];
console.log(flat1(arr1,3))