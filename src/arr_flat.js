function flat(arr) {
    return arr.reduce(function (total,currArr,index,arr) {
        //  console.log(currArr === arr[index])
        if(Array.isArray(arr[index])){
            return flat(total.concat(currArr))
        }else{
            return total.concat(currArr)
        }

    },[])
}
let arr = [1,3,4,5,6,[[[[[[[[1,2,3,45,6,8]]]]]]]]];
console.log(flat(arr))

function flat1(arr,m=1, init = []) {
    return arr.reduce((total,current,index,arr) =>{
        let n = m
        if(Array.isArray(current) && n>1){
            return flat1(current,--n, total)
        }else{
            return total.concat(current)
        }
    }, init)
}
let arr1 = [4,[[[1]]],[[3]]];
console.log(flat1(arr1, 2))