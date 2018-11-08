// 获取查询字符串

function querySearch(str) {
    let string = 'id=222&name=333&from=222&zuid=4444';
    let regexp = new RegExp("(^|&)"+str+"=([^&]*)(&|$)","i");
    string.match(regexp)
    return decodeURIComponent(RegExp.$2)
}

// 转化为千分位 1234 > 1,234

function toThousands(num){
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
