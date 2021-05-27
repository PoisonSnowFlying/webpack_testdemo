const path = require('path');
module.exports = {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname,'../dist/bbb'),
    publicPath: 'https://cdn.example.com/'
    //publicPath:'http://a.58cdn.com.cn/app58/static/neighbourhood/imgs/task/',
};    