const { resolve, join } = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const commonCssLoad = [MiniCssExtractPlugin.loader, 'css-loader'];

module.exports = {
    entry: resolve(__dirname, './src/main.js'),
    output: {
        filename: 'js/bundel.js',
        path: resolve(__dirname, 'dist'),
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: commonCssLoad,
            },
            {
                test: /\.scss$/,
                use: [...commonCssLoad, {
                    loader: 'postcss-loader',
                }, 'sass-loader'],
            },
            {
                test: /\.(png|gif|jpe|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 10,
                        name: 'images/[name][hash:8].[ext]',
                        publicPath: '/',
                    },
                }],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                exclude: /\.(html|js|css|scss|png|jphg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'others/',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './src/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[contenthash:8].css',
        }),
        new CleanWebpackPlugin(),
        new EslingPlugin({
            fix: true,
        }),
    ],
    mode: 'production',
    devServer: {
        contentBase: join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
    },
};
