const path = require('path');
module.exports = {
    test: /\.(js|jsx)$/,
    exclude: '/node_modules/',
    use: [
        {
            loader: 'babel-loader',
            options:{
                plugins:[[
                    path.resolve(__dirname,'../../plugins/babel-plugin-import.js'),{library:'lodash'}
                ]]
            }
        },
    ],
}