// import('./utils/d').then((data)=> {
//   console.log(data);
// })
import { set } from 'core-js/core/dict';
import x from './utils/d';
console.log(x);

function threeAdd(arr) {
    var newArr = arr.sort((a,b)=> a - b);
    console.log(newArr);
    var set = new Set();
    var result = [];
    for(var i = 0 ;i< newArr.length - 2;i++ ) {
       if(i > 0) {
           while(newArr[i] === newArr[i - 1]) {
               i++;
           }
       }
       var first = newArr[i];
       j = i + 1;
       while(j < newArr.length) {
           var third = newArr[j];
           var second = 0 - first - third;
           if(set.has(second)) {
            result.push([first,second,third]);
            j++;
            while(newArr[j] === newArr[j - 1]) {
                j++;
            }
           } else {
               set.add(third);
               j++;
           }
       }
       set = new Set();
    }
    return result;
}
threeAdd([-1, 0, 1, 2, -1, -4]);

数组去重
Array.from(new Set(arr));
[...new Set(arr)];

[1,2,3,4,6,6,5,3,3,2,1].sort().reduce((caculator,item,index)=> {
    if(index === 0  || item !== caculator[caculator.length - 1]){
        caculator.push(item);
    }
    return caculator;
},[])


[1,2,3,4,6,6,5,3,3,2,1].filter((element,index,arr)=> {
    return arr.indexOf(element) === index 
})

loader.pitch = function loaderPitch(remainingRequest,previousRequest,data) {
    let asyncCallback = this.async;
    console.log(this);
    asyncCallback(null);   
}
function runSyncOrAsync(fn,context,args,callback) {
    let isSync = true;
    let isDone = false;
    context.async = function () {
        isSync = false;
        return innerCallback;
    }
    const innerCallback = context.callback = function (...args) {
        isDone = true;
        isSync = false;
        callback.apply(null,args);
    }
    let result = fn.apply(context,args);

    if(isSync) {
        isDone = true;
        return callback(null,result);
    }
}

pitch1如果不是异步的，那么执行完picth1后就执行result,然后执行pitchLoader流程的callback
