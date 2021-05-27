// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
function a (num1,nums2) {
    var i = 0;
    var result = [];
    num1 = [...new Set(num1)];
    while(i < num1.length) {
        if(nums2.includes(num1[i])) {
            result.push(num1[i]);
        }
        i++;
    }
    return result;
}
console.log(a([4,9,5],[9,4,9,8,4]));

// 找并集
function b(num1,num2) {
    return [...new Set(num1.concat(num2))]
}
// 找差集
function c(num1,num2) {
    var store = new Set(num1);
    num2 = [...new Set(num2)];
    for(var i = 0;i< num2.length;i++) {
        if(store.has(num2[i])) {
            store.delete(num2[i]);
        } else {
            store.add(num2[i]);
        }
    }
    return [...store];
}
console.log(c([1,2,3],[2,4,5]));