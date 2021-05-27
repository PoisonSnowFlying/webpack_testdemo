const path = require('path');
const webpack = require('webpack');
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const output = require('./webpack/output');
const DonePlugin = require('./plugins/DonePlugin');
const AutoExternalPlugin = require('./plugins/autoExternalPlugin');
const AssetPlugin = require('./plugins/asset-plugin');
const HashPlugin = require('./plugins/hash-plugin');
const {
    urlLoader,
    cssLoader,
    scssLoader,
    jsLoader
} = require('./webpack/loaders');
const {
    DllReferencePluginPlugin,
    MiniCssExtractPlugin,
    OptimizeCssAssetsPlugin,
    TerserPlugin,
} = require('./webpack/plugins');
module.exports = {
    mode:'development',
    entry: {
        // first: './src/testMaxSizeFirst.jsx',
        // second: './src/testMaxSizeSecond.jsx'
        //index:'./src/index.jsx',
        //index2:'./src/index2.jsx'
        //test:'./src/.jsx'
        demo:'./src/demo.js'
    },
    output,
    module: {
        rules: [
            // jsLoader,
            cssLoader,
            scssLoader,
            urlLoader
        ]
    },
    plugins: [
        MiniCssExtractPlugin,
        OptimizeCssAssetsPlugin,
        DllReferencePluginPlugin,
        new AssetPlugin({
            filename:'assets.zip'
        }),
        new HashPlugin(),
        //new DonePlugin(),
        // new AutoExternalPlugin({
        //         jquery:{
        //             expose:'$',
        //             url:'https://cdn.bootcss.com/jquery/3.1.0/jquery.js'
        //         },
        //         lodash:{
        //             expose:'_',
        //             url:'https://cdn.bootcdn.net/ajax/libs/lodash.js/0.1.0/lodash.js'
        //         }
        //     }
        // ),
        //new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./template/index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    optimization: {
        minimize: false,
        minimizer: [
            TerserPlugin
        ],
        //runtimeChunk: true,
        // splitChunks: {
        //     chunks: "all",
        //     cacheGroups: {
        //         common: {
        //             //name: 'common',
        //             chunks: 'all',
        //             // priority: 2,//优先级
        //             minChunks: 3,//被提取的模块必须被引用2次，指几个entry chunk入口
        //             minSize:1000,//单位是bytes字节
        //             //maxSize:15000,
        //             // maxInitialRequests:1,
        //         }
        //     }
        // }
     }
}