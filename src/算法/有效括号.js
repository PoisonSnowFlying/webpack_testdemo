function a (str) {
    let map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    str = str.split('');
    var newArr = [];
    for(var i =0;i< str.length;i++) {
        if(map[str[i]]) {
            newArr.push(str[i]);
        } else if(str[i] !== map[newArr.pop()]) {
            return false;
        }
    }
    return true;
}
console.log(a("{[]}"));
console.log(a("([)]"));