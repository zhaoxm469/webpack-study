const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /.scss$/,
            use: [MinCssExtractPugin.loader, 'css-loader', 'sass-loader'],
        }],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MinCssExtractPugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                // 去掉空格
                collapseInlineTagWhitespace: true,
                // 去掉注释
                removeComments: true,
            },
        }),
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
