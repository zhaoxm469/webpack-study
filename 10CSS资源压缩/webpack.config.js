const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'build',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /.scss$/,
            use: [MinCssExtractPugin.loader, 'css-loader', 'sass-loader'],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MinCssExtractPugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin({
                // 启用/ 禁用多进程并行运行。
                parallel: true,
            }),
        ],
    },

};
