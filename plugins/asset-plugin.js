/**
 * 插件用来把所有打包产出的文件压缩到一个压缩包，供上线使用
 * 1.需要知道本次编译出哪些文件，以及这些文件的内容是什么
 * 2.需要生成一个新的文件，并且添加到输出列表中，并写入dist目录
 */
const JSZip = require('jszip');
const {RawSource} = require('webpack-sources');
class ZipPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        // emit 钩子会在生成资源到output目录之前触发，它是修改输出文件最后的机会
        compiler.hooks.emit.tapAsync('ZipPlugin',(compilation,callback)=> {
            let zip = new JSZip();//先创建一个压缩包
            for(let filename in compilation.assets) {
                const source = compilation.assets[filename].source();
                //向压缩里面添加一个文件
                zip.file(filename,source);
            }
            zip.generateAsync({type:'nodebuffer'}).then(content=> {
                //把压缩包文件添加到输出列表中
                compilation.assets[ this.options.filename || 'assets.zip'] = new RawSource(content);
                callback();
            })
        })
    }
}
module.exports = ZipPlugin;