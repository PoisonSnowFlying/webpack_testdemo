//给你一个字符串s，【k】倍重复项删除操作，将会从s中选择k个相邻且相等的字母，并删除他们
// 使被删去的字符串的左侧和右侧连在一起
var s = 'deeedbbcccbdaa';
function a (str) {
    var newArr = [];
    var str = str.split('');
    for(var i = 0; i < str.length; i ++ ) {
        if(newArr.length >= 2 && str[i] === newArr[newArr.length - 1]  && str[i] === newArr[newArr.length - 2]) {
            newArr.pop();
            newArr.pop();
        } else {
            newArr.push(str[i]);
        }
    }
    return newArr.join('');
}
a(s);

// 删除字符串中出现次数 >=2次的相邻字符
