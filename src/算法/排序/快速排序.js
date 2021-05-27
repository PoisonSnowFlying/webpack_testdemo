function a(arr) {
    function quick(arr,left,right) {
        if(left < right) {
            index = rankFn(arr,left,right);
            if(left < index) {
                quick(arr,left,index - 1)
            }
            if(index < right) {
                quick(arr,index,right);
            }
        }
    }
    function rankFn (arr,left,right) {
        var middle = Math.floor((left + right) / 2);
        var i = left;
        var j = right;
        while(i <= j) {
            while(arr[i] < arr[middle] && i < middle) {
                i ++;
            }
            while(arr[j] > arr[middle] && j > middle) {
                j--;
            }
            var tempVal = arr[i];
            arr[i] = arr[j];
            arr[j] = tempVal;
            i = i + 1;
            j = j - 1;
        }
        return i;
    }
    quick(arr,0,arr.length - 1);
    return arr;
}
console.log(a([1,3,2,5,4]));

// 时间复杂度：O(nlogn)
// 空间复杂度：O(nlogn)