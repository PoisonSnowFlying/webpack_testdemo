var nums1 = [1, 2, 3], m = 3
var nums2 = [2, 5, 6], n = 3
console.log(a(nums1, nums2));
function a(nums1, nums2) {
    var len1 = nums1.length - 1;
    var len2 = nums2.length - 1;

    var len = len1 + len2 + 1;
    while (len2 >= 0) {
        if (len1 >= 0) {
            console.log(nums1,nums1[len1], nums2[len2],len1,len2);
            if (nums1[len1] >= nums2[len2]) {
                nums1[len] = nums1[len1];
                len1--;
                len--;
            }
            if (nums1[len1] < nums2[len2]) {
                nums1[len] = nums2[len2];
                len2--;
                len--;
            }
        }
        else {
            nums1[len] = nums2[len2];
            len2--;
            len--;
        }

    }
    return nums1;
}