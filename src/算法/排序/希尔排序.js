function xrSort(nums) {
    for(var gap = Math.floor(nums.length / 2);gap >=1;gap = Math.floor(gap / 2)) {
        for(var i = gap;i<nums.length;i++) {
            var j = i;
            var current = nums[j]
            while(j - gap >= 0 && current < nums[j-gap] ) {
                nums[j] = nums[j-gap];
                j -=gap;
            }
            console.log(j);
            nums[j] = current;
        }
    }
    return nums
}
xrSort([8,7,6,5,4,3,2,1])


//对于一个数组[1,2,3,4,5,6,7,8]
//第一次拆分 除2 对应就是 每两个元素一组，两个元素的index差值为lenth / 2也就是4，遍历开始索引就是length / 2

// 第二次拆分 除4 对应就是每四个元素一组，两个元素的index差值就是length / 4也就是2，遍历开始索引就是 length / 4

//所以i = gap = Math.floor(nums.length / 2)；


// 我艹我竟然看懂了！！！！！
