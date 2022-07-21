const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry:'./index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        minimize: true,
                    },
                },
            },
            { 
                test: /\.json$/,
                use: 'json-loader' 
            },
            { 
                test:/\.(s*)css$/, 
                use:['style-loader','css-loader', 'sass-loader'] 
            },
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        host: "localhost",
        port: process.env.PORT || 3000,
        open: true,
    },
}