const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
// 告诉webpack使用了哪些第三方库代码
module.exports = new DllReferencePlugin({
    // jquery 映射到json文件上去
    manifest: require('../../dll/vendor.manifest.json'),
})