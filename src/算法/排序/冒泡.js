function a(nums) {
    for(var i=0;i<nums.length;i++) {
        for(var j =0;j<nums.length - 1 - i;j++) {
            if(nums[j] > nums[j+1]) {
                var temp = nums[j+ 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
}