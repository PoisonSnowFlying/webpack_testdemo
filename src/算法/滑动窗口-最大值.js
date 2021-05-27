// 滑动窗⼝最⼤值问题
// 给定⼀个数组 nums 和滑动窗⼝的⼤⼩ k ，请找出所有滑动窗⼝⾥的最⼤值。
// 输⼊: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]

var nums = [1,3,-1,-3,5,3,6,7];
var k = 3;
function a(nums,k) {
    var maxList = [];
    for(var i = 0;i< nums.length - 2;i++) {
        maxList.push(Math.max(...nums.slice(i,i+k)))
    }
    return maxList;
}
console.log(a(nums,k));

// 如何使用窗口解决
function b (nums,k) {
    var dynmaic = [];
    var result = [];
    for(var i = 0;i<nums.length;i++) {
        dynmaic.push(nums[i]);
        if(i >= k - 1) {
            result.push(Math.max(...dynmaic));
            dynmaic.shift();
        }
    }
    return result;
}
