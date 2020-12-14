const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.scss$/i,
            // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
            //     loader: 'postcss-loader',
            //     options: {
            //         plugins: [
            //             autoprefixer,
            //         ],
            //     },
            // }],
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

    ],
    mode: 'development',
};
