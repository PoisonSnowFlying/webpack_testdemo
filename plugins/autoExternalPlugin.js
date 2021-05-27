/**
 * 如果不用此插件，需要手动在模版中添加cdn url地址，而且需要在webpack中配置external对象
 * 此插件需要做两件事情
 * 1.自动在html里面插入script标签，标签的src指向库的cdn url地址
 * 2.当引入lodash,jquery模块的死后，自动转为外部模块，不再打包此模块到chunk,读取window上的_和$
 *
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
class AutoExternalPlugin {
    constructor(options){
        this.options = options;
    }
    apply(compiler) {
        let _this = this; // 缓存this
        let {options} = _this;

        // 自动向产出的html中插入script标签
        //通过舰艇compilation钩子可以实现在comiler在开启一次新的编译的时候，会把compilation传进来
        compiler.hooks.compilation.tap('AutoExternalPlugin',(compilation)=> {
            // HtmlWebpackPlugin可以在compilation上面挂载额外的钩子
            //compilation。hooks.htmlWebpackPluginAlterAssetTags
            HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync('AutoExternalPlugin',(htmlPluginData,callback)=> {
                //异步串行瀑布钩子
                //console.log(JSON.stringify(htmlPluginData,null,2));
                //console.log(Object.values(options));
                let srciptUrls = Object.values(options).map((item)=> item.url);
                srciptUrls.forEach((item)=> {

                    htmlPluginData.assetTags.scripts.unshift(
                        {
                            "tagName": "script",
                            "voidTag": false,
                            "attributes": {
                              "defer": true,
                              "src": item
                            }
                          }
                    )
                })
                callback(null,htmlPluginData);
            })
            //
        })
    }
}
module.exports = AutoExternalPlugin