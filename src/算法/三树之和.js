var num = [-1, 0, 1, 2, -1, -4];
var target = 0;
console.log(a(num,target));
function a(num, target) {
    num.sort((a,b)=> a-b);
    var map = new Map();
    var result = [];
    for (var i = 0; i < num.length - 2; i++) {
        var first = num[i];
        for (var j = i + 1; j < num.length; j++) {
            var third = num[j];
            var second = target - first - third;
            console.log(map);
            if (map.has(second)) {
                result.push([first,second,third])
            } 
            map.set(num[j],j);
            while(num[j + 1] === num[j]) {
                j++;
            }
        }
        map.clear();
        while(num[i + 1] === num[i]) {
            i++;
        }
    }
    return result
}