const path = require('path');
const webpack = require('webpack');
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
var HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { output } = require('./webpack/output');
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
        // first: './src/first.jsx',
        // second: './src/second.jsx'
        test:'./src/chunkFilename.jsx'
    },
    output,
    module: {
        rules: [
            jsLoader,
            cssLoader,
            scssLoader,
            urlLoader
        ]
    },
    plugins: [
        MiniCssExtractPlugin,
        OptimizeCssAssetsPlugin,
        DllReferencePluginPlugin,
        //new BundleAnalyzerPlugin(),
        // new HtmlWebpackPlugin({
        //     template: path.resolve('./template/index.html')
        // })
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
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all',
                    priority: 2,//优先级
                    minChunks: 3,//被提取的模块必须被引用2次，好像是指多个chunk入口
                    minSize:1,//默认情况下模块要大于30kb才会进行提取
                    // maxInitialRequests:1,
                }
            }
        }
    }
}