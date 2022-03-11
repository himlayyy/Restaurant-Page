const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode : 'development',
    entry : {
        index : './src/index.js',
        site : './src/site.js'
    },
    devtool: 'inline-source-map',
    devServer : {
        static : './dist',
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
        })
    ],
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist'),
        clean : true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use :['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jfif|jpg|jpeg)$/i,
                type: 'asset/resource',
            }
        ],
    },
};