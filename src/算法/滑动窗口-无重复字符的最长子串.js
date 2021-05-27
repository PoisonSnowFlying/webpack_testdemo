//滑动窗口就是一个运行在一个大数组上的子列表，该数组是一个底层元素集合。
// 假设有数组 [a b c d e f g h ]，⼀个⼤⼩为 3 的 滑动窗⼝在其上滑动，则有：
//[a,b,c] [b,c,d],[c,d,e],[d,e,f],[e,f,g],[f,g,h]
// ⼀般情况下就是使⽤这个窗⼝在数组的 合法区间 内进⾏滑动，同时 动态地 记录⼀些有⽤的数据，很
// 多情况下，能够极⼤地提⾼算法地效率。



// ⽆重复字符的最⻓⼦串
// 给定⼀个字符串，请你找出其中不含有᯿复字符的 最⻓⼦串 的⻓度。
// 输⼊: "abcabcbb"
// 输出: 3
// 解释: 因为⽆᯿复字符的最⻓⼦串是 "abc"，所以其⻓度为 3。

var s = 'abcabcbb';
function a(s) {
    var dynamicArr = [];
    var max = 0;
    for(var x of s) {
        var index = dynamicArr.indexOf(x);
        if(index > -1) {
            dynamicArr.splice(0,index + 1);
        }
        dynamicArr.push(x);
        max = Math.max(dynamicArr.length,max);
    }
    return max;
}
console.log(a(s));

function b(s) {
    var result = [];
    var max = 0;
    for(let x of s) {
        let index = result.indexOf(x);
        if(index > -1) {
            result = result.slice(index + 1);
        }
        result.push(x);
        max = Math.max(max,result.length);
    }
    return max;
}
console.log(b(s));
// 要分清除处理的是字符串还是数组。


