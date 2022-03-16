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
        static : './dist',    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
            minify:{
                removeEmptyElements: false,
            },
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
                test: /\.(png|jfif|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};
