let arr = [1,3,4,5];


//arr为原始数组
//start为遍历起始位置
//result保存结果，为一维数组 保存index
//count为result数组的索引值，起辅助作用
//NUM为要选取的元素个数
//len为原始数组的长度，为定值
function sort(arr,start,result,count,NUM,len,ARR) {

    let i = 0;
    for( i = start;i<len+1-count;i++){
        result[count-1] = i;
        if(count-1 === 0){
            let j;
            let item =[];
            for(j =NUM-1;j>=0;j--){
                 item.push(arr[result[j]]);
            }
            ARR.push(item);
        }else{
            sort(arr,i+1,result,count-1,NUM,len,ARR)
        }
    }
    if(i >= len-NUM && start === 0){
        console.log(ARR)
        return {
            sum: ARR.length,
            result: ARR,
        }

    }

}

console.log(sort(arr,0,[],2,2,4,[]))

function slice(arr,start,result,count,NUM,len){
    let i= 0;
    for( i = start; i<len+1-count;i++){
        result[count-1] = i;
        if( count-1 === 0){
            let j;
            for(j = NUM-1;j>=0;j--){
                console.log(result[j])
            }
        }else{
            slice(arr,i+1,result,count-1,NUM,len)
        }
    }
}