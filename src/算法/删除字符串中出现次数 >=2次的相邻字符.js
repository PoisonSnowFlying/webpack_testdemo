// 输入："abbbaca"
// 输出："ca"
// 解释："abbbaca" => "aaca"=>"ca"

var s = 'abbbaca';
function a (str) {
    var stack = [];
    var str = str.split('');
    for(var i = 0; i < str.length; i ++ ) {
        var top = stack[stack.length - 1];
        if(str[i] === top) {
            stack.pop();
            while(str[i+1] === top) i++;
        } else {
            stack.push(str[i]);
        }
    }
    return stack.join('');
}
a(s);