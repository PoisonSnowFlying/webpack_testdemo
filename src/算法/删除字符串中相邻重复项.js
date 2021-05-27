//给出由小写字母组成的字符串s,重复项删除操作会选择两个相邻且相同的字母，并删除他们.
//在s上反复执行重复项删除操作，直到无法继续删除。
var s = 'abbaca';
function a (str) {
    var newArr = [];
    var str = str.split('');
    for(var i = 0; i < str.length; i ++ ) {
        if(newArr.length > 0 && str[i] === newArr[newArr.length - 1]) {
            newArr.pop();
        } else {
            newArr.push(str[i]);
        }
    }
    return newArr.join('');
}
a(s);