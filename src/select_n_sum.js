function select(data,n,sum) {
    if(data.length < n){
        return []
    }
    var newArr = [],
        len = data.length;
    for(var i = 0; i<len-n+1;i++){
        for(var j = i+1;j<len-n+2;j++){

            newArr.push( [data[i],...data.slice(j,j+n-1)] )
        }
    }
    return newArr.filter(function (value,index,arr) {
        return sum === value.reduce(function (total,value) {
            return total + value
        })
    })
}
console.log(select([3,5,1,2,-3,4,-5,6],2,0))