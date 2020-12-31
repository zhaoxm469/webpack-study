const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src/main.js'),
    output: {
        filename: 'bundel.js',
        path: resolve(__dirname, 'dist'),
    },
    model: {
        rules: [
            {
                test: /.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limt: 1 * 1000,
                    },
                },
            },
            {
                exclude: /\.(scss|js|html)$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[contenthash:8].css',
        }),
    ],
    mode: 'prodaction',
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
    },
};
