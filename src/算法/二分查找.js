// 也称折半查找算法，它是⼀种简单易懂的快速查找算法。例如我随机写0-100之间的⼀个数字，让你
// 猜我写的是什么？你每猜⼀次，我就会告诉你猜的⼤了还是⼩了，直到猜中为⽌。
// 该算法要求待查找的数组已排序，实现步骤如下：
// 选择数组中的中间数
// 查找数与中间数对⽐，⽐中间数低，则去中间数左边的⼦数组中寻找；⽐中间数⾼，则去中间数
// 右边的⼦数组中寻找；相等则返回查找成功
// ᯿复上⼀步，知道查找成功或失败


function a(nums,target) {
    if(!nums.length) return [-1,-1];
    var low = 0;
    var high = nums.length - 1;
    while(low < high) {
        var middle = Math.floor((low + high) / 2);
        var elem = nums[middle];
        if(target > elem) {
            low = middle + 1;
        } else if(target < elem) {
            high = middle - 1;
        }
        return middle;
    }
    return -1;
}
// ⼆分查找易错点：
// 循环退出条件是 low <= high ，注意是 <=
// mid 的取值是 Math.floor((low+high)/2)
// low high 每次更新的时候， low = mid + 1 high = mid - 1
// ⼆分查找局限性：
// 仅限于查找表是 顺序储存结构 ，因为是通过下标来随机访问元素
// 元素必须有序
// 顺序储存结构太⼩不合适，直接使⽤顺序查找即可
// 顺序储存结构太⻓不合适，它要求连续的内存空间，太⻓不利于存储

//例子
//在排序数组中查找元素的第⼀个和最后⼀个位置
// 解答一：findIndex、lastIndexOf
// findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。










