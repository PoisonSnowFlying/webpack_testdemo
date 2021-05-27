class HashPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap('HashPlugin',(compilation)=> {
            compilation.hooks.afterHash.tap('HashPlugin',()=> {
                // hash
                compilation.hash = 'hash' + Date.now();
                //拿到本次编译的所有代码块
                let chunks = compilation.chunks;
                // chunkhash
                for(let chunk of compilation.chunks){
                    // 每个代码块的hash计算结果放到chunk.renderedHash属性里
                    chunk.renderedHash = chunk.name + '_chunkHash';
                    // contenthash
                    chunk.contentHash = {'javascript':'contentHash'}
                }
            })
            
        })
    }
}
module.exports = HashPlugin;