// 编写⼀个函数来查找字符串数组中的最⻓公共前缀。
// 如果不存在公共前缀，返回空字符串 "" 。
// 示例 1:
// 输⼊: ["flower","flow","flight"]
// 输出: "fl"

function a(num) {
    var flag = true;
    var j = 0;
    var result = [];
    while(flag) {
        var origin = num[0][j];
        for(var i = 1;i < num.length;i++) {
            var next = num[i][j] 
            if(!next || next !== origin ) {
                return result.join('');
            }
        }
        result.push(origin);
        j++;
    }
}
console.log(a(["flower","flow","flight"]));

//如果把数组中第一个数据作为最大公共前缀
function b(num) {
    var result = num[0];
    for(var i = 1;i< num.length;i++) {
        var next = num[i];
        for(var j = 0; j < result.length;j++) {
            if(result[j] !== next[j] || !next[j]) {
                break;
            }
        }
        result = [...result].slice(0,j).join('');
        if(result.length === 0) return '';
    }
    return result;
}
console.log(b(["flower","flow","flight"]));
// 解法三：分治策略 归并思想
// 分治，顾名思义，就是分⽽治之，将⼀个复杂的问题，分成两个或多个相似的⼦问题，在把⼦问题分
// 成更⼩的⼦问题，直到更⼩的⼦问题可以简单求解，求解⼦问题，则原问题的解则为⼦问题解的合
// 并。
// 这道题就是⼀个典型的分治策略问题：
// 问题：求多个字符串的最⻓公共前缀
// 分解成多个相似的⼦问题：求两个字符串的最⻓公共前缀
// ⼦问题可以简单求解：两个字符串的最⻓公共前缀求解很简单
// 原问题的解为⼦问题解的合并：多个字符串的最⻓公共前缀为两两字符串的最⻓公共前缀的最⻓
// 公共前缀，我们可以归并⽐较两最⻓公共前缀字符串的最⻓公共前缀，知道最后归并⽐较成⼀
// 个，则为字符串数组的最⻓公共前缀： LCP(S1, S2, ..., Sn) = LCP(LCP(S1, Sk),
// LCP(Sk+1, Sn))

function c(num) {
    function  compareMulti(arrays) {
        if(arrays.length < 2) {
            return arrays[0];
        }
        var part = Math.ceil(arrays.length / 2);
        var left = arrays.slice(0,part);
        var right = arrays.slice(part,arrays.length);
        return compareTwo(compareMulti(left),compareMulti(right));
    }
    function compareTwo(arr1,arr2) {
        var i = 0;
        for(;i < arr1.length;i++) {
            if(arr2[i] === undefined || arr1[i] !== arr2[i]) {
                break;
            }
        }
        return arr1.substring(0,i);
    }
    return compareMulti(num);
}
console.log(c(["flower","flow","flight"]));