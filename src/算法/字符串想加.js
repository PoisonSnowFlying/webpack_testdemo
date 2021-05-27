// 给定两个字符串形式的⾮负整数 num1 和 num2 ，计算它们的和。
// 例如：
// "111" + ”2222“ = ”2333“
// 注意：
// num1 和 num2 的⻓度都⼩于 5100
// num1 和 num2 都只包含数字 0-9
// num1 和 num2 都不包含任何前导零
// 你不能使⽤任何內建 BigInteger 库， 也不能直接将输⼊的字符串转换为整数形式
function a(str1,str2) {
    str1 = [...str1].reverse().join('');
    str2 = [...str2].reverse().join('');
    var i = 0;
    var hasPlus = 0;
    var result = [];
    while(i < str1.length || i < str2.length) {
        var cur1,cur2,sum;
        cur1 = i >= str1.length ? 0 : + str1[i];
        cur2 = i >= str2.length ? 0 : + str2[i];
        sum = cur1 + cur2 + (hasPlus ? 1 : 0);
        hasPlus = parseInt(sum / 10);
        sum = sum % 10;
        result.push(sum);
        i++;
    }
    if(hasPlus > 0) {
        result.push(hasPlus);
    }
    return result.reverse().join('');
}
console.log(a('999','999'))
// 需要注意的地方：数组长度超出后，取值为0；低位到高位的进位；最后一次计算完的进位要加上
// 看下标准答案
function add(str1,str2) {
    let result = '';
    let temVal = 0;
    let arr1 = [...str1];
    let arr2 = [...str2];
    while(arr1.length || arr2.length || temVal) {
        temVal += ~~arr1.pop() + ~~arr2.pop();

        result = temVal % 10 + result; // 这里是字符串想加。

        temVal = ~~(temVal / 10);
    }
    return result.replace(/^0+/,''); // 其实不知道存不存在最后以为是否含有0
}

// 关于操作符~~两次按位取反，其实获取的时候本身。作用1.~~undefind ==== 0  ~~2.3 === 2
// [].pop() 是undefined;


// 乘法

function a(str1,str2) {
    str1 = [...str1];
    str2 = [...str2];
    var result = [];
    for(var i = str1.length - 1;i >=0;i--) {
        var temVal = 0;
        var temResult = '';
        for(var j = str2.length - 1; j>=0;j--) {
            temVal += str1[i] * str2[j];
            console.log(temVal);
            temResult = temVal % 10 + temResult;

            temVal = ~~(temVal / 10);
        }
        if(temVal > 0) {
            temResult = temVal + temResult;
        }
        x = 0;
        while(x < str1.length - 1 - i) {
            temResult = temResult + '0';
            x++;
        }
        result.push(+temResult);
    }
    console.log(result);
    const finalRes = result.reduce((sum,curVal,i,arr)=> {
        return sum + curVal;
    });
    return finalRes;
}
console.log(123 * 456);
console.log(a('123','456'));