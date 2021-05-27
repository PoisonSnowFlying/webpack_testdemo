if(Array.isArray(options.plugins)) {
    for(const plugin of options.plugins) {
        if(typeof plugin === 'function') {
            plugin.call(compiler,compiler)
        } else {
            plugin.apply(compiler);
        }
    }
}