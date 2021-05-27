function a(nums) {
    for(var i = 0;i< nums.length - 1;i++) {
        var minIndex = i;
        for(var j = i + 1;j < nums.length;j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        var temp = nums[i];
        nums[i] = nums[minIndex]
        nums[minIndex] = temp;
    }
    return nums;
}