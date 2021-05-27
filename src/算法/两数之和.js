var nums = [2, 7, 11, 15];
var target = 9
console.log(a(nums,target));
function a(nums,target) {
    var len = 0;
    var map = new Map();
    var result = [];
    while(len < nums.length) {
        var first = nums[len];
        var second = target - first;
        if(map.has(second)) {
            result.push([len,map.get(second)])
        } else {
            map.set(nums[len],len);
        }
        len ++;
    }
    return result;
}