// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例:

// s = "abaccdeff"
// 返回 "b"

// s = "" 
// 返回 " "
// 限制：

// 0 <= s 的长度 <= 50000

const firstUniqChar = function(s) {
    if(!s) return " "
    let map = new Map()
    for(let c of s) {
        if(map.has(c)) {
            map.set(c, map.get(c) + 1)
        } else {
            map.set(c, 1)
        }
    }
    for(let c of map.keys()) {
        if(map.get(c) === 1) {
            return c
        }
    }

    return  " "
};
//在这里发现一个原来不知道的事情，
//Map.prototype.keys()
//返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键 