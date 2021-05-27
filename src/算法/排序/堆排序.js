//https://zhuanlan.zhihu.com/p/152285749 什么是完全二叉树
//堆是一棵完全二叉树，他可以使用数组存储，并且大顶堆的最大值存储在根结点。
//操作步骤
//1.将愿序列（n个）转换为一个大顶堆
//2.设置堆的有效序列长度为n
//3.将堆顶的元素与最后一个子元素交换，并且有效序列长度 - 1
//4.堆化有效序列，使有效序列重新成为一个大顶堆
//重复步骤2，知道有序列的长度为1，排序完成


// 堆的英文,
//如果看不懂逻辑，请看下第一个链接中的图
//等比数列，公比是2的求和公式是2^k - 1
function sort(items) {
    //第一步将items转成一个大顶堆
    for(var i = Math.floor(items.length/2);i >=0;i--) {
        heapify(items,items.length,i);
    }
    var useLength = items.length;
    // 第二步
    for(var j = 0;j< items.length;j++) {
        console.log(items[0],items[useLength - 1]);
        swap(items,0,useLength - 1);

        useLength --;
        heapify(items,useLength,0);
    }
    function  heapify(items,size,i) {
        while(true) {
            var maxIndex = i;
            var leftPoint = 2*i + 1;
            var rightPoint = 2*i + 2;
            if(leftPoint < size && items[leftPoint] > items[maxIndex]) {
                maxIndex = leftPoint;
            }
            if(rightPoint < size && items[rightPoint] > items[maxIndex]) {
                maxIndex = rightPoint;
            }
            if(maxIndex === i) {
                break;
            }
            // 交换
            swap(items,i,maxIndex);
            // 向下遍历
            i = maxIndex; 
        }
    }
    function swap(items,a,b) {
        var temp = items[a];
        items[a] = items[b];
        items[b] = temp;
    }
    return items;
}
console.log(sort([91,60,96,13,35,65,46,65,10,30,20,31,77,81,22]));
//时间复杂度 建堆的过程是0(n) 排序过程是0(nlogn)
//空间复杂度 0(1)