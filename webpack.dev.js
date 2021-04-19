const path = require('path');
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
var HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const merge  = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {output}  = require('./webpack/output');
const {
    urlLoader,
    cssLoader,
    scssLoader,
    jsLoader
} = require('./webpack/loaders');
module.exports = {
    mode,
    entry: {
        main: './src/asyncSeriesWaterfallHook.jsx',
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
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve('./template/index.html')
    })],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        //contentBase: false,
        //contentBase:path.join(__dirname, 'dist'),
        //publicPath:'/dist/',
        compress: true,
        inline: true,
        hot: true,
        open: true,
    }
}