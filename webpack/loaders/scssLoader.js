const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
        test: /\.scss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader',
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            [
                                "autoprefixer", {
                                    broswers: ['last 5 versions', '> 0.05%'],
                                    remove: false,
                                }
                            ],
                            // ["postcss-preset-env"]
                        ]
                    },
                },
            },
        ]
}