module.exports = {
    test: /\.(png|svg|jpg|gif)$/,
    use:[
        {
            loader:'url-loader',
            options:{
                limit:8192,
                name:'images/[name]-[hash:6].[ext]',
                esModule: false,
            }
        }
    ]
}