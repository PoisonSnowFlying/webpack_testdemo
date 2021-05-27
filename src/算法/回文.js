function a(str) {
    var i = 0;
    var j = str.length - 1;
    while(i <=j) {
        if(str.charAt(i) !== str.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
function isPlalindrome(input) {
    if (typeof input !== 'string') return false;
    return input.split('').reverse().join('') === input;
  }