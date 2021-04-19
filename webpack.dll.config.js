const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
module.exports = {
    mode:'production',
    entry:{
        vendor:['react','react-dom']
    },
    output:{
        filename: '[name].dll.[contenthash].js',
        path: path.resolve(__dirname, 'dll'),
        library: '_dll_[name]'
    },
    plugins:[
        new DllPlugin({
            name:'_dll_[name]',
            path:path.join(__dirname, 'dll', '[name].manifest.json')
        })
    ],
    optimization: {
        minimize: true,
    },
}