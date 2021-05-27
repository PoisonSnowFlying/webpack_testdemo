function a(nums) {
    for(var i = 1;i< nums.length;i++) {// 未排序数组
        perIndex = i - 1;
        current = arr[i];
        while(perIndex >=0 && current < nums[preIndex]) {
            nums[perIndex + 1] = nums[preIndex];
            perIndex -- ;
        }
        nums[perIndex + 1] = current;
    }
    return nums;
}