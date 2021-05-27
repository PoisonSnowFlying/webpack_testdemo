function a(nums) {
    function splitArrFn(arr) {
        if(arr.length === 1) {
            return arr;
        }
        var middle = Math.floor(arr.length / 2);
        var left = arr.slice(0,middle);
        var right = arr.slice(middle);
        return mergeArrFn(splitArrFn(left),splitArrFn(right));
    }

    function mergeArrFn(left,right) {
        var iLeft = 0;
        var iRight = 0;
        var result = [];
        while(iLeft < left.length && iRight < right.length) {
            if(left[iLeft] < right[iRight]) {
                result.push(left[iLeft]);
                iLeft ++;
            }
            if(left[iLeft] >= right[iRight]) {
                result.push(right[iRight]);
                iRight ++;
            }
        }
        while(iLeft < left.length) {
            result.push(left[iLeft]);
            iLeft ++;
        }
        while(iRight < right.length) {
            result.push(right[iRight]);
            iRight ++;
        }
        return result;
    }
    return splitArrFn(nums);    
}