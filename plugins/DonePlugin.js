class DonePlugin {
    apply(compiler) {
        //done:new AsyncSeriesHooks(["stats"]);
        compiler.hooks.done.tap('DonePlugin',(stats)=> {
            //console.log(stats);
        });
    }
}
module.exports = DonePlugin;